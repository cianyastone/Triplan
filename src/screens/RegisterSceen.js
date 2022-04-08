import { ScrollView, Box, Flex, FormControl, Heading, useColorMode, VStack, Text, Input, Pressable, Divider, Center, Image } from 'native-base';
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/actions";

const RegisterSceen = ({ navigation, navigation: { goBack } }) => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const focusInputStyle = {
        borderColor: colorMode == "light" ? "muted.700" : "white",
    }

    return (
        <Box bg="#fff" flex={1}>
            <ScrollView>
                <Center mb={10} mt={100} >
                    <Image size={125} source={{uri: "https://i.pinimg.com/564x/cc/1e/63/cc1e6373b8513d776fa28e7f3e58fd14.jpg"}}/>
                </Center>
                <VStack alignItems="center" mb={20}>
                    <FormControl mb={15} isRequired h={69} justifyContent="center" alignItems="center">
                        <Box bg="#fff" mr={230} h={25} w={55} zIndex={1} alignItems="center">
                            <Text>Name</Text>
                        </Box>
                        <Box h={44} w={310} 
                            borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#2AB3C0"
                        />
                        <Box position='absolute' h={55} w={320} 
                            borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#fff"
                        />
                        <Input position='absolute' w={310} _focus={focusInputStyle} placeholder="請輸入姓名" variant="unstyled"/>
                    </FormControl>
                    <FormControl mb={15} isRequired h={69} justifyContent="center" alignItems="center">
                        <Box bg="#fff" mr={230} h={25} w={55} zIndex={1} alignItems="center">
                            <Text>Email</Text>
                        </Box>
                        <Box h={44} w={310} 
                            borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#2AB3C0"
                        />
                        <Box position='absolute' h={55} w={320} 
                            borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#fff"
                        />
                        <Input position='absolute' w={310} _focus={focusInputStyle} placeholder="請輸入電子信箱" variant="unstyled"/>
                    </FormControl>
                    <FormControl mb={15} isRequired h={69} justifyContent="center" alignItems="center">
                        <Box bg="#fff" mr={200} h={25} w={86} zIndex={1} alignItems="center">
                            <Text>Password</Text>
                        </Box>
                        <Box h={44} w={310} 
                            borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#2AB3C0"
                        />
                        <Box position='absolute' h={55} w={320} 
                            borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#fff"
                        />
                        <Input type="password" position='absolute' w={310} _focus={focusInputStyle} placeholder="請輸入密碼" variant="unstyled"/>
                    </FormControl>
                    <Pressable alignItems="center">
                        <Box mt={2} h={55} w={310} 
                            borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#2AB3C0"
                        />
                        <Box position='absolute' h={55} w={320} 
                            borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#F9BC75"
                        />
                        <Heading position='absolute' mt={4} color="#fff" fontSize="md">註冊</Heading>
                    </Pressable>
                    <Flex mt={21} mb={19} w="100%" direction="row" justifyContent="center" alignItems="center">
                        <Divider thickness="1.5" w="35%" bg="#1D1D1D"/> 
                        <Text fontSize="sm" mx={2}>或</Text>
                        <Divider thickness="1.5" w="35%" bg="#1D1D1D"/> 
                    </Flex>
                    <Pressable alignItems="center" onPress={() => goBack()}>
                        <Box mt={2} h={55} w={310} 
                            borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#2AB3C0"
                        />
                        <Box position='absolute' h={55} w={320} 
                            borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                            bg="#A8DEE0"
                        />
                        <Heading position='absolute' mt={4} color="#fff" fontSize="md">點此登入</Heading>
                    </Pressable>
                </VStack>
            </ScrollView>
        </Box>
    );
}

export default RegisterSceen;