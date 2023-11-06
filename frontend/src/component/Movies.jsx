import React from 'react'
import { Box,Container,Text } from '@chakra-ui/react'
import SearchBar from './SearchBar'
import MovieList from './MovieList'


const Movies = () => {
  return (
    <>
    
    <Box p={'1rem'} MaxW='100%' h='100vh' >
        {/* <SearchBar/> */}
        <MovieList/>
        
        
    </Box>
    </>
  )
}

export default Movies