import { FiArrowRight, FiBookOpen, FiClock } from 'react-icons/fi'
import PageIntro from '../components/PageIntro.jsx'

const articles=[
  {category:'প্রস্তুতি কৌশল',title:'ভর্তি পরীক্ষার আগে কীভাবে নিজের পড়ার রুটিন সাজাবে',summary:'সব বিষয়কে সমান সময় দেওয়া নয়—নিজের দুর্বলতা বুঝে পরিকল্পনা করাই কার্যকর প্রস্তুতির শুরু।',date:'১২ নভেম্বর ২০২৬',read:'৫ মিনিট'},
  {category:'পরীক্ষার কৌশল',title:'MCQ পরীক্ষায় সময় বাঁচানোর ৫টি উপায়',summary:'প্রশ্ন বাছাই, সময় ভাগ করা এবং শেষে উত্তর মিলিয়ে নেওয়ার সহজ কিছু পদ্ধতি।',date:'০৮ নভেম্বর ২০২৬',read:'৪ মিনিট'},
  {category:'মানসিক প্রস্তুতি',title:'মক টেস্টের স্কোর কম হলে কী করবে?',summary:'একটি স্কোর তোমার সামর্থ্যের শেষ কথা নয়। ভুলগুলোকে পরের প্রস্তুতির মানচিত্র বানাও।',date:'০২ নভেম্বর ২০২৬',read:'৬ মিনিট'},
]
export default function BlogPage(){return <main className="content-page"><PageIntro eyebrow="ADMISSION PREPARATION JOURNAL" title={<>প্রস্তুতির পথে<br/><em>কিছু কাজে লাগার কথা।</em></>} description="পরীক্ষার কৌশল, পড়ার পরিকল্পনা আর ভর্তি প্রস্তুতির পথচলা নিয়ে লেখা।"/><div className="blog-grid">{articles.map((a,i)=><article className="blog-card" key={a.title}><div className={`blog-art blog-art-${i}`}><FiBookOpen/><span>০{i+1}</span></div><div className="blog-content"><span className="blog-category">{a.category}</span><h2>{a.title}</h2><p>{a.summary}</p><div><span><FiClock/>{a.read} পড়া</span><span>{a.date}</span></div><button>লেখাটি পড়ো <FiArrowRight/></button></div></article>)}</div></main>}
