import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import AuthForm from './pages/AuthForm';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>  
          <Header />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/authenticate" element={<AuthForm />}></Route>
            </Routes>
          <Footer /> 
        </Router>
    </>
  );
}

export default App;
