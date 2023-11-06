import { Box, Flex, Grid, GridItem, Img, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const MovieList = () => {


  
    


  return (
    <>
    <Box  height='fit-content'  >
        <SimpleGrid columns={[1,2,3,4]}  padding={'1rem'} gap={'1rem'}>
            <Box p={2} display={'flex'} flexDirection={'column'} borderRadius={'lg'}  alignItems={'center'} height={'350px'} border={'1px solid lightgray'} >
                    <Img   height={'80%'} src="https://images.pexels.com/photos/15524939/pexels-photo-15524939/free-photo-of-rock-formation-in-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                    <Text>Title</Text>
                    <Text>Desc</Text>
            </Box>
           
           
          
        </SimpleGrid>

    </Box>
    </>
  )
}

export default MovieList