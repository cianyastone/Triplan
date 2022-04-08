import React from "react";
import { Box } from 'native-base';
import SearchList from "../components/SearchList";

const Search = () => {
  const white="#fff";
  const darkBlack="#262626";
  return (
    <Box flex="1" px={9} _light={{ bg: white }} _dark={{ bg: darkBlack }}>
      <SearchList />
    </Box>
  );
};

export default Search;
