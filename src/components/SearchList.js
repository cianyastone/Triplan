import React, { Component } from "react";
import { FlatList, Box, Input, ScrollView } from "native-base";
import Trip from "./Trip";
import tripData from "../json/trip.json";

class SearchFunction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      value: "",
    };

    this.tripData = tripData.TripList;
    this.state.data = this.tripData;
  }

  renderSeparator = () => {
    return (
      <Box
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  searchItems = (text) => {
    let newData = this.tripData.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.indexOf(textData) > -1;
      } else {
        return this.tripData;
      }
    });
    this.setState({
      data: newData,
      value: text,
    });
  };

  render() {
    const renderItem = ({ item }) => <Trip trip={item} />;
    const black = "#1D1D1D";
    const blue = "#2AB3C0";
    const orange = "#F9BC75";
    const white = "#fff";
    const green = "#7EBB94";
    const darkBlack = "#262626";
    return (
      <Box flex={1}>
        <Box my={5} alignItems="center">
          <Box
            h={50}
            w={300}
            borderRadius="20"
            borderWidth="1.5"
            alignSelf="center"
            _light={{ bg: orange, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={45}
            w={310}
            borderRadius="30"
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Input
            mt={2}
            ml={3}
            position="absolute"
            w={300}
            onChangeText={(text) => this.searchItems(text)}
            placeholder="在這裡搜尋"
            variant="unstyled"
          />
        </Box>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={this.state.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
          mb={1}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      </Box>
    );
  }
}

export default SearchFunction;
