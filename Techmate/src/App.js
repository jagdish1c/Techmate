
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Service from './Components/Service';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from './Components/Footer';
import Registration from './Components/Registration';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/services' Component={Service}/>
    <Route exact path='/contact' Component={Contact}/>
    <Route exact path='/about' Component={About}/>
    <Route exact path='/registration'Component={Registration}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
