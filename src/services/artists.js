import axios from 'axios';

const getArtistsService = async ({ query }) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${query}&limit=10`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

export default getArtistsService;
