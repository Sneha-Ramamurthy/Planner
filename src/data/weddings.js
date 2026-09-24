// Mock wedding story + real-wedding gallery data.
// Shape mirrors the future MongoDB "weddings" collection so this file can be
// replaced by an API call (e.g. GET /api/weddings) without touching the UI.

export const weddings = [
  {
    id: 'aarav-riya-mumbai',
    coupleNames: 'Aarav & Riya',
    city: 'Mumbai',
    culture: 'Marathi',
    theme: 'Modern',
    month: 'November',
    year: 2025,
    style: 'Modern Celebration',
    heroImage:
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'A skyline reception blending contemporary decor with Marathi rituals, built around a soft champagne and gold palette.',
  },
  {
    id: 'vihaan-meera-jaipur',
    coupleNames: 'Vihaan & Meera',
    city: 'Jaipur',
    culture: 'Rajasthani',
    theme: 'Royal',
    month: 'February',
    year: 2026,
    style: 'Royal Wedding',
    heroImage:
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1622037022824-0c71d511ad76?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'A fort courtyard wedding in deep burgundy and gold, with a traditional baraat and a candlelit royal reception.',
  },
  {
    id: 'arjun-kavya-goa',
    coupleNames: 'Arjun & Kavya',
    city: 'Goa',
    culture: 'South Indian',
    theme: 'Destination',
    month: 'January',
    year: 2026,
    style: 'Intimate Beach Wedding',
    heroImage:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'Forty guests, a sunset mandap on the sand, and a soft blush-and-ivory palette carried through every detail.',
  },
  {
    id: 'dev-anaya-udaipur',
    coupleNames: 'Dev & Anaya',
    city: 'Udaipur',
    culture: 'Rajasthani',
    theme: 'Traditional',
    month: 'December',
    year: 2025,
    style: 'Heritage Celebration',
    heroImage:
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'A lakeside haveli wedding honouring family tradition, from the haldi ceremony through to a torch-lit reception.',
  },
  {
    id: 'kabir-ishita-delhi',
    coupleNames: 'Kabir & Ishita',
    city: 'Delhi',
    culture: 'Punjabi',
    theme: 'Traditional',
    month: 'October',
    year: 2025,
    style: 'Classic Punjabi Wedding',
    heroImage:
      'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1543269664-56d93c1b41a6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1610591814254-0e08d7434d99?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594736797933-d0d62c8b0b7f?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'A high-energy sangeet and a marigold-draped mandap, planned around three generations of family traditions.',
  },
  {
    id: 'rohan-sneha-bengaluru',
    coupleNames: 'Rohan & Sneha',
    city: 'Bengaluru',
    culture: 'South Indian',
    theme: 'Minimal',
    month: 'March',
    year: 2026,
    style: 'Garden Celebration',
    heroImage:
      'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=1600&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop',
    ],
    summary:
      'A quiet, plant-filled garden ceremony with pared-back decor and a focus on Kannadiga family rituals.',
  },
]

export const cities = [...new Set(weddings.map((w) => w.city))]
export const cultures = [...new Set(weddings.map((w) => w.culture))]
export const themes = [...new Set(weddings.map((w) => w.theme))]
