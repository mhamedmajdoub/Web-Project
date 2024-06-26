// Import Axios with the appropriate methods
import axios from 'axios';

export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '200'},
  headers: {
    'X-RapidAPI-Key': '31ddbfaa8amsh6823089058ba932p1d9959jsn8225335473a4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8eb8379f44msh77a8f80982394a2p17ab8fjsn9c0fc74d27c1',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  
    // Use the appropriate Axios method (e.g., axios.get, axios.post, etc.)
    const response = await axios.get(url, options);
    return response.data;
};
