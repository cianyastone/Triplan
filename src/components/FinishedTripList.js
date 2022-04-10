import React from "react";
import { FlatList, Box, Text } from "native-base";
import UnfinishedTrip from "./Trip";

const FinishedTripList = ({ list }) => {
  const renderItem = ({ item }) => <UnfinishedTrip trip={item}/>;
  const currentTime = new Date().toISOString();
  const filteredShifts = list.filter((x) => x.date < currentTime);
  return (
    <Box>
      <FlatList
        data={filteredShifts.sort((a, b) => a.date.localeCompare(b.date))}
        renderItem={renderItem}
        horizontal={true}
        keyExtractor={item => item.title}
      />
    </Box>
  );
}
export default FinishedTripList;

