import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StartPlanningPage from './pages/StartPlanningPage'
import SelectCityPage from './pages/SelectCityPage'
import HomePage from './pages/HomePage'
import RealWeddingsPage from './pages/RealWeddingsPage'
import RealWeddingDetailPage from './pages/RealWeddingDetailPage'
import VendorsPage from './pages/VendorsPage'
import PackagesPage from './pages/PackagesPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  // Frontend-only state for the selected city, set by SelectCityPage and
  // read by HomePage. Replace with real user/session state once the
  // logged-in application and backend exist.
  const [selectedCity, setSelectedCity] = useState(null)

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/start-planning" element={<StartPlanningPage />} />
          <Route
            path="/select-city"
            element={<SelectCityPage onCitySelected={setSelectedCity} />}
          />
          <Route path="/home" element={<HomePage city={selectedCity} />} />
          <Route path="/real-weddings" element={<RealWeddingsPage />} />
          <Route path="/real-weddings/:id" element={<RealWeddingDetailPage />} />
          <Route path="/vendors" element={<VendorsPage />} />
          <Route path="/packages" element={<PackagesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
