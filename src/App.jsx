import { useState, useEffect } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import Navbar from './Components/Navbar'
import HaveAProject from './Components/HaveAProject'
import { Outlet } from 'react-router-dom'

function App() {
  const [themeMode, setThemeMode] = useState(0)

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (

    <>
      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
        <section className=' bg-slate-50 dark:bg-slate-900 overflow-hidden'>
          <Navbar />
          <Outlet />
          <HaveAProject />
        </section>

      </ThemeProvider>
    </>
  )
}

export default App
