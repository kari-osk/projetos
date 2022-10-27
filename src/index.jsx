import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/' element={<Navbar />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

