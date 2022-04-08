import React from "react";
import { ScrollView, Box } from 'native-base';
import SearchList from "../components/SearchList";

const Search = () => {
  return (
    <Box flex="1" px={9} >
      <SearchList />
    </Box>
  );
};

export default Search;
