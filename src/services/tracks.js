import axios from 'axios';

const getTracksService = async ({ id }) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

export default getTracksService;
