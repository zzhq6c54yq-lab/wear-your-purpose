import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Loader2, Sparkles, Check, X, RefreshCw } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { products } from '@/data/products';

interface GeneratedImage {
  productId: string;
  imageUrl: string;
  status: 'pending' | 'generating' | 'success' | 'error';
  error?: string;
}

const ProductImageGenerator = () => {
  const [generatedImages, setGeneratedImages] = useState<Record<string, GeneratedImage>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { toast } = useToast();

  const categories = ['all', 'ThriveMT', 'T-Shirts', 'Hoodies', 'Athleisure', 'Lifestyle', 'Kids'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const getClothingType = (category: string): string => {
    const typeMap: Record<string, string> = {
      'ThriveMT': 'thrivemt',
      'T-Shirts': 't-shirt',
      'Hoodies': 'hoodie',
      'Athleisure': 'athleisure',
      'Lifestyle': 'lifestyle',
      'Kids': 'kids'
    };
    return typeMap[category] || 't-shirt';
  };

  const generateImage = async (product: typeof products[0]) => {
    const productKey = String(product.id);
    setGeneratedImages(prev => ({
      ...prev,
      [productKey]: { productId: productKey, imageUrl: '', status: 'generating' }
    }));
    setCurrentProduct(product.name);

    try {
      const { data, error } = await supabase.functions.invoke('generate-product-image', {
        body: {
          productId: product.id,
          productName: product.name,
          category: product.category,
          affirmation: product.affirmation,
          color: product.colors?.[0] || 'black',
          clothingType: getClothingType(product.category)
        }
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setGeneratedImages(prev => ({
        ...prev,
        [productKey]: { 
          productId: productKey, 
          imageUrl: data.imageUrl, 
          status: 'success' 
        }
      }));

      return true;
    } catch (error) {
      console.error('Generation error:', error);
      setGeneratedImages(prev => ({
        ...prev,
        [productKey]: { 
          productId: productKey, 
          imageUrl: '', 
          status: 'error',
          error: error instanceof Error ? error.message : 'Unknown error'
        }
      }));
      return false;
    }
  };

  const generateAllImages = async () => {
    setIsGenerating(true);
    setProgress(0);

    const productsToGenerate = filteredProducts.filter(
      p => !generatedImages[String(p.id)] || generatedImages[String(p.id)].status === 'error'
    );

    for (let i = 0; i < productsToGenerate.length; i++) {
      const product = productsToGenerate[i];
      await generateImage(product);
      setProgress(((i + 1) / productsToGenerate.length) * 100);
      
      // Small delay between generations to avoid rate limiting
      if (i < productsToGenerate.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    setIsGenerating(false);
    setCurrentProduct(null);
    
    const successCount = Object.values(generatedImages).filter(g => g.status === 'success').length;
    toast({
      title: "Generation Complete",
      description: `Successfully generated ${successCount} product images.`,
    });
  };

  const generateSingleImage = async (product: typeof products[0]) => {
    setIsGenerating(true);
    await generateImage(product);
    setIsGenerating(false);
    setCurrentProduct(null);
  };

  const getStatusIcon = (productId: string) => {
    const image = generatedImages[productId];
    if (!image) return null;
    
    switch (image.status) {
      case 'generating':
        return <Loader2 className="h-4 w-4 animate-spin text-primary" />;
      case 'success':
        return <Check className="h-4 w-4 text-green-500" />;
      case 'error':
        return <X className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const successCount = Object.values(generatedImages).filter(g => g.status === 'success').length;
  const errorCount = Object.values(generatedImages).filter(g => g.status === 'error').length;

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            AI Product Image Generator
          </h1>
          <p className="text-muted-foreground">
            Generate custom affirmation-based product images using AI
          </p>
        </div>

        {/* Stats & Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              Generation Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4 mb-6">
              <Badge variant="secondary" className="text-sm">
                Total Products: {filteredProducts.length}
              </Badge>
              <Badge variant="default" className="text-sm bg-green-500">
                Generated: {successCount}
              </Badge>
              {errorCount > 0 && (
                <Badge variant="destructive" className="text-sm">
                  Errors: {errorCount}
                </Badge>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </Button>
              ))}
            </div>

            {isGenerating && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Generating: {currentProduct}
                  </span>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <Button
              onClick={generateAllImages}
              disabled={isGenerating}
              size="lg"
              className="w-full md:w-auto"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Generate All {selectedCategory === 'all' ? '' : selectedCategory} Images
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => {
            const productKey = String(product.id);
            return (
            <Card key={product.id} className="overflow-hidden">
              <div className="aspect-square relative bg-muted">
                {generatedImages[productKey]?.status === 'success' ? (
                  <img 
                    src={generatedImages[productKey].imageUrl} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-50"
                  />
                )}
                <div className="absolute top-2 right-2">
                  {getStatusIcon(productKey)}
                </div>
                {generatedImages[productKey]?.status === 'generating' && (
                  <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
                    <div className="text-center">
                      <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Generating...</p>
                    </div>
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
                  <Badge variant="outline" className="text-xs shrink-0">
                    {product.category}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground italic mb-3 line-clamp-2">
                  "{product.affirmation}"
                </p>
                {generatedImages[productKey]?.status === 'error' && (
                  <p className="text-xs text-destructive mb-2">
                    {generatedImages[productKey].error}
                  </p>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  disabled={isGenerating && currentProduct !== product.name}
                  onClick={() => generateSingleImage(product)}
                >
                  {generatedImages[productKey]?.status === 'generating' ? (
                    <Loader2 className="h-3 w-3 animate-spin" />
                  ) : generatedImages[productKey]?.status === 'success' ? (
                    <>
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Regenerate
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-3 w-3 mr-1" />
                      Generate
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGenerator;
