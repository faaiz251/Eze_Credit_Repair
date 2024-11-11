import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
// import { Signin } from './pages/Signin';
import { About } from './pages/About';
import Navbar from './components/Navbar';
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