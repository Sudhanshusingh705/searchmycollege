import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './screen/Home';
import About from './screen/About';
import Contact from './screen/Contact';
import Login from './screen/Login';
import Appdownload from './screen/Appdownload';
import  {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
      <Navbar></Navbar>
        <Routes>
          <Route excat path="/" element={<Home />} > </Route>
          <Route exact path="/about" element={<About />} > </Route>
          <Route exact path="/contact" element={<Contact />} > </Route>
          <Route exact path="/login" element={<Login />} > </Route>
          <Route exact path="/download" element={<Appdownload />} > </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
    
    
  )
}

export default App;
