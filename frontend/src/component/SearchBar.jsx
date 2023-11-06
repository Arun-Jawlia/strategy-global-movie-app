import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
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
            <Input width={"80%"} type="text" placeholder="Search..." />
            <Button>Search</Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default SearchBar;
