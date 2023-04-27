const { default: axios } = require("axios");

const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: 'Bearer ' + process.env.NEXT_PUBLIC_API_KEY_TMDB
    }
})

export default apiFilmes