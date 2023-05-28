import './App.css';
import Home from './pages/home/Home';
import Service from './pages/service/Service';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route exact path='/' index element={<Home />} />
        <Route exact path='/service' element={<Service />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact/>} />
      </Routes>
    </div>
    
  );
}

export default App;
