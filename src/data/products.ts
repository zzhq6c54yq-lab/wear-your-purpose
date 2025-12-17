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

export interface Product {
  id: number;
  name: string;
  category: "T-Shirts" | "Hoodies" | "Athleisure" | "Lifestyle";
  price: number;
  affirmation: string;
  image: string;
  description: string;
  colors: string[];
}

export const products: Product[] = [
  // T-SHIRTS (10 items) - 35% off
  {
    id: 1,
    name: "Golden Heart Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am worthy of love and healing",
    image: tshirt1,
    description: "Premium black cotton with gold foil heart emblem",
    colors: ["Black", "Charcoal", "Navy"],
  },
  {
    id: 2,
    name: "Brushstroke Essential",
    category: "T-Shirts",
    price: 29,
    affirmation: "My story is my strength",
    image: tshirt2,
    description: "Oversized cream tee with bronze abstract art",
    colors: ["Cream", "White", "Sand"],
  },
  {
    id: 3,
    name: "Celestial Balance Tee",
    category: "T-Shirts",
    price: 31,
    affirmation: "I break cycles, not hearts",
    image: tshirt3,
    description: "Sage green with gold sun and moon embroidery",
    colors: ["Sage", "Forest", "Olive"],
  },
  {
    id: 4,
    name: "Sacred Geometry Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "Peace begins within me",
    image: tshirt4,
    description: "Charcoal premium cotton with gold geometric pattern",
    colors: ["Charcoal", "Black", "Grey"],
  },
  {
    id: 5,
    name: "Blush Essential Tee",
    category: "T-Shirts",
    price: 27,
    affirmation: "Love always wins",
    image: tshirt5,
    description: "Soft dusty rose with minimal design",
    colors: ["Rose", "Blush", "Mauve"],
  },
  {
    id: 6,
    name: "Midnight Luxe Tee",
    category: "T-Shirts",
    price: 30,
    affirmation: "Together we rise",
    image: tshirt6,
    description: "Navy premium cotton with gold label detail",
    colors: ["Navy", "Midnight", "Indigo"],
  },
  {
    id: 7,
    name: "Abstract Expression Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am enough as I am",
    image: tshirt7,
    description: "Oatmeal oversized with bronze splash art",
    colors: ["Oatmeal", "Cream", "Sand"],
  },
  {
    id: 8,
    name: "Phoenix Rising Tee",
    category: "T-Shirts",
    price: 31,
    affirmation: "Healing is not linear",
    image: tshirt8,
    description: "Washed black with gold phoenix back print",
    colors: ["Washed Black", "Charcoal", "Vintage Grey"],
  },
  {
    id: 9,
    name: "Lotus Emblem Tee",
    category: "T-Shirts",
    price: 29,
    affirmation: "I am rooted in love",
    image: tshirt9,
    description: "Terracotta with gold lotus embroidery",
    colors: ["Terracotta", "Rust", "Burnt Orange"],
  },
  {
    id: 10,
    name: "Minimalist Luxe Tee",
    category: "T-Shirts",
    price: 30,
    affirmation: "My potential is limitless",
    image: tshirt10,
    description: "Pure white premium essential",
    colors: ["White", "Cream", "Pearl"],
  },

  // HOODIES (10 items) - 35% off
  {
    id: 11,
    name: "Golden Heart Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "Together we rise",
    image: hoodie1,
    description: "Cream heavyweight with gold heart emblem",
    colors: ["Cream", "Ivory", "Oatmeal"],
  },
  {
    id: 12,
    name: "Abstract Art Hoodie",
    category: "Hoodies",
    price: 58,
    affirmation: "Healing is not linear",
    image: hoodie2,
    description: "Charcoal oversized with bronze back print",
    colors: ["Charcoal", "Black", "Slate"],
  },
  {
    id: 13,
    name: "Mindful Face Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "Peace begins within me",
    image: hoodie3,
    description: "Sage green with gold line art embroidery",
    colors: ["Sage", "Olive", "Forest"],
  },
  {
    id: 14,
    name: "Chain Breaker Hoodie",
    category: "Hoodies",
    price: 60,
    affirmation: "I break cycles, not hearts",
    image: hoodie4,
    description: "Black premium with gold chain-link design",
    colors: ["Black", "Onyx", "Charcoal"],
  },
  {
    id: 15,
    name: "Blush Cropped Hoodie",
    category: "Hoodies",
    price: 56,
    affirmation: "I am worthy of love",
    image: hoodie5,
    description: "Cropped dusty pink with gold heart",
    colors: ["Blush", "Pink", "Rose"],
  },
  {
    id: 16,
    name: "Unity Emblem Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "United we thrive",
    image: hoodie6,
    description: "Navy pullover with bronze emblem",
    colors: ["Navy", "Indigo", "Midnight"],
  },
  {
    id: 17,
    name: "Geometric Flow Hoodie",
    category: "Hoodies",
    price: 59,
    affirmation: "Every step is progress",
    image: hoodie7,
    description: "Stone grey with subtle geometric pattern",
    colors: ["Stone", "Grey", "Silver"],
  },
  {
    id: 18,
    name: "Lilac Dreams Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "Self love is my priority",
    image: hoodie8,
    description: "Cropped lavender with gold script",
    colors: ["Lilac", "Lavender", "Violet"],
  },
  {
    id: 19,
    name: "Explorer Compass Hoodie",
    category: "Hoodies",
    price: 57,
    affirmation: "I embrace my journey",
    image: hoodie9,
    description: "Vintage washed blue with compass graphic",
    colors: ["Washed Blue", "Denim", "Slate"],
  },
  {
    id: 20,
    name: "Essential Noir Hoodie",
    category: "Hoodies",
    price: 55,
    affirmation: "Today I choose to thrive",
    image: hoodie10,
    description: "Classic black with minimal gold logo",
    colors: ["Black", "Charcoal", "Onyx"],
  },

  // ATHLEISURE (10 items) - 35% off
  {
    id: 21,
    name: "Serenity Joggers",
    category: "Athleisure",
    price: 44,
    affirmation: "Peace begins within me",
    image: athleisure1,
    description: "Relaxed fit joggers with gold side stripe",
    colors: ["Sage", "Oatmeal", "Charcoal"],
  },
  {
    id: 22,
    name: "Unity Sports Bra",
    category: "Athleisure",
    price: 36,
    affirmation: "United we thrive",
    image: athleisure2,
    description: "Medium support with bronze detail",
    colors: ["Blush", "Black", "Sage"],
  },
  {
    id: 23,
    name: "Mindful Leggings",
    category: "Athleisure",
    price: 47,
    affirmation: "Every step is progress",
    image: athleisure3,
    description: "High-waisted with hidden pocket",
    colors: ["Black", "Dusty Rose", "Navy"],
  },
  {
    id: 24,
    name: "Thrive Tank",
    category: "Athleisure",
    price: 25,
    affirmation: "Today I choose to thrive",
    image: athleisure4,
    description: "Lightweight training tank",
    colors: ["White", "Coral", "Sage"],
  },
  {
    id: 25,
    name: "Flow Shorts",
    category: "Athleisure",
    price: 31,
    affirmation: "Healing is not linear",
    image: athleisure5,
    description: "Breathable running shorts",
    colors: ["Black", "Sand", "Terracotta"],
  },
  {
    id: 26,
    name: "Strength Windbreaker",
    category: "Athleisure",
    price: 62,
    affirmation: "My strength comes from within",
    image: athleisure6,
    description: "Lightweight with gold reflective details",
    colors: ["Sage", "Black", "Cream"],
  },
  {
    id: 27,
    name: "Balance Yoga Pants",
    category: "Athleisure",
    price: 51,
    affirmation: "I find balance in all things",
    image: athleisure7,
    description: "Buttery soft with wide waistband",
    colors: ["Midnight", "Sage", "Mocha"],
  },
  {
    id: 28,
    name: "Rise Crop Top",
    category: "Athleisure",
    price: 27,
    affirmation: "I rise with purpose",
    image: athleisure8,
    description: "Cropped workout top",
    colors: ["Blush", "White", "Lavender"],
  },
  {
    id: 29,
    name: "Grounded Track Pants",
    category: "Athleisure",
    price: 49,
    affirmation: "I am grounded and present",
    image: athleisure9,
    description: "Classic track pants with modern fit",
    colors: ["Forest", "Cream", "Navy"],
  },
  {
    id: 30,
    name: "Breathe Performance Hoodie",
    category: "Athleisure",
    price: 53,
    affirmation: "I breathe in peace, exhale worry",
    image: athleisure10,
    description: "Moisture-wicking performance fabric",
    colors: ["Oatmeal", "Slate", "Dusty Blue"],
  },

  // LIFESTYLE (10 items) - 35% off
  {
    id: 31,
    name: "Luxe Canvas Tote",
    category: "Lifestyle",
    price: 29,
    affirmation: "Love always wins",
    image: lifestyle1,
    description: "Premium canvas with leather handles",
    colors: ["Natural", "Black", "Sage"],
  },
  {
    id: 32,
    name: "Affirmation Journal",
    category: "Lifestyle",
    price: 18,
    affirmation: "My thoughts create my reality",
    image: lifestyle2,
    description: "Gold foil guided journal",
    colors: ["Cream", "Blush", "Sage"],
  },
  {
    id: 33,
    name: "Mindful Ceramic Mug",
    category: "Lifestyle",
    price: 14,
    affirmation: "Today is a gift",
    image: lifestyle3,
    description: "Premium ceramic with gold rim",
    colors: ["Cream", "Terracotta", "Sage"],
  },
  {
    id: 34,
    name: "Healing Candle Set",
    category: "Lifestyle",
    price: 31,
    affirmation: "I radiate warmth and light",
    image: lifestyle4,
    description: "Soy candle trio with calming scents",
    colors: ["Natural", "Blush", "Amber"],
  },
  {
    id: 35,
    name: "Thrive Water Bottle",
    category: "Lifestyle",
    price: 23,
    affirmation: "I nourish my body and soul",
    image: lifestyle5,
    description: "Insulated steel with gold detail",
    colors: ["Rose Gold", "Matte Black", "Sand"],
  },
  {
    id: 36,
    name: "Peace Pendant Necklace",
    category: "Lifestyle",
    price: 36,
    affirmation: "Peace begins within me",
    image: lifestyle6,
    description: "Delicate gold-plated pendant",
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: 37,
    name: "Affirmation Card Deck",
    category: "Lifestyle",
    price: 21,
    affirmation: "Every card is a new beginning",
    image: lifestyle7,
    description: "52 illustrated affirmation cards",
    colors: ["Gold Edge", "Rose Edge"],
  },
  {
    id: 38,
    name: "Healing Crystals Set",
    category: "Lifestyle",
    price: 27,
    affirmation: "I am open to healing energy",
    image: lifestyle8,
    description: "Curated crystal collection",
    colors: ["Mixed"],
  },
  {
    id: 39,
    name: "Luxury Throw Blanket",
    category: "Lifestyle",
    price: 51,
    affirmation: "I wrap myself in comfort and peace",
    image: lifestyle9,
    description: "Ultra-soft with embroidered message",
    colors: ["Cream", "Sage", "Dusty Rose"],
  },
  {
    id: 40,
    name: "Unity Bracelet Set",
    category: "Lifestyle",
    price: 25,
    affirmation: "Connected hearts heal together",
    image: lifestyle10,
    description: "Stackable bracelets with charms",
    colors: ["Gold", "Silver", "Mixed"],
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Athleisure", "Lifestyle"] as const;

export const featuredProducts = products.filter(p => [1, 11, 21, 31].includes(p.id));
