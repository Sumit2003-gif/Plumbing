import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import BlogDetail from './Components/BlogDetail'
import ScrollToTop from './Components/ScrollToTop'
const App = () => {
  return (
  <div className='overflow-hidden'>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<BlogDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      
    </Routes>
    <Footer/>
  </div>
  )
}

export default App 
