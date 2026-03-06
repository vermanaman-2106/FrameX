import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import WebsiteDevelopment from './pages/WebsiteDevelopment.jsx'
import MobileAppDevelopment from './pages/MobileAppDevelopment.jsx'
import PerformanceMarketing from './pages/PerformanceMarketing.jsx'
import Portfolio from './pages/Portfolio.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 font-sans">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.2),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
