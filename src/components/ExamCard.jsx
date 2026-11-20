import { FiArrowRight, FiClock, FiFileText } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function ExamCard({ exam }) {
  return <article className="exam-card"><span className="exam-label">{exam.tag}</span><h3>{exam.title}</h3><p>{exam.university} · {exam.unit}</p><div className="exam-meta"><span><FiFileText /> {exam.questions} প্রশ্ন</span><span><FiClock /> {exam.minutes} মিনিট</span></div><Link to={`/exam/${exam.id}`} className="exam-link">পরীক্ষা শুরু <FiArrowRight /></Link></article>
}
