import { useState, useEffect } from "react";
import { FlatList, Box, Input, Text } from "native-base";
import { useSelector } from "react-redux";
import { selectOthersData } from "../redux/TripSlice";
import Trip from "./Trip";
import LottieView from "lottie-react-native";

const Search = () => {
  const renderItem = ({ item }) => <Trip trip={item} recommend={true}/>;
  const othersData = useSelector(selectOthersData);
  const [getData, GetData] = useState(false);
  const [searchData, SearchData] = useState();

  const black = "#1D1D1D";
  const blue = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";

  const searchItems = (text) => {
    let newData = othersData.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      if (text.length > 0) {
        return itemData.indexOf(textData) > -1;
      } else {
        return othersData;
      }
    });
    SearchData(newData);
  };

  useEffect(() => {
    if (Object.keys(othersData).length > 0 && !getData) {
      SearchData(othersData);
      GetData(true);
    }
  }, []);

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
          px={5}
          position="absolute"
          w={300}
          onChangeText={(text) => searchItems(text)}
          placeholder="在這裡搜尋"
          variant="unstyled"
          autoCapitalize="none"
        />
      </Box>
      <Text fontSize="sm" fontWeight="bold" mb={19}>
        推薦行程
      </Text>
      {getData ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={searchData}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
          mb={1}
          columnWrapperStyle={{ justifyContent: "space-between" }}
        />
      ) : (
        <Box h={500} justifyContent="center" alignItems="center">
          <Box w="100%" h={30}>
            <LottieView
              source={require("../LottieAnim/Loading.json")}
              loop
              autoPlay
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Search;
