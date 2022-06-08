import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Heading,
  Box,
  Image,
  Flex,
  useColorMode,
  FlatList,
  ScrollView,
} from "native-base";
import moment from "moment";
import LottieView from "lottie-react-native";
import ActionButton from "./ActionButton";
import Trip from "./Trip";
import { readTripAsync, selectData } from "../redux/TripSlice";

const MyTrips = () => {
  const renderItem = ({ item }) => <Trip trip={item} />;
  const datas = useSelector(selectData);
  const dispatch = useDispatch();

  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blue = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  const currentTime = new Date().toISOString();
  const [unfinished, setUnfinished] = useState([]);
  const [finished, setFinished] = useState([]);
  const [getData, GetData] = useState(false);

  useEffect(() => {
    dispatch(readTripAsync());
    if (Object.keys(datas).length > 0) {
      setUnfinished(
        datas
          .filter((x) => x.date > currentTime)
          .sort((a, b) => a.date.localeCompare(b.date))
      );
      setFinished(
        datas
          .filter((x) => x.date < currentTime)
          .sort((a, b) => a.date.localeCompare(b.date))
      );
      GetData(true);
    }
  }, []);

  return (
    <Box>
      {getData ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <Box pb={200}>
            {unfinished.length > 0 ? (
              <Box>
                <Text fontSize="sm" m={3}>
                  即將進行的行程
                </Text>
                <Box h={218} alignItems="center" mb={30}>
                  <Box
                    h={245}
                    w={340}
                    borderRadius={30}
                    borderWidth={1.5}
                    _light={{ bg: orange, borderColor: black }}
                    _dark={{ bg: darkBlack, borderColor: darkWhite }}
                  />
                  <Flex
                    position="absolute"
                    w="100%"
                    h={240}
                    justifyContent="center"
                    borderRadius={20}
                    borderWidth={1.5}
                    _light={{ bg: white, borderColor: black }}
                    _dark={{ bg: darkBlack, borderColor: darkWhite }}
                  >
                    <Image
                      alt="sort[0]"
                      position="absolute"
                      alignSelf="center"
                      w="96%"
                      h="93%"
                      borderRadius={15}
                      source={{ uri: unfinished[0].image }}
                    />
                    <Box
                      position="absolute"
                      alignSelf="center"
                      w="96%"
                      h="93%"
                      borderRadius={15}
                      bg="rgba(29, 29, 29, 0.4)"
                    />
                    <Flex
                      h="100%"
                      w="100%"
                      p={5}
                      direction="row"
                      justifyContent="space-between"
                    >
                      <Box mt={110}>
                        <Heading color={white} size="lg">
                          {unfinished[0].name}
                        </Heading>
                        <Text color={white} fontSize="md">
                          {moment(unfinished[0].date).format("DD")},{" "}
                          {moment(unfinished[0].date).format("MMM")}
                        </Text>
                        {unfinished[0].days !== 1 ? (
                          <Text color={white} fontSize="md">
                            {unfinished[0].days}天{unfinished[0].days - 1}夜
                          </Text>
                        ) : (
                          <Text color={white} fontSize="md">
                            {unfinished[0].days}天
                          </Text>
                        )}
                      </Box>
                      <ActionButton name={unfinished[0].name} top={true} />
                    </Flex>
                  </Flex>
                </Box>
                <Text fontSize="sm" m={3}>
                  未完成的行程
                </Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={unfinished}
                  renderItem={renderItem}
                  horizontal={true}
                  keyExtractor={(item) => item.title}
                />
              </Box>
            ) : (
              <Box></Box>
            )}
            {finished.length > 0 ? (
              <Box>
                <Text fontSize="sm" m={3}>
                  已完成的行程
                </Text>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  data={finished}
                  renderItem={renderItem}
                  horizontal={true}
                  keyExtractor={(item) => item.title}
                />
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        </ScrollView>
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

export default MyTrips;
