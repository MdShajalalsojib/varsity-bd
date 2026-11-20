import { FiArrowRight, FiBookOpen, FiLock } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

export default function AuthPage({mode='login'}){
  const register=mode==='register'
  const navigate=useNavigate()
  return <main className="auth-page"><section className="auth-message"><span><FiBookOpen/></span><small>YOUR ADMISSION JOURNEY STARTS HERE</small><h1>আজকের প্রস্তুতি,<br/><em>আগামীর ক্যাম্পাস।</em></h1><p>তোমার পরীক্ষা, ফলাফল আর প্রস্তুতির অগ্রগতি—সব এক জায়গায় রাখো।</p></section><form className="auth-form" onSubmit={e=>{e.preventDefault();navigate('/dashboard')}}><span className="page-eyebrow">{register?'নতুন অ্যাকাউন্ট':'আবার স্বাগতম'}</span><h2>{register?'অ্যাকাউন্ট তৈরি করো':'লগইন করো'}</h2><p>{register?'তোমার ভর্তি প্রস্তুতির যাত্রা শুরু হোক।':'তোমার প্রস্তুতি যেখানে থেমেছিল, সেখান থেকে শুরু করো।'}</p>{register&&<label>তোমার নাম<input required placeholder="যেমন, সাদিয়া রহমান"/></label>}<label>ইমেইল বা ফোন<input required type="text" placeholder="email@example.com"/></label><label>পাসওয়ার্ড<input required type="password" placeholder="কমপক্ষে ৮ অক্ষর"/></label>{!register&&<button type="button" className="forgot-button">পাসওয়ার্ড ভুলে গেছো?</button>}<button className="btn-primary auth-submit">{register?'অ্যাকাউন্ট তৈরি করো':'Login'} <FiArrowRight/></button><div className="auth-switch">{register?'আগে থেকেই অ্যাকাউন্ট আছে?':'নতুন এখানে?'} <Link to={register?'/login':'/register'}>{register?'Login':'Sign Up'}</Link></div><div className="auth-note"><FiLock/> তোমার তথ্য নিরাপদে রাখা হবে</div></form></main>
}
