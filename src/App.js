import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import Contact from './pages/Contact'
import RootLayout from './RootLayout'

const App = () => {
  return (
    <div className='w-full h-screen'>
        <Router>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route index path='/' element={<Index/>}/>
                    <Route path='/about-me' element={<About/>}/>
                    <Route path='/contact-me' element={<Contact/>}/>
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App