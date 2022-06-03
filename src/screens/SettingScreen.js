import React from "react";
import {
  Text,
  Box,
  Heading,
  VStack,
  Pressable,
  Switch,
  useColorMode,
  Flex,
} from "native-base";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/accountSlice";

const Setting = () => {
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();
  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  return (
    <Box pt={5} _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <VStack alignItems="center">
        <Box alignItems="center">
          <Box
            h={55}
            w={310}
            borderRadius="20"
            borderWidth="1.5"
            borderColor={black}
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={320}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Flex
            position="absolute"
            w={270}
            h={50}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text fontSize="md">夜間模式</Text>
            <Switch
              name="light Mode"
              isChecked={colorMode === "dark"}
              onToggle={toggleColorMode}
              trackColor={{ true: { green } }}
              borderWidth="1.5"
              _light={{ borderColor: black }}
              _dark={{ borderColor: white }}
            />
          </Flex>
        </Box>
        <Pressable
          mt={4}
          alignItems="center"
          onPress={() => dispatch(signOut())}
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
          <Heading position="absolute" mt={15} color={white} fontSize="md">
            登出
          </Heading>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default Setting;
