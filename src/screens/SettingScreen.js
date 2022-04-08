import React from "react";
import { Text, Box, Heading, VStack, Button, Image, Pressable, Switch, useColorMode, Flex } from "native-base";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";

const Setting = () => {
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode();
   
    return (
    <Box pt={5} bg="#fff" flex={1}>
        <VStack alignItems="center">
            <Box alignItems="center" justifyContent="center">
                <Box mt={4} h={55} w={310} 
                    borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                    bg="#2AB3C0"
                />
                <Box position='absolute' h={55} w={320} 
                    borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                    bg="#fff"
                />
                <Flex position='absolute' w={270} direction="row" alignItems="center" justifyContent="space-between">
                    <Text fontSize="md">夜間模式</Text>
                    <Switch
                        name="light Mode"
                        isChecked={colorMode === "light"}
                        onToggle={toggleColorMode}
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                    />
                </Flex>
            </Box>
            <Pressable mt={4} alignItems="center" onPress={() => dispatch(logout())}>
                <Box mt={2} h={55} w={310} 
                    borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                    bg="#2AB3C0"
                />
                <Box position='absolute' h={55} w={320} 
                    borderRadius="15" borderWidth="1.5" borderColor="#1D1D1D"
                    bg="#F9BC75"
                />
                <Heading position='absolute' mt={4} color="#fff" fontSize="md">登出</Heading>
            </Pressable>
        </VStack>
    </Box>  
)};

export default Setting;
