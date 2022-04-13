import React from "react";
import { FlatList, Box, Text } from "native-base";
import UnfinishedTrip from "./Trip";

const UnfinishedTripList = ({ list }) => {
  const renderItem = ({ item }) => <UnfinishedTrip trip={item}/>;
  const currentTime = new Date().toISOString();
  const unfinished = list.filter((x) => x.date > currentTime);
  const sort = unfinished.sort((a, b) => a.date.localeCompare(b.date));
  sort.shift();

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={sort}
      renderItem={renderItem}
      horizontal={true}
      keyExtractor={item => item.title}
    />
  );
}
export default UnfinishedTripList;

