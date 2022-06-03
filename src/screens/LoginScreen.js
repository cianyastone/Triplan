import { useState } from "react";
import {
  ScrollView,
  Box,
  FormControl,
  Heading,
  useColorMode,
  Flex,
  VStack,
  Text,
  Input,
  Divider,
  Center,
  Image,
  Pressable,
} from "native-base";
import Feather from "react-native-vector-icons/Feather";
import { useDispatch } from "react-redux";
import { gotoRegister, loginAsync } from "../redux/accountSlice"

const Login = () => {
  const dispatch = useDispatch();
  const [loginRequest, setLoginRequest] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
  const darkWhite = "#E4E4E4";

  const onSignIn = () => {
    dispatch(loginAsync({ email, password }))
    setLoginRequest(!loginRequest);
 }

 const goToRegister = () => {
    dispatch(gotoRegister())
 }

  return (
    <Box _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <ScrollView>
        <Center mt={100} mb={10}>
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
          <FormControl mb={19} isRequired h={55} alignItems="center">
            <Box
              h={55}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
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
              direction="row"
              position="absolute"
              w={300}
              h={50}
              alignItems="center"
            >
              <Feather
                name="mail"
                size={25}
                color={colorMode == "light" ? black : darkWhite}
              />
              <Input
                w={275}
                _focus={focusInputStyle}
                variant="unstyled"
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
                placeholder={"Email"}
              />
            </Flex>
          </FormControl>
          <FormControl mb={113} isRequired h={55} alignItems="center">
            <Box
              h={55}
              w={310}
              borderRadius="20"
              borderWidth="1.5"
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
              direction="row"
              position="absolute"
              w={300}
              h={50}
              alignItems="center"
            >
              <Feather
                name="lock"
                size={25}
                color={colorMode == "light" ? black : darkWhite}
              />
              <Input
                w={275}
                _focus={focusInputStyle}
                type="password"
                variant="unstyled"
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
                placeholder={"Password"}
              />
            </Flex>
          </FormControl>
          <Pressable alignItems="center" onPress={onSignIn}>
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
              登入
            </Heading>
          </Pressable>
          <Flex
            mt={23}
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
          <Pressable alignItems="center" onPress={goToRegister}>
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
              bg={blue}
            />
            <Heading
              position="absolute"
              mt={15}
              _light={{ color: white }}
              _dark={{ color: black }}
              fontSize="md"
            >
              點此註冊
            </Heading>
          </Pressable>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Login;
