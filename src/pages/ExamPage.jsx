import { useCallback, useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiBookmark, FiCheck, FiCheckCircle, FiChevronLeft, FiChevronRight, FiClock, FiFileText, FiX } from 'react-icons/fi'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { exams, getAttempts, questions } from '../data/admissions.js'

function getSaved(exam, duration) {
  try { return JSON.parse(localStorage.getItem(`varsityx-active-${exam}`)) || { answers: {}, marked: [], seconds: duration } } catch { return { answers: {}, marked: [], seconds: duration } }
}

function QuestionPaper({ question, selected, onSelect }) {
  return <div className="exam-options">{question.options.map((option,index)=><button key={option} className={selected===index?'exam-option selected':'exam-option'} onClick={()=>onSelect(index)}><span>{String.fromCharCode(65+index)}</span><b>{option}</b>{selected===index&&<FiCheck/>}</button>)}</div>
}

export default function ExamPage() {
  const { examId } = useParams()
  const exam = exams.find(e=>e.id===examId) || exams[0]
  const initial = useState(()=>getSaved(exam.id, exam.minutes*60))[0]
  const [index,setIndex] = useState(0)
  const [answers,setAnswers] = useState(initial.answers || {})
  const [marked,setMarked] = useState(initial.marked || [])
  const [seconds,setSeconds] = useState(initial.seconds || exam.minutes*60)
  const [confirm,setConfirm] = useState(false)
  const navigate = useNavigate()
  const answered=Object.keys(answers).length
  const question=questions[index%questions.length]
  const finish=useCallback(()=>{
    const correct=Object.entries(answers).filter(([q,a])=>a===questions[Number(q)%questions.length].answer).length
    const wrong=answered-correct
    const score=Math.max(0,Math.round((correct*(exam.marks/exam.questions)-wrong*exam.negative)*100)/100)
    const attempt={id:`${Date.now()}-${Math.random().toString(36).slice(2,7)}`,examId:exam.id,title:exam.title,university:exam.university,date:new Date().toISOString(),score,totalMarks:exam.marks,scorePercent:Math.round(score/exam.marks*100),correct,wrong,blank:exam.questions-answered,total:exam.questions}
    localStorage.setItem('varsityx-attempts',JSON.stringify([attempt,...getAttempts()]))
    localStorage.removeItem(`varsityx-active-${exam.id}`)
    navigate(`/result/${attempt.id}`)
  },[answers,answered,exam,navigate])

  useEffect(()=>{localStorage.setItem(`varsityx-active-${exam.id}`,JSON.stringify({answers,marked,seconds}))},[answers,marked,seconds,exam.id])
  useEffect(()=>{if(seconds<=0){finish();return undefined}const timer=setTimeout(()=>setSeconds(s=>s-1),1000);return()=>clearTimeout(timer)},[seconds,finish])
  const time=`${String(Math.floor(seconds/60)).padStart(2,'0')}:${String(seconds%60).padStart(2,'0')}`

  return <main className="exam-page"><header className="exam-header"><Link to="/tests" className="back-link"><FiArrowLeft/></Link><div><strong>{exam.university}</strong><small>{exam.title}</small></div><span className={seconds<300?'timer urgent':'timer'}><FiClock/>{time}</span><span className="autosave"><FiCheckCircle/> উত্তর সংরক্ষিত</span></header><div className="exam-layout"><aside className="question-map"><div className="question-map-title"><b>প্রশ্ন তালিকা</b><span>{index+1}<small>/{exam.questions}</small></span></div><div className="question-numbers">{Array.from({length:exam.questions},(_,i)=><button key={i} onClick={()=>setIndex(i)} className={`${index===i?'current':''} ${answers[i]!==undefined?'done':''} ${marked.includes(i)?'flagged':''}`}>{i+1}</button>)}</div><div className="question-legend"><span><i className="current"/>বর্তমান</span><span><i className="done"/>উত্তর দেওয়া</span><span><i className="flagged"/>পরে দেখব</span></div><div className="answered-total"><span>উত্তর দিয়েছো</span><b>{answered} / {exam.questions}</b><div><i style={{width:`${answered/exam.questions*100}%`}}/></div></div></aside><section className="exam-question-panel"><div className="question-meta"><span>প্রশ্ন {String(index+1).padStart(2,'0')}</span><small>{question.subject}</small><button onClick={()=>setMarked(m=>m.includes(index)?m.filter(x=>x!==index):[...m,index])}><FiBookmark/>{marked.includes(index)?'চিহ্নিত':'পরে দেখব'}</button></div><h1>{question.text}</h1><QuestionPaper question={question} selected={answers[index]} onSelect={value=>setAnswers(old=>({...old,[index]:value}))}/><div className="question-controls"><button className="clear-answer" onClick={()=>setAnswers(old=>{const next={...old};delete next[index];return next})}>উত্তর মুছো</button><div><button className="btn-secondary" disabled={index===0} onClick={()=>setIndex(Math.max(0,index-1))}><FiChevronLeft/>আগের</button><button className="btn-primary" onClick={()=>index+1<exam.questions?setIndex(index+1):setConfirm(true)}>পরের প্রশ্ন <FiChevronRight/></button></div></div><div className="submit-row"><span>জমা দেওয়ার পর উত্তর আর পরিবর্তন করা যাবে না</span><button className="btn-submit" onClick={()=>setConfirm(true)}>পরীক্ষা জমা দাও <FiArrowRight/></button></div></section></div>{confirm&&<div className="modal-backdrop"><section className="confirm-dialog"><button className="modal-x" onClick={()=>setConfirm(false)}><FiX/></button><span className="confirm-icon"><FiFileText/></span><h2>পরীক্ষা জমা দেবে?</h2><p>তুমি {answered}টি প্রশ্নের উত্তর দিয়েছো, {exam.questions-answered}টি ফাঁকা থাকবে।</p><div><button className="btn-secondary" onClick={()=>setConfirm(false)}>আরও দেখব</button><button className="btn-primary" onClick={finish}>হ্যাঁ, জমা দাও <FiArrowRight/></button></div></section></div>}</main>
}
