import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import EquipmentImage from '../assets/icons/equipment.png';
import TargetImage from '../assets/icons/target.png';


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {icon : BodyPartImage,
    name : bodyPart},

    {icon : TargetImage,
    name : target},

    {icon : EquipmentImage,
    name : equipment}
  ]
  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{fap: {lg: '35px', xs: '20px'}}}>
          <Typography variant='h4' fontWeight="bold">
            {name}
          </Typography>
          <Typography >
            Exercises keep you strong. 
            {` `} <span style={{ fontWeight: 'bold' }}>{name}</span> {` `}
            is a great exercise for your 
            {` `} <span style={{ fontWeight: 'bold' }}>{target}</span> {` `}	
            and requires only 
            {` `} <span style={{ fontWeight: 'bold' }}>{equipment}</span> {` `}
            as equipment.
          </Typography>
        {extraDetail.map(( item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems= "center">
            <Button sx={{ bakground: '#FFF2D', borderRadius: '50%', width: '100px', height: '100px'}}>
              <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}} />
            </Button>
            <Typography textTransform="capitalize" variant="h5" fontWeight="bold">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
    )
}

export default Detail;