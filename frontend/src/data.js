import axios from "axios";
const getData = async(query) =>
{
    const data = await axios.get(`https://strategy-global-movie-app-backend.onrender.com/movie?search=${query}`)
    return data.data
}


const getMovieById = async(id)=>{

    const data = await axios.get(`https://strategy-global-movie-app-backend.onrender.com/movie/${id}`)
    return data.data
}



export {getData, getMovieById}