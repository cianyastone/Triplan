import React from "react";
import { Text, Box, Center, VStack, Button, Divider, Pressable, Switch, useColorMode } from "native-base";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";

const Setting = () => {
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <Box>
        <VStack width="90%" alignSelf="center">
            <Center mt={4}>
                <Box bg="#fff" p={3} width="100%" borderRadius="10">
                    <Box mb={3}>
                        <Text fontSize="md">夜間模式</Text>
                        <Switch
                            name="light Mode"
                            isChecked={colorMode === "light"}
                            onToggle={toggleColorMode}
                            accessibilityLabel="display-mode"
                            accessibilityHint="light or dark mode"
                        />
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
