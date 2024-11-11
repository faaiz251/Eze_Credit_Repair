import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Home} from './components/Home';
import {Signup} from './components/Signup';
import {Signin} from './components/Signin';
import {About}  from './components/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;