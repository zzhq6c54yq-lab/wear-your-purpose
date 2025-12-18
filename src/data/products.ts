// T-Shirts imports
import tshirt1 from "@/assets/products/tshirt-1.jpg";
import tshirt2 from "@/assets/products/tshirt-2.jpg";
import tshirt3 from "@/assets/products/tshirt-3.jpg";
import tshirt4 from "@/assets/products/tshirt-4.jpg";
import tshirt5 from "@/assets/products/tshirt-5.jpg";
import tshirt6 from "@/assets/products/tshirt-6.jpg";
import tshirt7 from "@/assets/products/tshirt-7.jpg";
import tshirt8 from "@/assets/products/tshirt-8.jpg";
import tshirt9 from "@/assets/products/tshirt-9.jpg";
import tshirt10 from "@/assets/products/tshirt-10.jpg";
import tshirt11 from "@/assets/products/tshirt-11.jpg";
import tshirt12 from "@/assets/products/tshirt-12.jpg";
import tshirt13 from "@/assets/products/tshirt-13.jpg";
import tshirt14 from "@/assets/products/tshirt-14.jpg";
import tshirt15 from "@/assets/products/tshirt-15.jpg";

// Hoodies imports
import hoodie1 from "@/assets/products/hoodie-1.jpg";
import hoodie2 from "@/assets/products/hoodie-2.jpg";
import hoodie3 from "@/assets/products/hoodie-3.jpg";
import hoodie4 from "@/assets/products/hoodie-4.jpg";
import hoodie5 from "@/assets/products/hoodie-5.jpg";
import hoodie6 from "@/assets/products/hoodie-6.jpg";
import hoodie7 from "@/assets/products/hoodie-7.jpg";
import hoodie8 from "@/assets/products/hoodie-8.jpg";
import hoodie9 from "@/assets/products/hoodie-9.jpg";
import hoodie10 from "@/assets/products/hoodie-10.jpg";
import hoodie11 from "@/assets/products/hoodie-11.jpg";
import hoodie12 from "@/assets/products/hoodie-12.jpg";
import hoodie13 from "@/assets/products/hoodie-13.jpg";
import hoodie14 from "@/assets/products/hoodie-14.jpg";
import hoodie15 from "@/assets/products/hoodie-15.jpg";

// Athleisure imports
import athleisure1 from "@/assets/products/athleisure-1.jpg";
import athleisure2 from "@/assets/products/athleisure-2.jpg";
import athleisure3 from "@/assets/products/athleisure-3.jpg";
import athleisure4 from "@/assets/products/athleisure-4.jpg";
import athleisure5 from "@/assets/products/athleisure-5.jpg";
import athleisure6 from "@/assets/products/athleisure-6.jpg";
import athleisure7 from "@/assets/products/athleisure-7.jpg";
import athleisure8 from "@/assets/products/athleisure-8.jpg";
import athleisure9 from "@/assets/products/athleisure-9.jpg";
import athleisure10 from "@/assets/products/athleisure-10.jpg";
import athleisure11 from "@/assets/products/athleisure-11.jpg";
import athleisure12 from "@/assets/products/athleisure-12.jpg";
import athleisure13 from "@/assets/products/athleisure-13.jpg";
import athleisure14 from "@/assets/products/athleisure-14.jpg";
import athleisure15 from "@/assets/products/athleisure-15.jpg";

// Lifestyle imports
import lifestyle1 from "@/assets/products/lifestyle-1.jpg";
import lifestyle2 from "@/assets/products/lifestyle-2.jpg";
import lifestyle3 from "@/assets/products/lifestyle-3.jpg";
import lifestyle4 from "@/assets/products/lifestyle-4.jpg";
import lifestyle5 from "@/assets/products/lifestyle-5.jpg";
import lifestyle6 from "@/assets/products/lifestyle-6.jpg";
import lifestyle7 from "@/assets/products/lifestyle-7.jpg";
import lifestyle8 from "@/assets/products/lifestyle-8.jpg";
import lifestyle9 from "@/assets/products/lifestyle-9.jpg";
import lifestyle10 from "@/assets/products/lifestyle-10.jpg";
import lifestyle11 from "@/assets/products/lifestyle-11.jpg";
import lifestyle12 from "@/assets/products/lifestyle-12.jpg";
import lifestyle13 from "@/assets/products/lifestyle-13.jpg";
import lifestyle14 from "@/assets/products/lifestyle-14.jpg";
import lifestyle15 from "@/assets/products/lifestyle-15.jpg";

