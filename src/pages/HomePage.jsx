import { FiArrowRight, FiBarChart2, FiCheckCircle, FiLayers, FiPlay, FiTarget, FiTrendingUp, FiUsers } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import ExamCard from '../components/ExamCard.jsx'
import UniversityCard from '../components/UniversityCard.jsx'
import { exams, universities } from '../data/admissions.js'
import campusStudents from '../assets/campus-students.png'

function CampusIllustration() {
  return <div className="campus-art"><img className="campus-photo" src={campusStudents} alt="Students at a university campus" /></div>
}

export default function HomePage() {
  return <main>
    <section className="hero"><div className="hero-content"><div className="hero-copy"><span className="hero-kicker"><i /> বাংলাদেশ পাবলিক বিশ্ববিদ্যালয়</span><h1>Bangladesh Public University<br /><em>Admission Mock Test</em></h1><p>Practice like the real exam, track your performance,<br className="desktop-break" /> and get ready for your dream university.</p><div className="hero-benefits"><span><FiTarget /><b>University-wise<br />Mock Test</b></span><span><FiBarChart2 /><b>Instant<br />Result & Analysis</b></span><span><FiLayers /><b>Topic-wise<br />Practice</b></span></div><div className="hero-ctas"><Link to="/tests" className="btn-primary"><FiPlay /> Start Mock Test</Link><Link to="/universities" className="btn-hero-outline">Explore Universities</Link></div><div className="hero-footnote"><span className="hero-dots"><i/><i/><i/></span> তোমার লক্ষ্য, তোমার প্রস্তুতি</div></div><CampusIllustration /></div></section>
    <section className="university-section"><div className="section-heading"><span/><div><h2>Choose a University for Mock Test</h2><p>Practice with university-specific question sets and exam patterns.</p></div><span/></div><div className="university-grid home-university-grid">{universities.map(u => <UniversityCard university={u} key={u.id} />)}</div></section>
    <section className="how-section"><div className="section-heading"><span/><div><h2>কিভাবে কাজ করে?</h2></div><span/></div><div className="steps-row"><div className="step"><span className="step-icon step-purple"><FiTarget /></span><div><b>বিশ্ববিদ্যালয় নির্বাচন</b><p>যে বিশ্ববিদ্যালয়ের জন্য প্রস্তুতি নিচ্ছো, সেটি বেছে নাও।</p></div><FiArrowRight className="step-arrow" /></div><div className="step"><span className="step-icon step-blue"><FiLayers /></span><div><b>মক টেস্ট দাও</b><p>বাস্তব পরীক্ষার মতো MCQ পরীক্ষা দাও।</p></div><FiArrowRight className="step-arrow" /></div><div className="step"><span className="step-icon step-green"><FiBarChart2 /></span><div><b>ফলাফল দেখো</b><p>তাৎক্ষণিক নম্বর, সঠিক-ভুল উত্তর জানো।</p></div><FiArrowRight className="step-arrow" /></div><div className="step"><span className="step-icon step-orange"><FiTrendingUp /></span><div><b>দুর্বলতা বিশ্লেষণ করো</b><p>বিষয়ভিত্তিক পারফরম্যান্স দেখে নিজেকে তৈরি করো।</p></div></div></div></section>
    <section className="stats-band"><div><FiUsers /><b>৫০+</b><span>পাবলিক বিশ্ববিদ্যালয়</span></div><div><FiLayers /><b>৬০০০+</b><span>মক টেস্ট প্রশ্ন</span></div><div><FiUsers /><b>৫০,০০০+</b><span>শিক্ষার্থী যুক্ত</span></div><div><FiCheckCircle /><b>৯৫%</b><span>শিক্ষার্থী সন্তুষ্টি</span></div></section>
    <section className="home-exams"><div className="section-heading"><span/><div><h2>আজই একটি মক টেস্ট দাও</h2><p>বাস্তব পরীক্ষার আগে নিজের প্রস্তুতি যাচাই করে নাও।</p></div><span/></div><div className="exam-grid home-exam-grid">{exams.slice(0, 2).map(exam => <ExamCard exam={exam} key={exam.id} />)}</div><Link to="/tests" className="browse-more">সব মক টেস্ট দেখো <FiArrowRight /></Link></section>
  </main>
}
