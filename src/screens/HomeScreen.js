import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";
import SegmentedControlTab from "react-native-segmented-control-tab";
import MyTrips from "../components/MyTrips";
import CollectTrips from "../components/CollectTrips";
import TestUpload from "../components/TestUpload";
import { readOthersTripAsync } from "../redux/TripSlice";
import {
  ScrollView,
  Text,
  Box,
  Image,
  Flex,
  Pressable,
  useColorMode,
} from "native-base";
import SafeAreaView from "react-native-safe-area-view";
import { selectGeneral, readUserAsync } from "../redux/accountSlice";

const Home = ({ navigation }) => {
  const general = useSelector(selectGeneral);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    dispatch(readUserAsync());
    dispatch(readOthersTripAsync());
  }, []);

  const SegmentedContent = () => {
    if (selectedIndex == 0) {
      return <MyTrips />;
    } else {
      return <CollectTrips />;
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorMode == "light" ? white : darkBlack,
      }}
    >
      <Box w="100%" alignSelf="center" px={25}>
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
              <Box
                size={50}
                alignItems="center"
                borderRadius={25}
                borderWidth={3}
                borderColor={white}
                backgroundColor={orange}
                shadow="3"
              >
                <Feather name="user" size={44} color={white} />
                <Image
                  alt=" "
                  position="absolute"
                  borderRadius={25}
                  size="44"
                  source={{ uri: general.imageUrl }}
                />
              </Box>

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
        <Box alignItems="center">
          <Box
            w={150}
            h={34}
            backgroundColor={blue}
            borderRadius={13}
            borderWidth={1.5}
            borderColor={colorMode == "light" ? black : darkWhite}
          />
          <Box position="absolute">
            <SegmentedControlTab
              values={["我的行程", "收藏行程"]}
              selectedIndex={selectedIndex}
              onTabPress={(index) => setSelectedIndex(index)}
              tabsContainerStyle={{ width: 150 }}
              tabStyle={{
                borderWidth: 1.5,
                borderColor: colorMode == "light" ? black : darkWhite,
                backgroundColor: colorMode == "light" ? white : darkBlack,
              }}
              tabTextStyle={{
                color: colorMode == "light" ? black : darkWhite,
                fontWeight: "bold",
              }}
              activeTabStyle={{ backgroundColor: green }}
            />
          </Box>
        </Box>
        <SegmentedContent />
      </Box>
    </SafeAreaView>
  );
};

export default Home;
