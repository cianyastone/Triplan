import { Box, FormControl, useColorMode, VStack, Text, Input, Button, Divider, Center, Image } from 'native-base';
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/accountActions";

const Login = () => {
    const dispatch = useDispatch();
    const { colorMode } = useColorMode();
    const focusInputStyle = {
        borderColor: colorMode == "light" ? "muted.700" : "white",
    }

    return (
        <Box mt={100}>
            <Center mb={10}>
                <Image size={125} source={{uri: "https://i.pinimg.com/564x/cc/1e/63/cc1e6373b8513d776fa28e7f3e58fd14.jpg"}}/>
            </Center>
            <VStack width="70%" alignSelf="center">
                <FormControl mb={5} isRequired>
                    <Input _focus={focusInputStyle} placeholder="請輸入電子信箱" variant="rounded"/>
                </FormControl>
                <FormControl mb={5} isRequired>
                    <Input type="password" _focus={focusInputStyle} placeholder="請輸入密碼" variant="rounded"/>
                </FormControl>
                <Center>
                    <Button mb={130} width={129} borderRadius="100"
                        onPress={() => dispatch(login())}
                    >
                        <Text fontSize="md">登入</Text>
                    </Button>
                    <Divider/>
                    <Button mt={5} width={129} borderRadius="100">
                        <Text fontSize="md">建立新帳號</Text>
                    </Button>
                </Center>
            </VStack>
        </Box>
    );
}

export default Login;