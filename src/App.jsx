import './styles.css'
import Navbar from "./components/Navbar"
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Services from './components/Services'
import Pages from './components/Pages'
import Contact from './components/Contact'

import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Blog/>
      <Services/>
      <Pages/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
