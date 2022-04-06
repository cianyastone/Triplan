import React from "react";
import { ScrollView, Box } from 'native-base';
import SearchList from "../components/SearchList";

const Search = () => {
  return (
    <Box flex="1">
      <ScrollView bg="#c8c8c8">
        <SearchList />
      </ScrollView>
    </Box>
  );
};

export default Search;
