import { useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import PageIntro from '../components/PageIntro.jsx'
import UniversityCard from '../components/UniversityCard.jsx'
import { universities } from '../data/admissions.js'

export default function UniversitiesPage() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => universities.filter(u => `${u.name} ${u.english} ${u.short}`.toLowerCase().includes(query.toLowerCase())), [query])
  return <main className="content-page"><PageIntro eyebrow="UNIVERSITY DIRECTORY" title={<>তোমার স্বপ্নের<br /><em>বিশ্ববিদ্যালয় বেছে নাও।</em></>} description="বিশ্ববিদ্যালয়, ভর্তি ইউনিট ও পরীক্ষার ধরন অনুযায়ী সাজানো প্রস্তুতি—এক জায়গায়।"/><label className="search-field"><FiSearch/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="বিশ্ববিদ্যালয়ের নাম লিখে খোঁজো"/></label><div className="university-grid directory-grid">{filtered.map(u => <UniversityCard university={u} key={u.id}/>)}</div>{filtered.length === 0 && <p className="empty-message">কোনো বিশ্ববিদ্যালয় পাওয়া যায়নি।</p>}</main>
}
