import React from "react";
import { Text, Box, Heading, VStack, Button, Image, Pressable, Switch, useColorMode, Flex } from "native-base";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/actions";

const Setting = () => {
    const dispatch = useDispatch();
    const { colorMode, toggleColorMode } = useColorMode();
    const black="#1D1D1D";
    const blue="#2AB3C0";
    const orange="#F9BC75";
    const white="#fff";
    const green="#7EBB94";
    const darkBlack="#262626";
   
    return (
    <Box pt={5} _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
        <VStack alignItems="center">
            <Box alignItems="center" justifyContent="center">
                <Box mt={4} h={55} w={310} 
                    borderRadius="20" borderWidth="1.5" borderColor={black}
                    _light={{ bg: blue, borderColor: black }} _dark={{ bg: darkBlack, borderColor: white }}
                />
                <Box position='absolute' h={55} w={320} 
                    borderRadius="15" borderWidth="1.5" 
                    _light={{ bg: white, borderColor: black }} _dark={{ bg: darkBlack, borderColor: white }}
                />
                <Flex position='absolute' w={270} direction="row" alignItems="center" justifyContent="space-between">
                    <Text fontSize="md">夜間模式</Text>
                    <Switch
                        name="light Mode"
                        isChecked={colorMode === "dark"}
                        onToggle={toggleColorMode}
                        trackColor={{ true: {green} }}
                        borderWidth="1.5"
                        _light={{ borderColor: black }} _dark={{ borderColor: white }}
                    />
                </Flex>
            </Box>
            <Pressable mt={4} alignItems="center" onPress={() => dispatch(logout())}>
                <Box mt={2} h={55} w={310} 
                    borderRadius="20" borderWidth="1.5" borderColor={black}
                    _light={{ bg: blue, borderColor: black }} _dark={{ bg: darkBlack, borderColor: white }}
                />
                <Box position='absolute' h={55} w={320} 
                    borderRadius="15" borderWidth="1.5" borderColor={black}
                    _light={{ bg: orange, borderColor: black }} _dark={{ bg: darkBlack, borderColor: white }}
                />
                <Heading position='absolute' mt={4} color={white} fontSize="md">登出</Heading>
            </Pressable>
        </VStack>
    </Box>  
)};

export default Setting;
