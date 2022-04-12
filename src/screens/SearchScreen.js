import React from "react";
import { Box, useColorMode } from 'native-base';
import SearchList from "../components/SearchList";
import SafeAreaView from 'react-native-safe-area-view';

const Search = () => {
  const { colorMode } = useColorMode();
  const white="#fff";
  const darkBlack="#262626";
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: colorMode == 'light' ? white : darkBlack, }}>
    <Box flex="1" px={9} _light={{ bg: white }} _dark={{ bg: darkBlack }}>
      <SearchList />
    </Box>
    </SafeAreaView>
  );
};

export default Search;
