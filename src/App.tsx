// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './routes/HomePage';
import PhotoPage from './routes/PhotoDetail';
import NotFound from './routes/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photos" element={<HomePage />} />
        <Route path="/photos/:id" element={<PhotoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  );
};

export default App;
