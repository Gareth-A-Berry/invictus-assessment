import axios from 'axios';

const getAlbumsService = async ({ id }) =>
  axios.get(
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );

export default getAlbumsService;
