import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { Signup } from './components/landing/Signup';
import {Signin} from './components/landing/Signin';
import { About } from './components/landing/About';
import {Footer}  from './components/common/Footer';
import {Contact} from './components/landing/Contact';

function App() {
  return (
    <div>      
      <Home />
      <Router>
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