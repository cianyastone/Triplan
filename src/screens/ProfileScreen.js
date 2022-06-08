import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  Box,
  Heading,
  VStack,
  Image,
  Pressable,
  useColorMode,
  Flex,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";
import { selectGeneral } from "../redux/accountSlice";
import { selectData } from "../redux/TripSlice";

const ProfileScreen = ({ navigation }) => {
  const general = useSelector(selectGeneral);
  const datas = useSelector(selectData);

  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const blue = "#A8DEE0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  const currentTime = new Date().toISOString();
  const [finished, setFinished] = useState([]);

  useEffect(() => {
    if (Object.keys(datas).length > 0) {
      setFinished(
        datas
          .filter((x) => x.date < currentTime)
          .sort((a, b) => a.date.localeCompare(b.date))
      );
    }
  }, []);

  return (
    <Box pt={5} _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <VStack alignItems="center">
        <Box
          alignItems="center"
          justifyContent="center"
          w={102}
          h={102}
          backgroundColor={white}
          borderRadius={21}
          shadow="3"
        >
          <Box
            w={94}
            h={94}
            position="absolute"
            borderRadius={19}
            backgroundColor={orange}
            alignItems="center"
            justifyContent="center"
          >
            <Feather name="user" size={94} color={white} />
          </Box>
          <Image
            position="absolute"
            source={{ uri: general.imageUrl }}
            borderRadius={19}
            style={{ width: 94, height: 94 }}
            alt=" "
          />
        </Box>
        <Text fontSize="xl" fontWeight="bold" mt={15} mb={15}>
          {general.name}
        </Text>
        <Box h={219} alignItems="center" mb={30}>
          <Box
            h={219}
            w={260}
            borderRadius="25"
            borderWidth="1.5"
            _light={{ bg: orange, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: darkWhite }}
          />
          <Box
            position="absolute"
            h={213}
            w={265}
            alignItems="center"
            justifyContent="space-between"
            borderRadius={20}
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: darkWhite }}
            py={21}
          >
            <Box>
              <Flex w={190} direction="row" mb={11}>
                <MaterialIcons
                  name="place"
                  size={25}
                  color={colorMode == "light" ? black : darkWhite}
                />
                <Text ml={11}>{general.country}</Text>
              </Flex>
              <Flex w={190} direction="row">
                <MaterialIcons
                  name="map"
                  size={25}
                  color={colorMode == "light" ? black : darkWhite}
                />
                <Text ml={11}>已完成 {finished.length} 個旅行</Text>
              </Flex>
            </Box>
            <Flex direction="row">
              {general.style.map((data) => {
                return (
                  <Box mr={2} backgroundColor={blue} borderRadius={10} p={1}>
                    <Text color={white} fontWeight="bold">
                      {" "}
                      ＃{data}{" "}
                    </Text>
                  </Box>
                );
              })}
            </Flex>
          </Box>
        </Box>
        <Pressable
          alignItems="center"
          onPress={() => {
            navigation.navigate("ProfileSetting");
          }}
        >
          <Box
            h={55}
            w={238}
            borderRadius="20"
            borderWidth="1.5"
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={245}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ borderColor: black }}
            _dark={{ borderColor: white }}
            bg={orange}
          />
          <Heading
            position="absolute"
            mt={15}
            _light={{ color: white }}
            _dark={{ color: black }}
            fontSize="md"
          >
            編輯
          </Heading>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default ProfileScreen;
