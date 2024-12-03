// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainContent } from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Quiz from './pages/Quiz';
import ModuleDetailsPage from './pages/ModuleDetailsPage';

function App() {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/modules/:id" element={<ModuleDetailsPage />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
}

export default App;
