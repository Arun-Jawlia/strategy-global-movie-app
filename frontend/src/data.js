import axios from "axios";
const getData = async(query='thor') =>
{
    const data = await axios.get(`http://localhost:8000/movie?search=${query}`)
    return data.data
}


const getMovieById = async(id)=>{

    const data = await axios.get(`http://localhost:8000/movie/${id}`)
    return data.data
}



export {getData, getMovieById}