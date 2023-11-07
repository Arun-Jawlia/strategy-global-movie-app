import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getMovieById } from '../data';
import {Box, Flex,Text,Img} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const SingleMovie = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [data,setData] = useState({})
 

  useEffect(()=>
  {
    const handleMovieById = async() =>
    {
      const movie = await getMovieById(id)
      console.log(movie)
      setData(movie)
    }
    handleMovieById()

  },[])

  return (
    <>
    <Box  height={'100px'} p='1rem' border={'1px solid black'} h={'100vh'}>
      <Text onClick={()=>navigate(-1)} cursor={'pointer'} textDecor={'underline'}>Back</Text>
    <Box border={'1px solid lightgray'} p={'1rem 2rem'} mt={'2rem'}>
      <Flex gap={'1rem'}>
        <Box flex={'1'}>
          <Img borderRadius={'10px'} src={data.Poster}/>
        </Box>
        <Box flex={'2'} lineHeight={'30px'}>
          <Text fontWeight={'500'} fontSize={'lg'}>Title:  {data.Title}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Realeased: {data.Released}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Year:{data.Year}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Actors: {data.Actors}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Director: {data.Director}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Writer: {data.Writer}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Awards: {data.Awards}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Genre : {data.Genre}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Box Office Collection: {data.BoxOffice}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>About :{data.Plot}</Text>
          <Text fontWeight={'500'} fontSize={'lg'}>Imdb Rating: {data.imdbRating}</Text>
        </Box>
      </Flex>
    </Box>
    </Box>
    </>
  )
}

export default SingleMovie