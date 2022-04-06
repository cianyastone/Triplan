import React from "react";
import { Text, Box, Center, VStack, Button, Divider, Pressable } from "native-base";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/accountActions";

const Setting = () => {
    const dispatch = useDispatch();
    return (
    <Box>
        <VStack width="90%" alignSelf="center">
            <Center mt={4}>
                <Box bg="#fff" p={3} width="100%" borderRadius="10">
                    <Box mb={3}>
                        <Text fontSize="md">夜間模式</Text>
                    </Box>
                    <Divider/>
                    <Pressable>
                        <Box mt={3}>
                            <Text fontSize="md">關於Triplan</Text>
                        </Box> 
                    </Pressable>
                </Box>
                <Button mt={6} width={360} borderRadius="10"
                    onPress={() => dispatch(logout())}
                >
                    <Text fontSize="md">登出</Text>
                </Button>
            </Center>
        </VStack>
    </Box>  
)};

export default Setting;
