import { Box, Grid, GridItem, Img, Text } from '@chakra-ui/react'
import React from 'react'

const MovieList = () => {
  return (
    <>
    <Box  height={'100%'} border={'1px solid black'} >
        <Grid gridTemplateColumns='repeat(4,1fr)' padding={'1rem'} gap={'1rem'}>
            <Box alignItems={'center'} height={'400px'} border={'1px solid black'} >
                    <Img   height={'80%'} src="https://images.pexels.com/photos/15524939/pexels-photo-15524939/free-photo-of-rock-formation-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <Text>Name</Text>
                    <Text>Desc</Text>
                    <Text>Title</Text>
            </Box>
          
        </Grid>

    </Box>
    </>
  )
}

export default MovieList