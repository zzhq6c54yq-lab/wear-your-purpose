export const dailyAffirmations = [
  "I am worthy of love and healing",
  "My story is my strength",
  "Together we rise",
  "Peace begins within me",
  "I break cycles, not hearts",
  "Love always wins",
  "I am enough as I am",
  "Healing is not linear",
  "I am rooted in love",
  "My potential is limitless",
  "Today I choose to thrive",
  "I embrace my journey",
  "Self love is my priority",
  "Every step is progress",
  "United we thrive",
  "My strength comes from within",
  "I find balance in all things",
  "I rise with purpose",
  "I am grounded and present",
  "I breathe in peace, exhale worry",
  "My thoughts create my reality",
  "Today is a gift",
  "I radiate warmth and light",
  "I nourish my body and soul",
  "Every moment is a new beginning",
  "I am open to healing energy",
  "I wrap myself in comfort and peace",
  "Connected hearts heal together",
  "I trust the journey",
  "I am becoming who I'm meant to be",
  "Grace flows through me",
];

export const getDailyAffirmation = (): string => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  return dailyAffirmations[dayOfYear % dailyAffirmations.length];
};
