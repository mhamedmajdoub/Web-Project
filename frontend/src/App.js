import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import SearchExercises from './components/SearchExercises';

const App = () => {
  const navigate = useNavigate();
  // Function to redirect to login page
  const redirectToLoginPage = () => {
    navigate('/login');
  };

  return (
    <Box width="100%" sx={{ maxWidth: '1488px', margin: 'auto' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/register"
          element={<RegisterPage redirectToHome={redirectToLoginPage} />}
        />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="exercise" element={<SearchExercises />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
