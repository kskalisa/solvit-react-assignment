import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(() => (typeof window !== 'undefined' ? window.innerWidth > 768 : true))

  // adapt sidebar state on resize so desktop shows it and mobile hides it
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth <= 768) setSidebarOpen(false)
      else setSidebarOpen(true)
    }
    window.addEventListener('resize', onResize)
    // run once to sync
    onResize()
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      backgroundColor: '#f9fafb'
    }}>
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main style={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#f9fafb'
        }}>
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
