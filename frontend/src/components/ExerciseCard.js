import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
const ExerciseCard = ({exercise}) => {
  return (
      <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"></img>
        <Stack direction="row" justifyContent="space-between" alignItems="center" p="20px">
          <Button sx = {{ml: '21px', color: '#fff', background: '#FFA9A9',
                          fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
              {exercise.bodyPart}
          </Button>
          <Button sx = {{ml: '21px', color: '#fff', background: '#FCC757',
                          fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize'}}>
              {exercise.target}
          </Button>
        </Stack>
        <Typography ml="23px" color="#000" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize">
          {exercise.name}
        </Typography>
      </Link>
  )
}

export default ExerciseCard