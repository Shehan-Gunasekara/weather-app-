import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./pages/DashboardPage";
import ViewWeather from "./pages/ViewWeatherPage";

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
