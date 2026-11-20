import { useState } from 'react'
import { FiBookOpen, FiMenu, FiX } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'

const links = [
  ['/', 'হোম'],
  ['/universities', 'বিশ্ববিদ্যালয়'],
  ['/tests', 'মক টেস্ট'],
  ['/previous-year', 'Previous Year'],
  ['/blog', 'Blog'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="header"><div className="header-inner">
    <Link to="/" className="brand"><span className="brand-mark"><FiBookOpen /></span><span className="brand-name">Varsity<span>X</span><small>BD University Admission Preparation</small></span></Link>
    <button className="menu-toggle" aria-label="মেনু" onClick={() => setOpen(!open)}>{open ? <FiX /> : <FiMenu />}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{links.map(([to, label]) => <NavLink end={to === '/'} key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}</nav>
    <div className="header-actions"><Link className="btn-login" to="/login">Login</Link><Link className="btn-signup" to="/register">Sign Up</Link></div>
  </div></header>
}
