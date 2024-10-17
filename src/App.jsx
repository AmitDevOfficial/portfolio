import './App.css'
import Header from './components/header/Header'
import './components/css/global.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/page/home/Home';
import Skill from './components/page/skill/Skill';
import About from './components/page/about/About'
import Contact from './components/page/contact/Contact'
import MobileMenu from './components/header/MobileMenu';

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Header />
      <MobileMenu />
        <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route exact path = "/skills" element={<Skill />}/>
            <Route exact path = "/about" element={<About />}/>
            <Route exact path = "/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
