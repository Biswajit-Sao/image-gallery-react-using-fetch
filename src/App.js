// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import PhotoDetails from './components/PhotoDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/photo/:id" element={<PhotoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