// Kids imports
import kids1 from "@/assets/products/kids-1.jpg";
import kids2 from "@/assets/products/kids-2.jpg";
import kids3 from "@/assets/products/kids-3.jpg";
import kids4 from "@/assets/products/kids-4.jpg";
import kids5 from "@/assets/products/kids-5.jpg";
import kids6 from "@/assets/products/kids-6.jpg";
import kids7 from "@/assets/products/kids-7.jpg";
import kids8 from "@/assets/products/kids-8.jpg";
import kids9 from "@/assets/products/kids-9.jpg";
import kids10 from "@/assets/products/kids-10.jpg";
import kids11 from "@/assets/products/kids-11.jpg";
import kids12 from "@/assets/products/kids-12.jpg";
import kids13 from "@/assets/products/kids-13.jpg";
import kids14 from "@/assets/products/kids-14.jpg";
import kids15 from "@/assets/products/kids-15.jpg";

export interface Product {
  id: number;
  name: string;
  category: "T-Shirts" | "Hoodies" | "Athleisure" | "Lifestyle" | "Kids";
  price: number;
  affirmation: string;
  image: string;
  description: string;
  colors: string[];
}

export const products: Product[] = [
  // ============== T-SHIRTS (15 items) ==============
  {
    id: 1,
    name: "Golden Heart Emblem Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am worthy of love and healing",
    image: tshirt1,
    description: "Premium black cotton with gold foil Thrive heart emblem. Wearable art that radiates self-worth.",
    colors: ["Black", "Charcoal", "Navy"],
  },
  {
    id: 2,
    name: "Abstract Brushstroke Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "My story is my strength",
    image: tshirt2,
    description: "Oversized cream tee with bronze abstract art and subtle logo integration.",
    colors: ["Cream", "White", "Sand"],
  },
  {
    id: 3,
    name: "Celestial Balance Tee",
    category: "T-Shirts",
    price: 31,
    affirmation: "I break cycles, not hearts",
    image: tshirt3,
    description: "Sage green with gold sun and moon embroidery featuring the Thrive head-heart logo.",
    colors: ["Sage", "Forest", "Olive"],
  },
  {
    id: 4,
    name: "Sacred Geometry Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "Peace begins within me",
    image: tshirt4,
    description: "Charcoal premium cotton with gold geometric pattern and hidden logo elements.",
    colors: ["Charcoal", "Black", "Grey"],
  },
  {
    id: 5,
    name: "Blush Essential Tee",
    category: "T-Shirts",
    price: 27,
    affirmation: "Love always wins",
    image: tshirt5,
    description: "Soft dusty rose with elegant minimal Thrive embroidery.",
    colors: ["Rose", "Blush", "Mauve"],
  },
  {
    id: 6,
    name: "Midnight Luxe Tee",
    category: "T-Shirts",
    price: 30,
    affirmation: "Together we rise",
    image: tshirt6,
    description: "Navy premium cotton with gold label and artistic affirmation typography.",
    colors: ["Navy", "Midnight", "Indigo"],
  },
  {
    id: 7,
    name: "Abstract Expression Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am enough as I am",
    image: tshirt7,
    description: "Oatmeal oversized with bronze splash art incorporating the head-heart logo.",
    colors: ["Oatmeal", "Cream", "Sand"],
  },
  {
    id: 8,
    name: "Phoenix Rising Tee",
    category: "T-Shirts",
    price: 31,
    affirmation: "Healing is not linear",
    image: tshirt8,
    description: "Washed black with gold phoenix back print and Thrive emblem chest detail.",
    colors: ["Washed Black", "Charcoal", "Vintage Grey"],
  },
  {
    id: 9,
    name: "Lotus Emblem Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am rooted in love",
    image: tshirt9,
    description: "Terracotta with gold lotus embroidery and subtle brand integration.",
    colors: ["Terracotta", "Rust", "Burnt Orange"],
  },
  {
    id: 10,
    name: "Minimalist Luxe Tee",
    category: "T-Shirts",
    price: 30,
    affirmation: "My potential is limitless",
    image: tshirt10,
    description: "Pure white premium essential with embossed Thrive logo.",
    colors: ["White", "Cream", "Pearl"],
  },
  {
    id: 11,
    name: "Butterfly Metamorphosis Tee",
    category: "T-Shirts",
    price: 32,
    affirmation: "I embrace my transformation",
    image: tshirt11,
    description: "Lavender cotton with gold butterfly artwork symbolizing change and growth.",
    colors: ["Lavender", "Lilac", "Soft Purple"],
  },
  {
    id: 12,
    name: "Waves of Calm Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I flow with life's rhythm",
    image: tshirt12,
    description: "Ocean blue with artistic wave pattern and integrated Thrive logo.",
    colors: ["Ocean Blue", "Teal", "Sky"],
  },
  {
    id: 13,
    name: "Mountain Peak Tee",
    category: "T-Shirts",
    price: 31,
    affirmation: "I climb higher every day",
    image: tshirt13,
    description: "Forest green with gold mountain range artwork and hidden heart elements.",
    colors: ["Forest", "Pine", "Moss"],
  },
  {
    id: 14,
    name: "Starlight Dreamer Tee",
    category: "T-Shirts",
    price: 30,
    affirmation: "My dreams light my path",
    image: tshirt14,
    description: "Midnight black with constellation pattern and glowing Thrive emblem.",
    colors: ["Midnight", "Black", "Deep Navy"],
  },
  {
    id: 15,
    name: "Sunrise Affirmation Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "Each day is a new beginning",
    image: tshirt15,
    description: "Warm coral with gradient sunrise art and inspirational typography.",
    colors: ["Coral", "Peach", "Sunset Orange"],
  },

  // ============== HOODIES (15 items) ==============
  {
    id: 16,
    name: "Golden Heart Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "Together we rise",
    image: hoodie1,
    description: "Cream heavyweight with gold heart emblem and premium embroidery.",
    colors: ["Cream", "Ivory", "Oatmeal"],
  },
  {
    id: 17,
    name: "Abstract Art Hoodie",
    category: "Hoodies",
    price: 58,
    affirmation: "Healing is not linear",
    image: hoodie2,
    description: "Charcoal oversized with bronze back print featuring flowing affirmations.",
    colors: ["Charcoal", "Black", "Slate"],
  },
  {
    id: 18,
    name: "Mindful Face Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "Peace begins within me",
    image: hoodie3,
    description: "Sage green with gold line art embroidery of the Thrive head-heart logo.",
    colors: ["Sage", "Olive", "Forest"],
  },
  {
    id: 19,
    name: "Chain Breaker Hoodie",
    category: "Hoodies",
    price: 60,
    affirmation: "I break cycles, not hearts",
    image: hoodie4,
    description: "Black premium with gold chain-link design transforming into hearts.",
    colors: ["Black", "Onyx", "Charcoal"],
  },
  {
    id: 20,
    name: "Blush Cropped Hoodie",
    category: "Hoodies",
    price: 56,
    affirmation: "I am worthy of love",
    image: hoodie5,
    description: "Cropped dusty pink with gold heart and elegant script affirmation.",
    colors: ["Blush", "Pink", "Rose"],
  },
  {
    id: 21,
    name: "Unity Emblem Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "United we thrive",
    image: hoodie6,
    description: "Navy pullover with bronze emblem featuring connected hearts.",
    colors: ["Navy", "Indigo", "Midnight"],
  },
  {
    id: 22,
    name: "Geometric Flow Hoodie",
    category: "Hoodies",
    price: 59,
    affirmation: "Every step is progress",
    image: hoodie7,
    description: "Stone grey with subtle geometric pattern and hidden Thrive elements.",
    colors: ["Stone", "Grey", "Silver"],
  },
  {
    id: 23,
    name: "Lilac Dreams Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "Self love is my priority",
    image: hoodie8,
    description: "Cropped lavender with gold script and artistic flourishes.",
    colors: ["Lilac", "Lavender", "Violet"],
  },
  {
    id: 24,
    name: "Explorer Compass Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "I embrace my journey",
    image: hoodie9,
    description: "Vintage washed blue with compass graphic pointing to hope.",
    colors: ["Washed Blue", "Denim", "Slate"],
  },
  {
    id: 25,
    name: "Essential Noir Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "Today I choose to thrive",
    image: hoodie10,
    description: "Classic black with minimal gold Thrive logo embroidery.",
    colors: ["Black", "Charcoal", "Onyx"],
  },
  {
    id: 26,
    name: "Sunrise Gradient Hoodie",
    category: "Hoodies",
    price: 62,
    affirmation: "My light shines bright",
    image: hoodie11,
    description: "Stunning sunrise gradient with gold embroidered affirmation.",
    colors: ["Sunset Gradient", "Dawn Gradient", "Twilight"],
  },
  {
    id: 27,
    name: "Forest Sanctuary Hoodie",
    category: "Hoodies",
    price: 59,
    affirmation: "Nature heals my soul",
    image: hoodie12,
    description: "Deep forest green with tree silhouette art and Thrive emblem.",
    colors: ["Forest", "Pine", "Moss"],
  },
  {
    id: 28,
    name: "Ocean Waves Hoodie",
    category: "Hoodies",
    price: 58,
    affirmation: "I am calm like still waters",
    image: hoodie13,
    description: "Ocean blue with wave pattern and reflective gold details.",
    colors: ["Ocean", "Teal", "Sea Green"],
  },
  {
    id: 29,
    name: "Stargazer Hoodie",
    category: "Hoodies",
    price: 61,
    affirmation: "I reach for the stars",
    image: hoodie14,
    description: "Midnight black with constellation embroidery and glow-in-dark elements.",
    colors: ["Midnight", "Galaxy", "Deep Space"],
  },
  {
    id: 30,
    name: "Terracotta Earth Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "I am grounded in my truth",
    image: hoodie15,
    description: "Warm terracotta with earth-toned art and organic design elements.",
    colors: ["Terracotta", "Clay", "Rust"],
  },

  // ============== ATHLEISURE (15 items) ==============
  {
    id: 31,
    name: "Serenity Joggers",
    category: "Athleisure",
    price: 44,
    affirmation: "Peace begins within me",
    image: athleisure1,
    description: "Relaxed fit joggers with gold side stripe and Thrive logo at hip.",
    colors: ["Sage", "Oatmeal", "Charcoal"],
  },
  {
    id: 32,
    name: "Unity Sports Bra",
    category: "Athleisure",
    price: 36,
    affirmation: "United we thrive",
    image: athleisure2,
    description: "Medium support with bronze Thrive detail and breathable mesh.",
    colors: ["Blush", "Black", "Sage"],
  },
  {
    id: 33,
    name: "Mindful Leggings",
    category: "Athleisure",
    price: 47,
    affirmation: "Every step is progress",
    image: athleisure3,
    description: "High-waisted with hidden pocket and subtle affirmation at waistband.",
    colors: ["Black", "Dusty Rose", "Navy"],
  },
  {
    id: 34,
    name: "Thrive Tank",
    category: "Athleisure",
    price: 25,
    affirmation: "Today I choose to thrive",
    image: athleisure4,
    description: "Lightweight training tank with artistic back print.",
    colors: ["White", "Coral", "Sage"],
  },
  {
    id: 35,
    name: "Flow Shorts",
    category: "Athleisure",
    price: 31,
    affirmation: "Healing is not linear",
    image: athleisure5,
    description: "Breathable running shorts with reflective Thrive logo.",
    colors: ["Black", "Sand", "Terracotta"],
  },
  {
    id: 36,
    name: "Strength Windbreaker",
    category: "Athleisure",
    price: 62,
    affirmation: "My strength comes from within",
    image: athleisure6,
    description: "Lightweight with gold reflective details and bold back graphic.",
    colors: ["Sage", "Black", "Cream"],
  },
  {
    id: 37,
    name: "Balance Yoga Pants",
    category: "Athleisure",
    price: 51,
    affirmation: "I find balance in all things",
    image: athleisure7,
    description: "Buttery soft with wide waistband featuring hidden affirmation.",
    colors: ["Midnight", "Sage", "Mocha"],
  },
  {
    id: 38,
    name: "Rise Crop Top",
    category: "Athleisure",
    price: 27,
    affirmation: "I rise with purpose",
    image: athleisure8,
    description: "Cropped workout top with empowering graphic design.",
    colors: ["Blush", "White", "Lavender"],
  },
  {
    id: 39,
    name: "Grounded Track Pants",
    category: "Athleisure",
    price: 49,
    affirmation: "I am grounded and present",
    image: athleisure9,
    description: "Classic track pants with gold side stripes and Thrive emblem.",
    colors: ["Forest", "Cream", "Navy"],
  },
  {
    id: 40,
    name: "Breathe Performance Hoodie",
    category: "Athleisure",
    price: 53,
    affirmation: "I breathe in peace, exhale worry",
    image: athleisure10,
    description: "Moisture-wicking performance fabric with ventilation panels.",
    colors: ["Oatmeal", "Slate", "Dusty Blue"],
  },
  {
    id: 41,
    name: "Warrior Matching Set",
    category: "Athleisure",
    price: 72,
    affirmation: "I am a peaceful warrior",
    image: athleisure11,
    description: "Coordinated sports bra and leggings with matching Thrive artwork.",
    colors: ["Charcoal Set", "Blush Set", "Navy Set"],
  },
  {
    id: 42,
    name: "Zen Garden Leggings",
    category: "Athleisure",
    price: 49,
    affirmation: "Tranquility guides my movements",
    image: athleisure12,
    description: "High-rise leggings with Japanese-inspired garden print and logo.",
    colors: ["Sage Garden", "Midnight Garden", "Blush Garden"],
  },
  {
    id: 43,
    name: "Momentum Shorts",
    category: "Athleisure",
    price: 34,
    affirmation: "I move forward with grace",
    image: athleisure13,
    description: "Athletic shorts with dynamic design and reflective elements.",
    colors: ["Electric Blue", "Coral", "Black"],
  },
  {
    id: 44,
    name: "Energy Flow Tank",
    category: "Athleisure",
    price: 28,
    affirmation: "My energy attracts positivity",
    image: athleisure14,
    description: "Flowy racerback tank with energizing graphic print.",
    colors: ["Sunrise", "Ocean", "Forest"],
  },
  {
    id: 45,
    name: "Champion Quarter-Zip",
    category: "Athleisure",
    price: 58,
    affirmation: "I am the champion of my life",
    image: athleisure15,
    description: "Performance quarter-zip with bold Thrive championship design.",
    colors: ["Victory Gold", "Silver Medal", "Bronze"],
  },

  // ============== LIFESTYLE (15 items) ==============
  {
    id: 46,
    name: "Luxe Canvas Tote",
    category: "Lifestyle",
    price: 29,
    affirmation: "Love always wins",
    image: lifestyle1,
    description: "Premium canvas with leather handles and artistic Thrive print.",
    colors: ["Natural", "Black", "Sage"],
  },
  {
    id: 47,
    name: "Affirmation Journal",
    category: "Lifestyle",
    price: 18,
    affirmation: "My thoughts create my reality",
    image: lifestyle2,
    description: "Gold foil guided journal with 365 daily affirmations.",
    colors: ["Cream", "Blush", "Sage"],
  },
  {
    id: 48,
    name: "Mindful Ceramic Mug",
    category: "Lifestyle",
    price: 14,
    affirmation: "Today is a gift",
    image: lifestyle3,
    description: "Premium ceramic with gold rim and hand-painted Thrive logo.",
    colors: ["Cream", "Terracotta", "Sage"],
  },
  {
    id: 49,
    name: "Healing Candle Set",
    category: "Lifestyle",
    price: 31,
    affirmation: "I radiate warmth and light",
    image: lifestyle4,
    description: "Soy candle trio with calming scents: Lavender, Sage, Vanilla.",
    colors: ["Natural", "Blush", "Amber"],
  },
  {
    id: 50,
    name: "Thrive Water Bottle",
    category: "Lifestyle",
    price: 23,
    affirmation: "I nourish my body and soul",
    image: lifestyle5,
    description: "Insulated steel with gold Thrive logo and motivational time markers.",
    colors: ["Rose Gold", "Matte Black", "Sand"],
  },
  {
    id: 51,
    name: "Peace Pendant Necklace",
    category: "Lifestyle",
    price: 36,
    affirmation: "Peace begins within me",
    image: lifestyle6,
    description: "Delicate gold-plated pendant featuring the Thrive head-heart symbol.",
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: 52,
    name: "Affirmation Card Deck",
    category: "Lifestyle",
    price: 21,
    affirmation: "Every card is a new beginning",
    image: lifestyle7,
    description: "52 beautifully illustrated affirmation cards with gold edges.",
    colors: ["Gold Edge", "Rose Edge"],
  },
  {
    id: 53,
    name: "Healing Crystals Set",
    category: "Lifestyle",
    price: 27,
    affirmation: "I am open to healing energy",
    image: lifestyle8,
    description: "Curated crystal collection: Amethyst, Rose Quartz, Clear Quartz.",
    colors: ["Mixed"],
  },
  {
    id: 54,
    name: "Luxury Throw Blanket",
    category: "Lifestyle",
    price: 51,
    affirmation: "I wrap myself in comfort and peace",
    image: lifestyle9,
    description: "Ultra-soft with embroidered Thrive message and logo.",
    colors: ["Cream", "Sage", "Dusty Rose"],
  },
  {
    id: 55,
    name: "Unity Bracelet Set",
    category: "Lifestyle",
    price: 25,
    affirmation: "Connected hearts heal together",
    image: lifestyle10,
    description: "Stackable bracelets with Thrive charms and healing stones.",
    colors: ["Gold", "Silver", "Mixed"],
  },
  {
    id: 56,
    name: "Mindfulness Yoga Mat",
    category: "Lifestyle",
    price: 48,
    affirmation: "My practice is my sanctuary",
    image: lifestyle11,
    description: "Premium eco-friendly mat with alignment guides and Thrive artwork.",
    colors: ["Sage", "Lavender", "Ocean"],
  },
  {
    id: 57,
    name: "Gratitude Planner",
    category: "Lifestyle",
    price: 24,
    affirmation: "Gratitude transforms my world",
    image: lifestyle12,
    description: "12-month planner with weekly gratitude prompts and gold details.",
    colors: ["Blush", "Navy", "Cream"],
  },
  {
    id: 58,
    name: "Serenity Essential Oil Set",
    category: "Lifestyle",
    price: 35,
    affirmation: "I breathe in serenity",
    image: lifestyle13,
    description: "Trio of calming essential oils: Lavender, Eucalyptus, Chamomile.",
    colors: ["Natural Wood Box"],
  },
  {
    id: 59,
    name: "Thrive Weekender Bag",
    category: "Lifestyle",
    price: 65,
    affirmation: "Adventure awaits me",
    image: lifestyle14,
    description: "Vegan leather weekender with gold hardware and embossed logo.",
    colors: ["Cognac", "Black", "Cream"],
  },
  {
    id: 60,
    name: "Heart Signet Ring",
    category: "Lifestyle",
    price: 42,
    affirmation: "Love is my compass",
    image: lifestyle15,
    description: "Gold-plated signet ring with engraved Thrive heart emblem.",
    colors: ["Gold", "Silver", "Rose Gold"],
  },

  // ============== KIDS (15 items) ==============
  {
    id: 61,
    name: "Little Dreamer Tee",
    category: "Kids",
    price: 22,
    affirmation: "I am brave!",
    image: kids1,
    description: "Soft cotton tee with playful cloud and rainbow design.",
    colors: ["Sky Blue", "Pink", "Yellow"],
  },
  {
    id: 62,
    name: "Super Heart Hoodie",
    category: "Kids",
    price: 38,
    affirmation: "Kindness is my superpower!",
    image: kids2,
    description: "Cozy hoodie with superhero heart cape design.",
    colors: ["Red", "Purple", "Blue"],
  },
  {
    id: 63,
    name: "Sunshine Kid Tee",
    category: "Kids",
    price: 20,
    affirmation: "I bring sunshine everywhere!",
    image: kids3,
    description: "Bright yellow tee with smiling sun and Thrive logo.",
    colors: ["Sunny Yellow", "Orange", "Pink"],
  },
  {
    id: 64,
    name: "Adventure Awaits Backpack",
    category: "Kids",
    price: 32,
    affirmation: "Every day is an adventure!",
    image: kids4,
    description: "Durable kids backpack with fun explorer patches.",
    colors: ["Navy", "Pink", "Green"],
  },
  {
    id: 65,
    name: "Cosmic Explorer Tee",
    category: "Kids",
    price: 22,
    affirmation: "I am out of this world!",
    image: kids5,
    description: "Space-themed tee with rockets and stars artwork.",
    colors: ["Galaxy Purple", "Midnight Blue", "Black"],
  },
  {
    id: 66,
    name: "Rainbow Heart Hoodie",
    category: "Kids",
    price: 40,
    affirmation: "I spread love like rainbows!",
    image: kids6,
    description: "Pastel rainbow hoodie with heart pattern and soft fleece.",
    colors: ["Rainbow", "Pastel Mix", "White"],
  },
  {
    id: 67,
    name: "Brave Lion Tee",
    category: "Kids",
    price: 21,
    affirmation: "I am courageous!",
    image: kids7,
    description: "Cool lion graphic tee inspiring courage and strength.",
    colors: ["Orange", "Gold", "Brown"],
  },
  {
    id: 68,
    name: "Thrive Kids Water Bottle",
    category: "Kids",
    price: 18,
    affirmation: "I grow stronger every day!",
    image: kids8,
    description: "BPA-free bottle with fun Thrive characters and measurements.",
    colors: ["Teal", "Pink", "Purple"],
  },
  {
    id: 69,
    name: "Mini Me Matching Set",
    category: "Kids",
    price: 35,
    affirmation: "Family is my happy place!",
    image: kids9,
    description: "Kids version of adult bestseller for family matching moments.",
    colors: ["Cream", "Charcoal", "Sage"],
  },
  {
    id: 70,
    name: "Ocean Friend Tee",
    category: "Kids",
    price: 21,
    affirmation: "I make a splash!",
    image: kids10,
    description: "Playful ocean creatures design with waves and Thrive logo.",
    colors: ["Ocean Blue", "Aqua", "Teal"],
  },
  {
    id: 71,
    name: "Butterfly Dreams Dress",
    category: "Kids",
    price: 28,
    affirmation: "I am beautiful inside and out!",
    image: kids11,
    description: "Flowy dress with butterfly print and hidden Thrive hearts.",
    colors: ["Lavender", "Pink", "Mint"],
  },
  {
    id: 72,
    name: "Champion Joggers",
    category: "Kids",
    price: 26,
    affirmation: "I am a winner!",
    image: kids12,
    description: "Comfortable joggers with sporty Thrive champion stripes.",
    colors: ["Grey", "Navy", "Black"],
  },
  {
    id: 73,
    name: "Dinosaur Power Tee",
    category: "Kids",
    price: 22,
    affirmation: "I am strong like a dinosaur!",
    image: kids13,
    description: "Fun dinosaur design with empowering message.",
    colors: ["Green", "Blue", "Orange"],
  },
  {
    id: 74,
    name: "Sticker Activity Pack",
    category: "Kids",
    price: 12,
    affirmation: "Creativity is my gift!",
    image: kids14,
    description: "100+ affirmation stickers with Thrive characters and designs.",
    colors: ["Multi-Color Pack"],
  },
  {
    id: 75,
    name: "Bedtime Story Pajamas",
    category: "Kids",
    price: 30,
    affirmation: "Sweet dreams await me!",
    image: kids15,
    description: "Super soft pajama set with moon, stars, and bedtime affirmations.",
    colors: ["Starry Night", "Cloud White", "Dreamy Blue"],
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Athleisure", "Lifestyle", "Kids"] as const;

export const featuredProducts = products.filter(p => [1, 16, 31, 46, 61].includes(p.id));
