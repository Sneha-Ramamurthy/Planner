# WedPlan — Public Landing Page

An original, premium Indian wedding-planning landing experience, built with React, Vite,
Tailwind CSS, Framer Motion, React Router and lucide-react. Inspired only by the *quality bar*
of thewedcompany.com — no copied text, images, layout or brand elements.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## What's included

- **Public landing page** (`/`) — hero, wedding stories, trust stats, video story tiles,
  interactive "How It Works" timeline, services grid, personalized planning teaser, a real
  weddings preview, testimonials, and a final CTA.
- **Supporting flow routes**, stubbed so the whole journey is clickable end to end:
  `/login`, `/start-planning`, `/select-city`, `/home`, `/real-weddings`,
  `/real-weddings/:id`, `/vendors`, `/packages`.
- **Mock data layer** in `src/data/` (`weddings.js`, `testimonials.js`, `services.js`,
  `cities.js`, `planningOptions.js`) — swap these for real API calls once the Express/MongoDB
  backend exists. Comments in the trust-stats and testimonial components flag exactly where
  that wiring will go.
- Respects `prefers-reduced-motion`, keyboard focus states, and is responsive down to mobile
  (hamburger menu, stacked sections, touch-swipeable testimonial carousel).

## Notes and scope

- **Images** are placeholder photography from Unsplash, referenced by URL — swap in licensed
  or original photography before launch. The hero is structured to take a real
  `/public/videos/hero.mp4` the moment you have footage; it currently falls back to a poster
  image.
- **Vendors** and **Packages** pages are intentionally thin placeholders — the brief asked for
  the public landing page first, not the vendor marketplace or booking dashboard.
- **Auth and city selection are mocked in frontend state only** (no persistence). `/select-city`
  saves the chosen city to React state in `App.jsx` and hands it to `/home`, which stands in for
  the future logged-in application.
- This environment has no network access, so `npm install` has not been run here — install
  locally to develop and build.

## Project structure

```
src/
  components/   Navbar, HeroSection, WeddingStoryCarousel, TrustSection, TestimonialCarousel,
                VideoStories, HowItWorks, ServicesGrid, PlanningTeaser, RealWeddingsGallery,
                FinalCTA, Footer, CitySelectionModal
  pages/        LandingPage, LoginPage, StartPlanningPage, SelectCityPage, HomePage,
                RealWeddingsPage, RealWeddingDetailPage, VendorsPage, PackagesPage
  data/         weddings.js, testimonials.js, services.js, cities.js, planningOptions.js
  App.jsx       Routes + layout (Navbar/Footer wrap every page)
  main.jsx      React Router + app entry
  index.css     Tailwind directives + base styles
```
