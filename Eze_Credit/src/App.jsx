import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/landing/Home';
import { Signup } from './components/landing/Signup';
// import { Signin } from './pages/Signin';
import { About } from './components/landing/About';
import Navbar from './components/common/Navbar';
import MainNav from './components/MainNav';
function App() {
  return (
    <div>      
      <Home />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/signin" element={<Signin />} /> */}
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;