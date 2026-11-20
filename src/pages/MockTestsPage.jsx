import { useMemo, useState } from 'react'
import { FiFilter, FiSearch } from 'react-icons/fi'
import ExamCard from '../components/ExamCard.jsx'
import PageIntro from '../components/PageIntro.jsx'
import { exams } from '../data/admissions.js'

export default function MockTestsPage() {
  const [university, setUniversity] = useState('সব')
  const [search, setSearch] = useState('')
  const universities = ['সব', ...new Set(exams.map(e => e.university))]
  const filtered = useMemo(() => exams.filter(e => (university === 'সব' || e.university === university) && `${e.title} ${e.university} ${e.unit}`.toLowerCase().includes(search.toLowerCase())), [university, search])
  return <main className="content-page"><PageIntro eyebrow="PRACTICE LIKE THE REAL EXAM" title={<>প্রস্তুতি যাচাই করো<br/><em>মক টেস্ট দিয়ে।</em></>} description="বিশ্ববিদ্যালয় ও ভর্তি ইউনিট অনুযায়ী মডেল টেস্ট বেছে নাও। টাইমার চালু হবে পরীক্ষা শুরু করলেই।"/><div className="test-tools"><label className="search-field"><FiSearch/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="মডেল টেস্ট খুঁজে দেখো"/></label><span className="test-filter-label"><FiFilter/> বিশ্ববিদ্যালয়</span><select value={university} onChange={e=>setUniversity(e.target.value)}>{universities.map(u=><option key={u}>{u}</option>)}</select></div><div className="test-result-count">{filtered.length}টি মডেল টেস্ট</div><div className="exam-grid test-grid">{filtered.map(exam=><ExamCard key={exam.id} exam={exam}/>)}</div>{filtered.length===0&&<p className="empty-message">এই ফিল্টারে কোনো পরীক্ষা পাওয়া যায়নি।</p>}</main>
}
