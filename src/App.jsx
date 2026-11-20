import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout.jsx'
import AdminPage from './pages/AdminPage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import BlogPage from './pages/BlogPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'
import ExamPage from './pages/ExamPage.jsx'
import HomePage from './pages/HomePage.jsx'
import MockTestsPage from './pages/MockTestsPage.jsx'
import PreviousYearPage from './pages/PreviousYearPage.jsx'
import ResultPage from './pages/ResultPage.jsx'
import UniversitiesPage from './pages/UniversitiesPage.jsx'
import UniversityDetailPage from './pages/UniversityDetailPage.jsx'

function NotFoundPage(){return <main className="content-page not-found"><span>404</span><h1>এই পৃষ্ঠাটি <em>পাওয়া যায়নি।</em></h1><p>ঠিকানাটি পরীক্ষা করে আবার চেষ্টা করো।</p><a href="/" className="btn-primary">হোমে ফিরে যাও</a></main>}

export default function App(){
  return <Routes><Route element={<SiteLayout/>}><Route index element={<HomePage/>}/><Route path="universities" element={<UniversitiesPage/>}/><Route path="universities/:id" element={<UniversityDetailPage/>}/><Route path="tests" element={<MockTestsPage/>}/><Route path="previous-year" element={<PreviousYearPage/>}/><Route path="blog" element={<BlogPage/>}/><Route path="dashboard" element={<DashboardPage/>}/><Route path="result/:attemptId" element={<ResultPage/>}/><Route path="login" element={<AuthPage mode="login"/>}/><Route path="register" element={<AuthPage mode="register"/>}/><Route path="admin" element={<AdminPage/>}/><Route path="*" element={<NotFoundPage/>}/></Route><Route path="exam/:examId" element={<ExamPage/>}/></Routes>
}
