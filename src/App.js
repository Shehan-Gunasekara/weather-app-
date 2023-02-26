import React from 'react';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import AllCities from './pages/allCities';
import OneCity from './pages/oneCity';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllCities />} />
        <Route path="/oneCity" element={<OneCity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
