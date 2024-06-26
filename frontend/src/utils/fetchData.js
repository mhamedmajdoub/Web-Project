// Import Axios with the appropriate methods
import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, {
  retries: 3, // Number of retry attempts
  retryDelay: (retryCount) => {
    return Math.pow(2, retryCount) * 1000; // Exponential backoff
  },
  retryCondition: (error) => {
    return error.response.status === 429; // Retry only on status code 429
  },
});

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: { limit: '200' },
  headers: {
    'X-RapidAPI-Key': '8eb8379f44msh77a8f80982394a2p17ab8fjsn9c0fc74d27c1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  try {
    // Use the appropriate Axios method (e.g., axios.get, axios.post, etc.)
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Request failed:', error);
    return [];
  }
};
