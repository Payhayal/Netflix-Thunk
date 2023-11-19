export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: import.meta.env.VITE_API_KEY,
  }
};

export const baseImgUrl = "https://image.tmdb.org/t/p/original/";