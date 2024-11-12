import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { Signup } from './components/landing/Signup';
import { About } from './components/landing/About';
<<<<<<< HEAD
import {Footer}  from './components/common/Footer';
import {Contact} from './components/landing/Contact';
import {Signin} from './components/landing/Signin';
import { MainNav } from './components/common/MainNav';
import {FeQ} from './components/landing/F&Q';
=======

import {Footer}  from './components/common/Footer';
import {Contact} from './components/landing/Contact';
import { Testinomial } from './components/common/Testinomial';
>>>>>>> 29468e8 (made testimonial card)


function App() {
  return (
    <div>      
      
      <Router>
        <Testinomial />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/f&q" element={<FeQ/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;