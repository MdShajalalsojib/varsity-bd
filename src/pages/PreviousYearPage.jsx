import { useState } from 'react'
import { FiArrowRight, FiDownload, FiFileText, FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro.jsx'
import { universities } from '../data/admissions.js'

const years=[2025,2024,2023,2022,2021]
export default function PreviousYearPage(){
  const [year,setYear]=useState(2025)
  const [university,setUniversity]=useState('সব বিশ্ববিদ্যালয়')
  return <main className="content-page"><PageIntro eyebrow="PREVIOUS YEAR QUESTIONS" title={<>আগের বছরের প্রশ্নে<br/><em>নিজেকে প্রস্তুত করো।</em></>} description="বিশ্ববিদ্যালয় ও ভর্তি ইউনিট অনুযায়ী প্রশ্নপত্র অনুশীলন করো। অনুমোদিত প্রশ্নগুলোই এখানে যোগ হবে।"/><div className="test-tools"><label className="search-field"><FiSearch/><input placeholder="বছর, বিশ্ববিদ্যালয় বা ইউনিট খুঁজো"/></label><select value={university} onChange={e=>setUniversity(e.target.value)}><option>সব বিশ্ববিদ্যালয়</option>{universities.map(u=><option key={u.id}>{u.name}</option>)}</select></div><div className="year-tabs">{years.map(y=><button className={year===y?'selected':''} onClick={()=>setYear(y)} key={y}>{y}</button>)}</div><div className="previous-empty"><span><FiFileText/></span><h2>{year} সালের প্রশ্নপত্র প্রস্তুত করা হচ্ছে</h2><p>প্রশ্ন ব্যবহারের অনুমতি ও কপিরাইট যাচাইয়ের পর প্রশ্নপত্র এখানে পাওয়া যাবে।</p><button disabled className="btn-secondary"><FiDownload/> শিগগিরই আসছে</button></div><Link className="browse-more" to="/tests">এখন মক টেস্ট দাও <FiArrowRight/></Link></main>
}
