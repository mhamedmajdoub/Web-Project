import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Stack, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';
import Logo from '../assets/images/Logo.png';
import UserService from '../components/service/UserService'; // Import UserService

const Navbar = () => {
    const navigate = useNavigate(); // Hook for navigation
    const handleLogout = () => {
        const loggedOut = UserService.logout(); // Call the logout function from UserService
        if (loggedOut) {
            navigate('/login'); // Navigate to the login page
        }
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between" // Ensure elements are spaced between
            alignItems="center" // Align items vertically in the center
            top="-30px"
            sx={{ 
                gap: { sm: '123px', xs: '40px' }, 
                mt: { sm: '32px', xs: '20px' }, 
                zIndex:"1000",
                px: '20px',
                padding: '20px 40px',
                borderBottom: '1px solid #FF2625',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                position: 'relative',
                width: '100%',
                backgroundColor: 'white',
            }}
        >
            <Link to="/home">
                <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontFamily="Alegreya"
                fontSize="20px"
                alignflex="flex-end"
                sx={{ flexGrow: 1 }} // Allow this Stack to take up remaining space
            >
                <Link to="/home" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href="/exercise" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
            </Stack>
            <IconButton
                aria-label="logout"
                onClick={handleLogout} // Call handleLogout function on click
            >
                <Logout />
            </IconButton>
        </Stack>
    );
};

export default Navbar;
