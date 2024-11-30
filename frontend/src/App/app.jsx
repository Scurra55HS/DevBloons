import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from "../Components/Header/Header";
import Main from '../Components/Main/Main';
import TopicDetail from '../Components/TopicDetail/TopicDetail';
import Auth from '../Components/Auth/Auth';
import { AuthProvider, useAuth } from '../Components/Contenxt/AuthContext';
import { PageWrapper } from '../Styles/App';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PageWrapper>
          <Header />
          <Routes>
            <Route path="/login" element={<Auth />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Main />
                </ProtectedRoute>
              }
            />
            <Route
              path="/topico/:id"
              element={
                <ProtectedRoute>
                  <TopicDetail />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </PageWrapper>
      </Router>
    </AuthProvider>
  );
};

export default App;
