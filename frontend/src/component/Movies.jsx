import React, {useEffect, useState } from 'react'
import { Box} from '@chakra-ui/react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'
import { getData } from '../data'


const Movies = () => {
  const [data,setData] = useState([])


 

  const handleSearch = async(query) =>
  {
    if(query !=='')
    {
      try{
        const data = await getData(query)
        setData(data)

      }
      catch(err)
      {
        console.log(err)
      }
    }
  }

  



  return (
    <>
    
    <Box p={'1rem'} MaxW='100%' h='100vh' >
        <SearchBar handleSearch={handleSearch}/>
        <MovieList data={data}/>
        
        
    </Box>
    </>
  )
}

export default Movies