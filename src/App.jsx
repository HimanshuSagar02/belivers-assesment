import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import OfflinePage from './pages/OfflinePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/corebtr-offline" element={<OfflinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
