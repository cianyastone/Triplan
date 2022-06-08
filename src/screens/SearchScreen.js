import React, { useEffect } from "react";
import { Box, useColorMode } from 'native-base';
import Search from "../components/Search";
import SafeAreaView from 'react-native-safe-area-view';
import { readCollectAsync } from "../redux/TripSlice";
import { useDispatch } from "react-redux";

const SearchScreen = () => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const white="#fff";
  const darkBlack = "#262626";
  
  useEffect(() => {
    dispatch(readCollectAsync());
  })
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: colorMode == 'light' ? white : darkBlack, }}>
    <Box flex="1" px={9} _light={{ bg: white }} _dark={{ bg: darkBlack }}>
      <Search />
    </Box>
    </SafeAreaView>
  );
};

export default SearchScreen;
