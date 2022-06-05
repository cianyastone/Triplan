import React from "react";
import { FlatList, Box, Text } from "native-base";
import Trip from "./Trip";

const TripList = ({ list }) => {
  const renderItem = ({ item }) => <Trip trip={item}/>;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={list}
      renderItem={renderItem}
      horizontal={true}
      keyExtractor={item => item.title}
    />
  );
}
export default TripList;

