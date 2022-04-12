import React from "react";
import { Text, Box, Image, Pressable, Heading, Flex } from "native-base";
import moment from "moment";
import ActionButton from './ActionButton';

const UnfinishedTrip = ({ trip }) => {
    const black="#1D1D1D";
    const blue="#2AB3C0";
    const orange="#F9BC75";
    const white="#fff";
    const green="#7EBB94";
    const darkBlack="#262626";
    const darkWhite="#E4E4E4";
    return (
        <Box w={150} h={200} mr={4} alignItems="center">
            <Box mt={2} h={180} w={138} 
                borderRadius="25" borderWidth="1.5" 
                _light={{ bg: blue, borderColor: black }} _dark={{ bg: darkBlack, borderColor: darkWhite }}
            />
            <Flex position='absolute' w={150} h={180} p={2} justifyContent="space-between" alignItems="center"
                borderRadius={15} borderWidth="1.5"
                _light={{ bg: white, borderColor: black }} _dark={{ bg: darkBlack, borderColor: darkWhite }}
            >
                <Image alt={"trip"} w={140} h={100} borderRadius={10} source={{uri: trip.image}}/>
                <Flex direction="row" w="100%" justifyContent="space-between" p={2} alignItems="flex-end">
                    <Box>
                        <Text fontSize="md">{trip.title}</Text>
                        <Text fontSize="sm">{moment(trip.date).format("DD")}, {moment(trip.date).format("MMM")}, {moment(trip.date).format("YY")}</Text> 
                    </Box>
                    <ActionButton />
                </Flex>
            </Flex>
        </Box>
)};

export default UnfinishedTrip;
