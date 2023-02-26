import React from 'react';
import { Route, Routes, Router, BrowserRouter } from 'react-router-dom';
import AllCities from './pages/allCitiesPage';
import OneCity from './pages/oneCityPage';


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
