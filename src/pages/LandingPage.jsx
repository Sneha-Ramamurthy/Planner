import HeroSection from '../components/HeroSection'
import WeddingStoryCarousel from '../components/WeddingStoryCarousel'
import TrustSection from '../components/TrustSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import VideoStories from '../components/VideoStories'
import HowItWorks from '../components/HowItWorks'
import ServicesGrid from '../components/ServicesGrid'
import PlanningTeaser from '../components/PlanningTeaser'
import RealWeddingsGallery from '../components/RealWeddingsGallery'
import FinalCTA from '../components/FinalCTA'

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <WeddingStoryCarousel />
      <TrustSection />
      <VideoStories />
      <HowItWorks />
      <ServicesGrid />
      <PlanningTeaser />
      <RealWeddingsGallery limit={3} />
      <TestimonialCarousel />
      <FinalCTA />
    </>
  )
}
