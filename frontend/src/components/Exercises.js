import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Typography, Stack, CircularProgress } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ setExercises, exercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const exercisesPerPage = 9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      setLoading(true);
      setError(null);

      try {
        let exercisesData = [];
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }
        setExercises(exercisesData);
      } catch (err) {
        setError('Failed to fetch exercises');
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  return (
    <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">Exercises</Typography>
      {loading ? (
        <Stack alignItems="center">
          <CircularProgress />
        </Stack>
      ) : error ? (
        <Typography variant="h6" color="error">{error}</Typography>
      ) : (
        <>
          <Stack direction="row" sx={{ gap: '110px', xs: '50px' }} flexWrap="wrap" justifyContent="center">
            {currentExercises.map((exercise, index) => (
              <ExerciseCard key={index} exercise={exercise} />
            ))}
          </Stack>
          <Stack mt="100px" alignItems="center">
            {exercises.length > exercisesPerPage && (
              <Pagination
                count={Math.ceil(exercises.length / exercisesPerPage)}
                color="standard"
                shape="rounded"
                size="large"
                defaultPage={1}
                page={currentPage}
                onChange={paginate}
              />
            )}
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Exercises;
