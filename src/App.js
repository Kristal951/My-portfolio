import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './RootLayout'
import Skills from './pages/Skills'

const App = () => {
  return (
    <div className='w-full h-screen'>
        <Router>
            <Routes>
                <Route element={<RootLayout/>}>
                  <Route path='/About' element={<About/>}/>
                  <Route path='/Contact' element={<Contact/>}/>
                  <Route path='/Skills' element={<Skills/>}/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App