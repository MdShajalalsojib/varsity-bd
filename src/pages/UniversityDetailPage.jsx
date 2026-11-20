import { Link, useParams } from 'react-router-dom'
import { FiArrowLeft, FiArrowRight, FiBookOpen } from 'react-icons/fi'
import ExamCard from '../components/ExamCard.jsx'
import { UniversityLogo } from '../components/UniversityCard.jsx'
import { exams, universities } from '../data/admissions.js'

export default function UniversityDetailPage() {
  const { id } = useParams()
  const university = universities.find(u => u.id === id)
  if (!university) return <main className="content-page"><h1>বিশ্ববিদ্যালয় পাওয়া যায়নি</h1><Link to="/universities">ফিরে যাও</Link></main>
  const availableExams = exams.filter(e => e.universityId === id)
  return <main className="content-page"><Link className="back-link" to="/universities"><FiArrowLeft/> সব বিশ্ববিদ্যালয়</Link><div className="university-detail-head"><UniversityLogo university={university}/><div><span className="page-eyebrow">{university.short} · ADMISSION PREPARATION</span><h1>{university.name}</h1><p>{university.english}</p></div></div><section className="detail-section"><h2>ভর্তি ইউনিট</h2><p>তোমার পছন্দের ইউনিট বেছে নিয়ে প্রস্তুতি শুরু করো।</p><div className="unit-pills">{university.units.map(unit => <span key={unit}>{unit} ইউনিট</span>)}</div></section><section className="detail-section"><h2>মডেল টেস্ট</h2><p>ভর্তি পরীক্ষার ধরন অনুযায়ী সাজানো অনুশীলন।</p>{availableExams.length ? <div className="exam-grid">{availableExams.map(exam => <ExamCard key={exam.id} exam={exam}/>)}</div> : <div className="empty-panel"><FiBookOpen/><b>এই বিশ্ববিদ্যালয়ের মডেল টেস্ট শিগগিরই যোগ করা হবে।</b><Link to="/tests">সব মডেল টেস্ট দেখো <FiArrowRight/></Link></div>}</section></main>
}
