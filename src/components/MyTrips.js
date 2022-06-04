import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ScrollView,
  Text,
  Heading,
  Box,
  Image,
  Flex,
  Pressable,
  useColorMode,
} from "native-base";
import moment from "moment";
import TripList from "./TripList";
import ActionButton from "./ActionButtonTop";
import { readTripAsync, selectData } from "../redux/TripSlice";

const MyTrips = () => {
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

  useEffect(() => {
    dispatch(readTripAsync());
  }, []);

  const currentTime = new Date().toISOString();
  // const unfinished = datas.filter((x) => x.date > currentTime);
  // const finished = datas.filter((x) => x.date < currentTime);
  // const sort = unfinished.sort((a, b) => a.date.localeCompare(b.date));
  // const recent = sort[0];

  return (
    <Box pb={85}>
      {/* <Text fontSize="sm" m={3}>
        即將進行的行程
      </Text>
      <Box h={218} alignItems="center" mb={30}>
        <Box
          h={218}
          w={325}
          borderRadius="25"
          borderWidth="1.5"
          _light={{ bg: orange, borderColor: black }}
          _dark={{ bg: darkBlack, borderColor: darkWhite }}
        />
        <Flex
          position="absolute"
          w="100%"
          h={210}
          justifyContent="center"
          borderRadius={20}
          borderWidth="1.5"
          _light={{ bg: white, borderColor: black }}
          _dark={{ bg: darkBlack, borderColor: darkWhite }}
        >
          <Image
            alt="recent"
            position="absolute"
            alignSelf="center"
            w="96%"
            h="93%"
            borderRadius={15}
            source={{ uri: recent.image }}
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
            <Box mt={90}>
              <Heading color={white} size="lg">
                {recent.name}
              </Heading>
              <Text color={white} fontSize="md">
                {moment(recent.date).format("DD")},{" "}
                {moment(recent.date).format("MMM")}
              </Text>
              {recent.days !== 1 ? (
                <Text color={white} fontSize="md">
                  {recent.days}天{recent.days - 1}夜
                </Text>
              ) : (
                <Text color={white} fontSize="md">
                  {recent.days}天
                </Text>
              )}
            </Box>
            <ActionButton />
          </Flex>
        </Flex>
      </Box> */}
      <Text fontSize="sm" m={3}>
        未完成的行程
      </Text>
      <TripList list={datas} />
      <Text fontSize="sm" m={3}>
        已完成的行程
      </Text>
      <TripList list={datas} />
    </Box>
  );
};

export default MyTrips;
