import React from 'react'
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack  type="button"
            alignItems="center" 
            justifyContent="center" 
            className='bodyPart-card'
            sx = {{
                borderTop: bodyPart === item ? '4px solid #FF2625' : '',
                  borderBottomLeftRadius: '20px', 
                  width: '200px',
                  height: '200px',
                  cursor: 'pointer',
                  gap: '47px',
                  backgroundColor: '#FFF',
              }} 
              onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'});
              }}
      >
          <img src={Icon} alt="dumbell" style = {{width: '50px', height: '50px'}}/>
          <Typography fontSize="24px" fontFamily="Alegreya" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart