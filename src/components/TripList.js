import React from "react";
import { FlatList, View, Text } from "native-base";
import Trip from "./Trip";

const TripList = ({ list }) => {
const renderItem = ({ item }) => <Trip trip={item}/>;
  return (
    <View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />
    </View>
  );
}
export default TripList;

