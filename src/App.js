import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Promo from './Pages/Promo';
import Shoping from './Pages/Shoping';
import Contact from './components/Contact';

function App() {
  return (
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Shoping/>} path='/shoping'/>
      <Route element={<Promo/>} path='/promo'/>
      <Route element={<Contact/>} path='/contact'/>
    </Routes>
  );
}

export default App;
