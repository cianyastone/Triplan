import { useState } from "react";
import {
  ScrollView,
  Box,
  Flex,
  FormControl,
  Heading,
  useColorMode,
  VStack,
  Text,
  Input,
  Pressable,
  Divider,
  Center,
  Image,
} from "native-base";
import { useDispatch } from "react-redux";
import { gotoLogin, registerAsync } from "../redux/accountSlice";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const [loginRequest, setLoginRequest] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { colorMode } = useColorMode();
  const focusInputStyle = {
    borderColor: colorMode == "light" ? "muted.700" : "white",
  };
  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const blue = "#A8DEE0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";

  const onSignUp = () => {
    dispatch(registerAsync({ name, email, password }));
    setLoginRequest(!loginRequest);
  };

  const goToLogin = () => {
    dispatch(gotoLogin());
  };

  return (
    <Box _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <ScrollView>
        <Center mb={10} mt={100}>
          <Image
            alt={"logo"}
            size={125}
            source={require("../asset/logo.png")}
            borderRadius={15}
            borderWidth={1.5}
            _light={{ borderColor: black }}
            _dark={{ borderColor: white }}
          />
        </Center>
        <VStack alignItems="center" mb={20}>
          <FormControl
            mb={15}
            isRequired
            h={69}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              mr={230}
              h={25}
              w={55}
              zIndex={1}
              alignItems="center"
              _light={{ bg: white }}
              _dark={{ bg: darkBlack }}
            >
              <Text>Name</Text>
            </Box>
            <Box
              h={44}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
              _light={{ bg: blueGreen, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Box
              position="absolute"
              h={55}
              w={320}
              borderRadius="15"
              borderWidth="1.5"
              _light={{ bg: white, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Input
              position="absolute"
              w={310}
              _focus={focusInputStyle}
              variant="unstyled"
              autoCapitalize="none"
              onChangeText={(text) => setName(text)}
            />
          </FormControl>
          <FormControl
            mb={15}
            isRequired
            h={69}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              mr={230}
              h={25}
              w={55}
              zIndex={1}
              alignItems="center"
              _light={{ bg: white }}
              _dark={{ bg: darkBlack }}
            >
              <Text>Email</Text>
            </Box>
            <Box
              h={44}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
              _light={{ bg: blueGreen, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Box
              position="absolute"
              h={55}
              w={320}
              borderRadius="15"
              borderWidth="1.5"
              _light={{ bg: white, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Input
              position="absolute"
              w={310}
              _focus={focusInputStyle}
              variant="unstyled"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
            />
          </FormControl>
          <FormControl
            mb={15}
            isRequired
            h={69}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              mr={200}
              h={25}
              w={86}
              zIndex={1}
              alignItems="center"
              _light={{ bg: white }}
              _dark={{ bg: darkBlack }}
            >
              <Text>Password</Text>
            </Box>
            <Box
              h={44}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
              _light={{ bg: blueGreen, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Box
              position="absolute"
              h={55}
              w={320}
              borderRadius="15"
              borderWidth="1.5"
              _light={{ bg: white, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Input
              type="password"
              position="absolute"
              w={310}
              _focus={focusInputStyle}
              variant="unstyled"
              autoCapitalize="none"
              onChangeText={(text) => setPassword(text)}
            />
          </FormControl>
          <Pressable alignItems="center" onPress={onSignUp}>
            <Box
              mt={2}
              h={55}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
              _light={{ bg: blueGreen, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Box
              position="absolute"
              h={55}
              w={320}
              borderRadius="15"
              borderWidth="1.5"
              _light={{ borderColor: black }}
              _dark={{ borderColor: white }}
              bg={orange}
            />
            <Heading
              position="absolute"
              mt={4}
              _light={{ color: white }}
              _dark={{ color: black }}
              fontSize="md"
            >
              註冊
            </Heading>
          </Pressable>
          <Flex
            mt={21}
            mb={19}
            w="100%"
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Divider
              thickness="1.5"
              w="35%"
              _light={{ bg: black }}
              _dark={{ bg: white }}
            />
            <Text fontSize="sm" mx={2}>
              或
            </Text>
            <Divider
              thickness="1.5"
              w="35%"
              _light={{ bg: black }}
              _dark={{ bg: white }}
            />
          </Flex>
          <Pressable alignItems="center" onPress={goToLogin}>
            <Box
              mt={2}
              h={55}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
              _light={{ bg: blueGreen, borderColor: black }}
              _dark={{ bg: darkBlack, borderColor: white }}
            />
            <Box
              position="absolute"
              h={55}
              w={320}
              borderRadius="15"
              borderWidth="1.5"
              _light={{ borderColor: black }}
              _dark={{ borderColor: white }}
              bg={blue}
            />
            <Heading
              position="absolute"
              mt={4}
              _light={{ color: white }}
              _dark={{ color: black }}
              fontSize="md"
            >
              點此登入
            </Heading>
          </Pressable>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default RegisterScreen;
