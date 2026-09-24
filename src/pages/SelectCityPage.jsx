import { useNavigate } from 'react-router-dom'
import CitySelectionModal from '../components/CitySelectionModal'

export default function SelectCityPage({ onCitySelected }) {
  const navigate = useNavigate()

  const handleSelect = (city) => {
    onCitySelected?.(city)
    navigate('/home')
  }

  return (
    <div className="min-h-screen bg-charcoal/95">
      <CitySelectionModal open onSelect={handleSelect} />
    </div>
  )
}
