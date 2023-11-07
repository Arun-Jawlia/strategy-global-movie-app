import {
  Box,
  Flex,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieList = ({ data }) => {
  console.log(data);
  const navigate = useNavigate()

  const handleNavigate =(id) =>
  {
    navigate(`/singlemovie/${id}`)
  }


  return (
    <>
      <Box padding={'2rem'} height="fit-content" width={'100%'}>
        <SimpleGrid columns={[1, 2, 3, 4]} gap={"1rem"}>
          { data.length>0 ? ( data?.map((item) => {
            return (
              <Box
              cursor='pointer'
              onClick={()=>handleNavigate(item.imdbID)}
                key={item.imdbID}
                p={2}
                display={"flex"}
                flexDirection={"column"}
                borderRadius={"lg"}
                alignItems={"center"}
                height={"350px"}
                border={"1px solid lightgray"}
              >
                <Img height={"80%"} src={item.Poster} alt="" />
                <Text fontSize={'lg'} fontWeight={'500'}>{item.Title}</Text>
                <Text>Type: {item.Type}</Text>
                <Text>Year: {item.Year}</Text>
              </Box>
            );
          })) : <Box  textAlign={'center'} height='60vh' width={'100vw'}>
            <Text mt={'3rem'} whiteSpace={'nowrap'}  fontSize={'3xl'}>Search any movie in the search bar</Text>
            </Box>}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default MovieList;
