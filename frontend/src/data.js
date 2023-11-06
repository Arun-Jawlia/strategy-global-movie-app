import axios from "axios";
const getData = async(query) =>
{
    const data = await axios.get(`http://localhost:8000/movie?search=${query}`)
    return data.data
}


export {getData}