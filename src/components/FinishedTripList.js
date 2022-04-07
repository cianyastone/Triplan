import React from "react";
import { FlatList, Box, Text } from "native-base";
import UnfinishedTrip from "./UnfinishedTrip";

const FinishedTripList = ({ list }) => {
const renderItem = ({ item }) => <UnfinishedTrip trip={item}/>;
  return (
    <Box>
      <FlatList
        data={list}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}
export default FinishedTripList;

