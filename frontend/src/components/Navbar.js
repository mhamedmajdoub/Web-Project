import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import  Logo from '../assets/images/Logo.png';


const Navbar = () => (
    <Stack
      direction="row" 
      justifyContent="space-around"
      top="-30px" 
      sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none', zIndex:"1000"}} 
      px="20px"
      padding="20px 40px"
      borderBottom="1px solid #FF2625"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      position="relative"
      width="100%"
      backgroundColor="white"
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
      </Link>
      <Stack
        direction="row"
        gap = "40px"
        fontFamily="Alegreya"
        fontSize="20px"
        alignflex="flex-end"
      
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )

export default Navbar