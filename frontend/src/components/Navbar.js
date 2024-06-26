import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png'; // Ensure the correct path to Logo
import UserService from '../components/service/UserService'; // Ensure the correct path to UserService

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    UserService.logout();
    navigate('/login');
  };

  const handleLinkClick = (path) => {
    if (!UserService.isAuthenticated()) {
      alert('Please login first.');
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  // Determine if the user is on LoginPage or RegisterPage
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';

  // Render null if on LoginPage or RegisterPage
  if (isLoginPage || isRegisterPage) {
    return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      top="-30px"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        padding: '10px 40px',
        position: 'relative',
        width: '100%',
      }}
    ></Stack>);
  }

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      top="-30px"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        zIndex: '1000',
        px: '20px',
        padding: '20px 40px',
        borderBottom: '1px solid #FF2625',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        width: '100%',
        backgroundColor: 'white',
      }}
    >
      <Link to="/home" onClick={() => handleLinkClick('/home')}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: '48px', height: '48px', margin: '0px 20px' }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="20px" alignflex="flex-end" sx={{ flexGrow: 1 }}>
        <Link
          to="/home"
          style={{
            textDecoration: 'none',
            color: '#3A1212',
            borderBottom: '3px solid #FF2625',
          }}
          onClick={() => handleLinkClick('/home')}
        >
          Home
        </Link>
        <Link
          to="/exercise"
          style={{ textDecoration: 'none', color: '#3A1212' }}
          onClick={() => handleLinkClick('/exercise')}
        >
          Exercises
        </Link>
      </Stack>
      <IconButton aria-label="logout" onClick={handleLogout}>
        <Logout />
      </IconButton>
    </Stack>
  );
};

export default Navbar;
