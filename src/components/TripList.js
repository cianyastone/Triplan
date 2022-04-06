import React from "react";
import { FlatList, Box, Text } from "native-base";
import Trip from "./Trip";

const TripList = ({ list }) => {
const renderItem = ({ item }) => <Trip trip={item}/>;
  return (
    <Box>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}
export default TripList;

