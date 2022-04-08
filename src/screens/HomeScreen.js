import React from "react";
import { ScrollView, Text, Heading, Box, Image, Flex, Pressable } from 'native-base';
import { ActionSheet } from 'react-native-cross-actionsheet';
import tripData from "../json/trip.json";
import UnfinishedTripList from "../components/UnfinishedTripList";
import FinishedTripList from "../components/FinishedTripList";
import moment from "moment";
import ActionButton from '../components/ActionButton_light';

const Home = ({ navigation }) => {
  const onPress = () =>
    ActionSheet.showActionSheetWithOptions(
    {
      options: ["取消", "分享", "刪除"],
      destructiveButtonIndex: 2,
      cancelButtonIndex: 0,
      userInterfaceStyle: 'dark',
    },
    buttonIndex => {
      if (buttonIndex === 0) {
      } else if (buttonIndex === 1) {
      } else if (buttonIndex === 2) {
      }
    }
  );

  const Setting = () =>{
    navigation.navigate('Setting');
    // navigation.setOptions({ tabBarStyle:{ display:'none' }});
  };
  return (
    <Box flex="1" alignSelf="center" bg="#fff" px={25}>
      <Flex direction="row" alignItems="center" py={2} justifyContent="space-between">
        <Flex direction="row" alignItems="center">
          <Image borderRadius={100} size="50" source={require('../asset/userPhoto.png')}/>
          <Text fontSize="xl" ml={2}>Name</Text>
        </Flex>
        <Pressable onPress={Setting}>
          <Image size={30} source={require('../asset/setting_dark.png')}/>
        </Pressable>
      </Flex>

      <ScrollView>
        <Text fontSize="sm" m={3}>即將進行的行程</Text>
        <Box h={220} alignItems="center" mb={30}>
          <Box mt={2} h={210} w={320}
            borderRadius="25" borderWidth="1.5" borderColor="#1D1D1D"
            bg="#F9BC75"
          />
          <Flex position="absolute" bg="#fff" w="100%" h={210} justifyContent="center"
            borderRadius={20} borderWidth="1.5" borderColor="#1D1D1D"
          >
            <Image position="absolute" alignSelf="center" w="96%" h="93%" borderRadius={15} source={{uri: tripData.TripList[1].image}}/>
            <Box position="absolute" alignSelf="center" w="96%" h="93%" borderRadius={15} bg="rgba(29, 29, 29, 0.4)"/>
            <Flex h="100%" w="100%" p={5}
              direction="row" justifyContent="space-between"
            >
              <Box mt={90}>
                <Heading color="#fff" size="lg">{tripData.TripList[1].title}</Heading>
                <Text color="#fff" fontSize="md">{moment(tripData.TripList[1].date).format("DD")}, {moment(tripData.TripList[1].date).format("MMM")}</Text> 
                <Text color="#fff" fontSize="md">{tripData.TripList[1].days}天{tripData.TripList[1].days-1}夜</Text>
              </Box>
              <ActionButton/>
            </Flex>
          </Flex>
        </Box>
        <Text fontSize="sm" m={3}>未完成的行程</Text>
        <UnfinishedTripList list={tripData.TripList}/>
        <Text fontSize="sm" m={3}>已完成的行程</Text>
        <FinishedTripList list={tripData.TripList}/>
      </ScrollView>
    </Box>
  );
};

export default Home;
