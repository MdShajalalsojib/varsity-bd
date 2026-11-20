import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer.jsx'
import Header from '../components/Header.jsx'

export default function SiteLayout() {
  return <div className="app-shell"><Header /><Outlet /><Footer /></div>
}
