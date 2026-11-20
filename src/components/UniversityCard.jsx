import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const universityLogos = import.meta.glob('../assets/universities/*.png', { eager: true, import: 'default' })

export function UniversityLogo({ university }) {
  const fileName = university.id === 'gst' ? 'other' : university.id
  const logo = universityLogos[`../assets/universities/${fileName}.png`]
  return <span className={`uni-emblem emblem-${university.color}`}><img src={logo} alt={`${university.name} logo`} /></span>
}

export default function UniversityCard({ university }) {
  const { id, short, name, color } = university
  return <Link to={`/universities/${id}`} className={`university-tile emblem-${color}`}><UniversityLogo university={university}/><strong>{name}</strong><small>({short})</small><FiArrowRight className="uni-card-arrow" /></Link>
}
