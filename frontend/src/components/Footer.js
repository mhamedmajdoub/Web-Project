import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo.png';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack  alignItems="center" gap="40px" pt ="24px" px="40px">
        <img src={Logo} alt="logo" width="170px" height="100px"/>
        
        <Typography variant="h6" pb="40px" mt="20px" fontWeight="bold">
            Web module Project
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer