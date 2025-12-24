import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface GenerateRequest {
  productId: string;
  productName: string;
  category: string;
  affirmation: string;
  color?: string;
  clothingType: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const { productId, productName, category, affirmation, color = "black", clothingType } = await req.json() as GenerateRequest;

    console.log(`Generating image for product: ${productName} (${category})`);

    // Build detailed prompt based on clothing type and category
    const promptsByType: Record<string, string> = {
      "t-shirt": `Ultra high resolution luxury fashion product photography of a premium ${color} t-shirt displayed on pure white background. The t-shirt features an elegant, sophisticated design with artistic typography displaying "${affirmation}" in a refined, editorial style. Include a subtle bronze/copper Thrive logo (minimalist head silhouette with heart inside) on the chest. Style: Louis Vuitton-level luxury fashion catalog, magazine-quality photography, clean minimal composition, high-end apparel presentation. The design should feel inspirational, motivational, and empowering. Professional studio lighting, crisp details, 16:9 aspect ratio.`,
      
      "hoodie": `Ultra high resolution luxury streetwear product shot of a premium ${color} hoodie on clean white background. Front features artistic, elegant typography with "${affirmation}" in sophisticated lettering. The Thrive brand logo (bronze/copper minimalist head with heart symbol) appears on the upper chest. Back or sleeve has subtle motivational accent text. Style: high-end fashion magazine photography, luxury streetwear aesthetic, Louis Vuitton-inspired presentation. Professional studio lighting with soft shadows, crisp fabric details visible. 16:9 aspect ratio.`,
      
      "athleisure": `Ultra high resolution activewear product photography of premium ${color} athletic wear on white background. Features dynamic, inspiring design with "${affirmation}" in modern athletic typography. Includes the Thrive logo (bronze/copper head-heart symbol) as an accent. Style: Nike/Lululemon level luxury athletic apparel, magazine-quality photography, motivational sports aesthetic. Clean composition, professional lighting, fabric texture visible. 16:9 aspect ratio.`,
      
      "lifestyle": `Ultra high resolution lifestyle apparel photography of elegant ${color} casual wear on white background. Features refined, artistic design with "${affirmation}" in tasteful typography. Includes subtle Thrive branding (bronze/copper minimalist logo). Style: luxury lifestyle brand aesthetic, Anthropologie/Free People level quality, editorial fashion photography. Soft lighting, premium fabric feel, aspirational lifestyle appeal. 16:9 aspect ratio.`,
      
      "kids": `Ultra high resolution kids apparel product photo of a cheerful ${color} children's garment on white background. Features fun, educational design with "${affirmation}" in playful but elegant typography suitable for children. Includes a friendly Thrive logo (bronze/copper head-heart). Style: high-end children's fashion brand aesthetic, Gap Kids/Mini Boden quality, bright and positive energy. Safe, wholesome, inspirational for young minds. 16:9 aspect ratio.`,
      
      "thrivemt": `Ultra high resolution mental health awareness apparel photography of a premium ${color} garment on white background. Features powerful, meaningful design with "${affirmation}" in artistic, healing-focused typography. Prominent Thrive logo (bronze/copper head with heart inside representing mental wellness). Style: therapeutic yet fashionable, luxury awareness apparel, magazine-quality photography. Colors: calming tones with bronze/gold accents. Conveying hope, healing, and strength. 16:9 aspect ratio.`
    };

    const clothingKey = clothingType.toLowerCase().replace(/s$/, '').replace('-', '');
    const prompt = promptsByType[clothingKey] || promptsByType['t-shirt'];

    console.log(`Using prompt for clothing type: ${clothingKey}`);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image-preview",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        modalities: ["image", "text"]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add credits to continue." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      
      throw new Error(`AI generation failed: ${response.status}`);
    }

    const data = await response.json();
    console.log("AI response received successfully");

    const imageData = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;
    
    if (!imageData) {
      throw new Error("No image data in AI response");
    }

    // Upload to Supabase Storage
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Convert base64 to blob
    const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');
    const imageBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    
    const fileName = `${productId}-${Date.now()}.png`;
    
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('product-images')
      .upload(fileName, imageBytes, {
        contentType: 'image/png',
        upsert: true
      });

    if (uploadError) {
      console.error("Upload error:", uploadError);
      throw new Error(`Failed to upload image: ${uploadError.message}`);
    }

    const { data: publicUrl } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    console.log(`Image uploaded successfully: ${publicUrl.publicUrl}`);

    return new Response(JSON.stringify({ 
      success: true,
      imageUrl: publicUrl.publicUrl,
      productId,
      productName
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error('Error in generate-product-image:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : "Unknown error occurred" 
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
