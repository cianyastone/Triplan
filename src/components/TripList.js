import React from "react";
import { FlatList, Box, Text } from "native-base";
import Trip from "./Trip";

const TripList = ({ list }) => {
  const renderItem = ({ item }) => <Trip trip={item}/>;
  // const currentTime = new Date().toISOString();
  // const unfinished = list.filter((x) => x.date > currentTime);
  // const sort = unfinished.sort((a, b) => a.date.localeCompare(b.date));
  // sort.shift();

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

