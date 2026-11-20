import { FiArrowRight, FiCheck, FiTarget, FiX } from 'react-icons/fi'
import { Link, useParams } from 'react-router-dom'
import { getAttempts } from '../data/admissions.js'

export default function ResultPage() {
  const { attemptId } = useParams()
  const attempt = getAttempts().find(a=>a.id===attemptId) || getAttempts()[0]
  if(!attempt) return <main className="content-page"><div className="page-intro"><span className="page-eyebrow">RESULT</span><h1>এখনও কোনো পরীক্ষা<br/><em>দেওয়া হয়নি।</em></h1><p>একটি মক টেস্ট দিয়ে তোমার প্রস্তুতি যাচাই করো।</p><Link className="btn-primary" to="/tests">মক টেস্ট দেখো <FiArrowRight/></Link></div></main>
  const percent=Math.round(attempt.score/(attempt.totalMarks||100)*100)
  return <main className="content-page result-page"><div className="result-heading"><span className="result-star">✳</span><span className="page-eyebrow">পরীক্ষা সম্পন্ন</span><h1>ভালোই হয়েছে!<br/><em>এবার আরও এগিয়ে যাও।</em></h1><p>{attempt.title}</p></div><section className="result-card"><div className="score-card"><span>তোমার স্কোর</span><strong>{attempt.score}<small> / {attempt.totalMarks||100}</small></strong><div className="score-bar"><i style={{width:`${percent}%`}}/></div><small>মোট নম্বরের {percent}%</small></div><div className="score-details"><div><FiCheck/><span>সঠিক</span><b>{attempt.correct}</b></div><div><FiX/><span>ভুল</span><b>{attempt.wrong}</b></div><div><span className="dash">−</span><span>ফাঁকা</span><b>{attempt.blank}</b></div></div></section><div className="result-tip"><FiTarget/><div><b>এগিয়ে যাওয়ার ছোট্ট টিপস</b><p>যে প্রশ্নগুলোতে ভুল হয়েছে, সেগুলোর বিষয় আর ব্যাখ্যা আবার দেখে নাও। নিয়মিত অনুশীলনেই আত্মবিশ্বাস বাড়ে।</p></div></div><div className="result-actions"><Link className="btn-primary" to="/tests">আরেকটি পরীক্ষা দাও <FiArrowRight/></Link><Link className="btn-secondary" to="/dashboard">ড্যাশবোর্ড দেখো</Link></div></main>
}
