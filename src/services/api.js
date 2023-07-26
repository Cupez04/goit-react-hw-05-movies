import axios from "axios";

axios.defaults.baseURL= 'https://api.themoviedb.org/3';
const API_KEY = '6097613d5a749b39241a9ad08b8c5252';

// Enpoints de busqueda

const endpoints = {
    trending: "/trending/all/week",
    querySearch: "/search/movie",
    genre: "/genre/movie/list",
    basic: "&language=en-US",
} 

//consulta de tendencia
export const MoviesTrending = async (page = 1) => {
    const response = await axios.get(
        `${endpoints.trending}?api_key=${API_KEY}&page=${page}`
    );
    return response.data;
};

//busqueda por nombre
export const searchQueryMovie= async (query, page=1) => {
    const response = await axios.get(
        `${endpoints.querySearch}?api_key=${API_KEY}${endpoints.basic}&query=${query}&page=${page}&include_adult=false`
    );
    return response.data;
};

//Detalles de la pelicula
export const MovieDetails = async (id) => {
    const response = await axios.get(
        `movie/${id}?api_key=${API_KEY}${endpoints.basic}`
    );
    return response.data;
};

//consulta de puntuacion 
export const MovieCredits = async (id) => {
    const response = await axios.get(
        `movie/${id}/credits?api_key=${API_KEY}${endpoints.basic}`
    );
    return response.data;
};
export const reviews = async (id) => {
    const response = await axios.get(
        `movie/${id}/reviews?api_key=${API_KEY}${endpoints.basic}&page=1`
    );
    return response.data;
}

export const fakePromise = (time = 1500) =>
    new Promise((resolve) => setTimeout(resolve, time));


export default {
    MoviesTrending,
    searchQueryMovie,
    MovieDetails,
    MovieCredits,
    reviews,
    fakePromise,
};

