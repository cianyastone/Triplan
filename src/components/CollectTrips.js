import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import { Box, useColorMode, Text, FlatList } from "native-base";
import {
  selectCollectData,
  readCollectAsync,
  selectOthersData,
} from "../redux/TripSlice";
import Trip from "./Trip";

const CollectTrips = () => {
  const renderItem = ({ item }) => <Trip trip={item} recommend={true}/>;
  const collectData = useSelector(selectCollectData);
  const othersData = useSelector(selectOthersData);
  const [dataList, setDataList] = useState([]);
  const [getData, GetData] = useState(false);

  const dispatch = useDispatch();

  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blue = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  useEffect(() => {
    dispatch(readCollectAsync());
    othersData.filter((x) => {
      collectData.filter((y) => {
        if (x.name == y.name) {
          dataList.push(x);
        }
      });
    });
    if (dataList.length > 0 && !getData) {
      GetData(true);
    } else if (dataList.length == 0) {
      GetData(false);
    }
  }, []);

  return (
    <Box>
      {getData ? (
        <Box mt={5}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={dataList}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
            mb={1}
            columnWrapperStyle={{ justifyContent: "space-between" }}
          />
        </Box>
      ) : (
        <Box h={500} justifyContent="center" alignItems="center">
          <Text fontSize="sm" m={3}>
            空空如也 ｡ﾟヽ(ﾟ´Д`)ﾉﾟ｡
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CollectTrips;
