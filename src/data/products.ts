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
  // T-SHIRTS (10 items)
  {
    id: 1,
    name: "I Am Worthy Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "I am worthy of love and healing",
    image: tshirt1,
    description: "Premium cotton tee with embroidered affirmation",
    colors: ["Cream", "Sage", "Rose"],
  },
  {
    id: 2,
    name: "My Story Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "My story is my strength",
    image: tshirt2,
    description: "Soft organic cotton with screen-printed message",
    colors: ["Charcoal", "Cream", "Copper"],
  },
  {
    id: 3,
    name: "Break the Cycle Tee",
    category: "T-Shirts",
    price: 48,
    affirmation: "I break cycles, not hearts",
    image: tshirt3,
    description: "Relaxed fit with bold statement print",
    colors: ["Black", "Ivory", "Terracotta"],
  },
  {
    id: 4,
    name: "Peace Within Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "Peace begins within me",
    image: tshirt4,
    description: "Breathable bamboo blend with minimal design",
    colors: ["Sand", "Olive", "Blush"],
  },
  {
    id: 5,
    name: "Love Always Tee",
    category: "T-Shirts",
    price: 42,
    affirmation: "Love always wins",
    image: tshirt5,
    description: "Classic crew neck with heart embroidery",
    colors: ["White", "Rose", "Navy"],
  },
  {
    id: 6,
    name: "Together We Rise Tee",
    category: "T-Shirts",
    price: 46,
    affirmation: "Together we rise",
    image: tshirt6,
    description: "Unisex fit celebrating community",
    colors: ["Oatmeal", "Sage", "Dusty Rose"],
  },
  {
    id: 7,
    name: "Enough As I Am Tee",
    category: "T-Shirts",
    price: 45,
    affirmation: "I am enough as I am",
    image: tshirt7,
    description: "Oversized fit with subtle tonal print",
    colors: ["Cream", "Mocha", "Sage"],
  },
  {
    id: 8,
    name: "Healing Journey Tee",
    category: "T-Shirts",
    price: 48,
    affirmation: "Healing is not linear",
    image: tshirt8,
    description: "Premium weight cotton with artistic design",
    colors: ["Vintage White", "Faded Black", "Dusty Blue"],
  },
  {
    id: 9,
    name: "Rooted in Love Tee",
    category: "T-Shirts",
    price: 44,
    affirmation: "I am rooted in love",
    image: tshirt9,
    description: "Earth-toned design with tree motif",
    colors: ["Forest", "Sand", "Terracotta"],
  },
  {
    id: 10,
    name: "Limitless Tee",
    category: "T-Shirts",
    price: 46,
    affirmation: "My potential is limitless",
    image: tshirt10,
    description: "Modern cut with inspiring message",
    colors: ["Midnight", "Cream", "Copper"],
  },

  // HOODIES (10 items)
  {
    id: 11,
    name: "Rise Together Hoodie",
    category: "Hoodies",
    price: 85,
    affirmation: "Together we rise",
    image: hoodie1,
    description: "Heavyweight fleece with embroidered logo",
    colors: ["Cream", "Charcoal", "Sage"],
  },
  {
    id: 12,
    name: "Healing Journey Hoodie",
    category: "Hoodies",
    price: 89,
    affirmation: "Healing is not linear",
    image: hoodie2,
    description: "Cozy oversized fit with back print",
    colors: ["Oatmeal", "Dusty Rose", "Slate"],
  },
  {
    id: 13,
    name: "Peace Seeker Hoodie",
    category: "Hoodies",
    price: 88,
    affirmation: "Peace begins within me",
    image: hoodie3,
    description: "Relaxed fit with kangaroo pocket",
    colors: ["Sage", "Cream", "Mocha"],
  },
  {
    id: 14,
    name: "Generational Breaker Hoodie",
    category: "Hoodies",
    price: 92,
    affirmation: "I break cycles, not hearts",
    image: hoodie4,
    description: "Premium hoodie with chain-breaking design",
    colors: ["Black", "Sand", "Forest"],
  },
  {
    id: 15,
    name: "Worthy of Love Hoodie",
    category: "Hoodies",
    price: 86,
    affirmation: "I am worthy of love",
    image: hoodie5,
    description: "Soft brushed fleece with heart detail",
    colors: ["Blush", "Cream", "Lavender"],
  },
  {
    id: 16,
    name: "Unity Pullover Hoodie",
    category: "Hoodies",
    price: 84,
    affirmation: "United we thrive",
    image: hoodie6,
    description: "Classic pullover with unity emblem",
    colors: ["Navy", "Oatmeal", "Rust"],
  },
  {
    id: 17,
    name: "Mindful Movement Hoodie",
    category: "Hoodies",
    price: 90,
    affirmation: "Every step is progress",
    image: hoodie7,
    description: "Lightweight performance hoodie",
    colors: ["Stone", "Sage", "Charcoal"],
  },
  {
    id: 18,
    name: "Self Love Club Hoodie",
    category: "Hoodies",
    price: 88,
    affirmation: "Self love is my priority",
    image: hoodie8,
    description: "Cropped fit with club logo",
    colors: ["Dusty Pink", "Cream", "Lilac"],
  },
  {
    id: 19,
    name: "Embrace the Journey Hoodie",
    category: "Hoodies",
    price: 87,
    affirmation: "I embrace my journey",
    image: hoodie9,
    description: "Vintage wash with travel-inspired design",
    colors: ["Faded Blue", "Sand", "Moss"],
  },
  {
    id: 20,
    name: "Thrive Daily Hoodie",
    category: "Hoodies",
    price: 85,
    affirmation: "Today I choose to thrive",
    image: hoodie10,
    description: "Essential everyday hoodie with minimal branding",
    colors: ["Cream", "Black", "Olive"],
  },

  // ATHLEISURE (10 items)
  {
    id: 21,
    name: "Peace Within Joggers",
    category: "Athleisure",
    price: 68,
    affirmation: "Peace begins within me",
    image: athleisure1,
    description: "Relaxed fit joggers with side stripe",
    colors: ["Sage", "Oatmeal", "Charcoal"],
  },
  {
    id: 22,
    name: "Unity Sports Bra",
    category: "Athleisure",
    price: 55,
    affirmation: "United we thrive",
    image: athleisure2,
    description: "Medium support with racerback design",
    colors: ["Blush", "Black", "Sage"],
  },
  {
    id: 23,
    name: "Mindful Movement Leggings",
    category: "Athleisure",
    price: 72,
    affirmation: "Every step is progress",
    image: athleisure3,
    description: "High-waisted with hidden pocket",
    colors: ["Black", "Dusty Rose", "Navy"],
  },
  {
    id: 24,
    name: "Thrive Tank Top",
    category: "Athleisure",
    price: 38,
    affirmation: "Today I choose to thrive",
    image: athleisure4,
    description: "Lightweight training tank",
    colors: ["White", "Coral", "Sage"],
  },
  {
    id: 25,
    name: "Healing Flow Shorts",
    category: "Athleisure",
    price: 48,
    affirmation: "Healing is not linear",
    image: athleisure5,
    description: "Breathable running shorts with liner",
    colors: ["Black", "Sand", "Terracotta"],
  },
  {
    id: 26,
    name: "Strength Within Jacket",
    category: "Athleisure",
    price: 95,
    affirmation: "My strength comes from within",
    image: athleisure6,
    description: "Lightweight windbreaker with reflective details",
    colors: ["Sage", "Black", "Cream"],
  },
  {
    id: 27,
    name: "Balance Yoga Pants",
    category: "Athleisure",
    price: 78,
    affirmation: "I find balance in all things",
    image: athleisure7,
    description: "Buttery soft yoga pants with wide waistband",
    colors: ["Midnight", "Sage", "Mocha"],
  },
  {
    id: 28,
    name: "Rise & Shine Crop Top",
    category: "Athleisure",
    price: 42,
    affirmation: "I rise with purpose",
    image: athleisure8,
    description: "Cropped workout top with mesh panels",
    colors: ["Blush", "White", "Lavender"],
  },
  {
    id: 29,
    name: "Grounded Track Pants",
    category: "Athleisure",
    price: 75,
    affirmation: "I am grounded and present",
    image: athleisure9,
    description: "Classic track pants with modern fit",
    colors: ["Forest", "Cream", "Navy"],
  },
  {
    id: 30,
    name: "Breathe Easy Hoodie",
    category: "Athleisure",
    price: 82,
    affirmation: "I breathe in peace, exhale worry",
    image: athleisure10,
    description: "Performance hoodie with moisture-wicking fabric",
    colors: ["Oatmeal", "Slate", "Dusty Blue"],
  },

  // LIFESTYLE (10 items)
  {
    id: 31,
    name: "Love Tote Bag",
    category: "Lifestyle",
    price: 45,
    affirmation: "Love always wins",
    image: lifestyle1,
    description: "Canvas tote with leather handles",
    colors: ["Natural", "Black", "Sage"],
  },
  {
    id: 32,
    name: "Affirmation Journal",
    category: "Lifestyle",
    price: 28,
    affirmation: "My thoughts create my reality",
    image: lifestyle2,
    description: "Guided journal with daily affirmations",
    colors: ["Cream", "Blush", "Sage"],
  },
  {
    id: 33,
    name: "Mindful Mug",
    category: "Lifestyle",
    price: 22,
    affirmation: "Today is a gift",
    image: lifestyle3,
    description: "Ceramic mug with inspiring message",
    colors: ["Cream", "Terracotta", "Sage"],
  },
  {
    id: 34,
    name: "Healing Candle Set",
    category: "Lifestyle",
    price: 48,
    affirmation: "I radiate warmth and light",
    image: lifestyle4,
    description: "Soy candle trio with calming scents",
    colors: ["Natural", "Blush", "Amber"],
  },
  {
    id: 35,
    name: "Thrive Water Bottle",
    category: "Lifestyle",
    price: 35,
    affirmation: "I nourish my body and soul",
    image: lifestyle5,
    description: "Insulated steel bottle with affirmation",
    colors: ["Rose Gold", "Matte Black", "Sand"],
  },
  {
    id: 36,
    name: "Peace Pendant Necklace",
    category: "Lifestyle",
    price: 55,
    affirmation: "Peace begins within me",
    image: lifestyle6,
    description: "Delicate gold-plated peace symbol",
    colors: ["Gold", "Silver", "Rose Gold"],
  },
  {
    id: 37,
    name: "Affirmation Card Deck",
    category: "Lifestyle",
    price: 32,
    affirmation: "Every card is a new beginning",
    image: lifestyle7,
    description: "52 beautifully illustrated affirmation cards",
    colors: ["Gold Edge", "Rose Edge"],
  },
  {
    id: 38,
    name: "Healing Crystals Set",
    category: "Lifestyle",
    price: 42,
    affirmation: "I am open to healing energy",
    image: lifestyle8,
    description: "Curated crystal collection with meaning guide",
    colors: ["Mixed"],
  },
  {
    id: 39,
    name: "Cozy Blanket",
    category: "Lifestyle",
    price: 78,
    affirmation: "I wrap myself in comfort and peace",
    image: lifestyle9,
    description: "Ultra-soft throw with embroidered message",
    colors: ["Cream", "Sage", "Dusty Rose"],
  },
  {
    id: 40,
    name: "Unity Bracelet Set",
    category: "Lifestyle",
    price: 38,
    affirmation: "Connected hearts heal together",
    image: lifestyle10,
    description: "Stackable bracelets with meaningful charms",
    colors: ["Gold", "Silver", "Mixed"],
  },
];

export const categories = ["All", "T-Shirts", "Hoodies", "Athleisure", "Lifestyle"] as const;

export const featuredProducts = products.filter(p => [1, 11, 21, 31].includes(p.id));
