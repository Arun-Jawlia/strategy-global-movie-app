import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";


const SearchBar = ({handleSearch}) => {

  const [query, setQuery] = useState('thor')


  return (
    <Box  borderBottom={'1px solid lightgray'} position={'relative'} p={'1rem'} maxW={['100%','80%']} m="auto">
      <Flex w={'100%'} textAlign={'center'} columnGap={"1rem"} alignItems={"center"}>
        <Box width={'100%'}>
          <Text display={"inline-block"} fontWeight={'600'} fontSize={"3xl"}>
            Movie App
          </Text>
        </Box>
      </Flex>
        <Box width={'100%'}>
          <Flex alignItems={'center'} justifyContent={'center'} columnGap={'1rem'}>
            <Input width={"70%"} type="text" placeholder="Search..." onChange={(e)=>setQuery(e.target.value)} />
            <Button onClick={()=>handleSearch(query)}>Search</Button>
          </Flex>
        </Box>
    </Box>
  );
};

export default SearchBar;
