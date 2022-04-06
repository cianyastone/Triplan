import React from "react";
import { useDispatch } from "react-redux";
import { ScrollView, Text, Heading, Box, Image, Flex, Pressable } from 'native-base';
import tripData from "../json/trip.json";
import TripList from "../components/TripList";

const Home = ({ navigation }) => {
  return (
    <Box flex="1">
      <Flex direction="row" alignItems="center" p="2" justifyContent="space-between" bg="#c8c8c8">
        <Flex direction="row" alignItems="center">
          <Image borderRadius={100} size="xs" source={require('../asset/setting.png')}/>
          <Box pl="3">
            <Heading size="md">Name</Heading>
            <Text>規劃了{tripData.TripList.length}個行程</Text>
          </Box>
        </Flex>
        <Pressable onPress={() => navigation.navigate('Setting')}>
          <Image source={require('../asset/setting.png')}/>
        </Pressable>
      </Flex>
      <ScrollView bg="#c8c8c8">
        <TripList list={tripData.TripList}/>
      </ScrollView>
    </Box>
  );
};

export default Home;
