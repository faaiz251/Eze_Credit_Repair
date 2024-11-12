import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { Signup } from './components/landing/Signup';
import {Signin} from './components/landing/Signin';
import { About } from './components/landing/About';
<<<<<<< HEAD
import {Footer}  from './components/common/Footer';
import {Contact} from './components/landing/Contact';
=======
import {Signin} from './components/landing/Signin';
import { MainNav } from './components/common/MainNav';
>>>>>>> 4d5b6b8 (made mainnav)

function App() {
  return (
    <div>      
      
      <Router>
        <MainNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About/>} />
          <Route path="/footer" element={<Footer/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;