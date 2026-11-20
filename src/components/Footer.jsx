import { Link } from 'react-router-dom'
import { FiBookOpen } from 'react-icons/fi'

export default function Footer() {
  return <footer className="footer"><div className="footer-main"><Link to="/" className="brand"><span className="brand-mark"><FiBookOpen /></span><span className="brand-name">Varsity<span>X</span><small>BD University Admission Preparation</small></span></Link><p>স্বপ্নের বিশ্ববিদ্যালয়ে ভর্তির প্রস্তুতি হোক আরও সহজ, গোছানো ও আত্মবিশ্বাসী।</p><div className="footer-links"><Link to="/universities">বিশ্ববিদ্যালয়</Link><Link to="/tests">মক টেস্ট</Link><Link to="/previous-year">পূর্ববর্তী প্রশ্ন</Link><Link to="/blog">ব্লগ</Link><Link to="/admin">Admin</Link></div></div><div className="footer-bottom"><span>© ২০২৬ VarsityX BD. সর্বস্বত্ব সংরক্ষিত।</span><span>শেখো মন দিয়ে, এগিয়ে যাও নিজের মতো।</span></div></footer>
}
