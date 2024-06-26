import React from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import './login&register.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//import RegisterPage from './pages/RegisterPage';
//import LoginPage from './pages/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import LoginPage from './components/auth/LoginPage';

const App = () => {
  const navigate = useNavigate();

  // Function to redirect to home page
  const redirectToHome = () => {
    navigate('/home');
  };

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/register" />} // Redirect to register page by default
        />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/register"
          element={<RegisterPage redirectToHome={redirectToHome} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
