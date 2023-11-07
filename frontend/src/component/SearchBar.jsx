import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";


const SearchBar = ({handleSearch}) => {

  const [query, setQuery] = useState('thor')


  // const handleSearch = async() =>
  // {
  //   if(query !=='')
  //   {
  //     try{
  //       const data = await getData(query)
  //       console.log(data)

  //     }
  //     catch(err)
  //     {
  //       console.log(err)
  //     }
  //   }
  // }

  return (
    <Box position={'relative'} p={'1rem'} maxW={['100%','80%']} m="auto">
      <Flex w={'100%'} columnGap={"1rem"} alignItems={"center"}>
        <Box width={'100%'}>
          <Text display={"inline-block"} fontSize={"2xl"}>
            Movie App
          </Text>
        </Box>
        <Box width={'100%'}>
          <Flex columnGap={'1rem'}>
            <Input width={"80%"} type="text" placeholder="Search..." onChange={(e)=>setQuery(e.target.value)} />
            <Button onClick={()=>handleSearch(query)}>Search</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchBar;
