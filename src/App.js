import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import ViewWeather from "./components/viewWeather/viewWeather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/ViewWeather" element={<ViewWeather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
