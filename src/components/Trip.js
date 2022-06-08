import React from "react";
import { Text, Box, Image, Flex } from "native-base";
import moment from "moment";
import ActionButton from "./ActionButton";
import CollectButton from "./CollectButton";

const Trip = ({ trip, recommend }) => {
  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  return (
    <Box w={150} h={175} mr={4} alignItems="center" mb={21}>
      <Box
        h={175}
        w={150}
        borderRadius="25"
        borderWidth="1.5"
        _light={{ bg: blueGreen, borderColor: black }}
        _dark={{ bg: darkBlack, borderColor: darkWhite }}
      />
      <Flex
        position="absolute"
        w={150}
        h={170}
        p={2}
        justifyContent="space-between"
        alignItems="center"
        borderRadius={15}
        borderWidth="1.5"
        _light={{ bg: white, borderColor: black }}
        _dark={{ bg: darkBlack, borderColor: darkWhite }}
      >
        <Image
          alt="trip"
          w={140}
          h={100}
          borderRadius={10}
          source={{ uri: trip.image }}
        />
        <Flex
          direction="row"
          w="100%"
          justifyContent="space-between"
          p={2}
          alignItems="flex-end"
        >
          <Box>
            <Text fontSize="md">{trip.name}</Text>
            <Text fontSize="sm">
              {moment(trip.date).format("DD")},{" "}
              {moment(trip.date).format("MMM")},{" "}
              {moment(trip.date).format("YY")}
            </Text>
          </Box>
          {recommend ? (
            <CollectButton name={trip.name} user={trip.user} />
          ) : (
            <ActionButton name={trip.name} />
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Trip;
