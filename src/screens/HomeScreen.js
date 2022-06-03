import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
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
import tripData from "../json/trip.json";
import moment from "moment";
import UnfinishedTripList from "../components/UnfinishedTripList";
import FinishedTripList from "../components/FinishedTripList";
import ActionButton from "../components/ActionButtonTop";
import SafeAreaView from "react-native-safe-area-view";
import { selectGeneral, readUserAsync } from "../redux/accountSlice";

const Home = ({ navigation }) => {
  const general = useSelector(selectGeneral);

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
  const unfinished = tripData.TripList.filter((x) => x.date > currentTime);
  const sort = unfinished.sort((a, b) => a.date.localeCompare(b.date));
  const recent = sort[0];

  useEffect(() => {
    dispatch(readUserAsync());
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorMode == "light" ? white : darkBlack,
      }}
    >
      <Box
        flex="1"
        alignSelf="center"
        _light={{ bg: white }}
        _dark={{ bg: darkBlack }}
        px={25}
      >
        <Flex
          direction="row"
          alignItems="center"
          py={2}
          justifyContent="space-between"
        >
          <Pressable
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Flex direction="row" alignItems="center">
              <Box size={50} borderRadius={25} backgroundColor={orange}>
                <Feather name="user" size={50} color={white} />
              </Box>
              <Image
                position="absolute"
                borderRadius={25}
                size="50"
                source={{ uri: general.imageUrl }}
              />
              <Text fontSize="xl" ml={2}>
                {general.name}
              </Text>
            </Flex>
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Setting");
            }}
          >
            <Feather
              name="settings"
              size={28}
              color={colorMode == "light" ? black : darkWhite}
            />
          </Pressable>
        </Flex>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text fontSize="sm" m={3}>
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
                alt={"recent"}
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
                    {recent.title}
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
          </Box>
          <Text fontSize="sm" m={3}>
            未完成的行程
          </Text>
          <UnfinishedTripList list={tripData.TripList} />
          <Text fontSize="sm" m={3}>
            已完成的行程
          </Text>
          <FinishedTripList list={tripData.TripList} />
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
};

export default Home;
