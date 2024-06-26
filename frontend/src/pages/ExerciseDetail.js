// Import necessary modules from React and React Router
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

// Define the ExerciseDetail component
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

      setExerciseDetail(exerciseDetailData);


        const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
        setExerciseVideos(exerciseVideosData.contents);
    

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);
      }

    fetchExercisesData();
  }, [id])
  

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name = {exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises = {targetMuscleExercises}/>
    </Box>
  )
}

// Export the ExerciseDetail component as the default export
export default ExerciseDetail;
