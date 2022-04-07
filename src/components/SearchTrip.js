import React from "react";
import { Text, Box, Image, Pressable, Heading, Flex} from "native-base";
import { ActionSheet } from 'react-native-cross-actionsheet'

const SearchTrip = ({ trip }) => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

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
          // cancel action
        } else if (buttonIndex === 1) {
          
        } else if (buttonIndex === 2) {
          
        }
      }
    );
    return (
    <Flex bg="#fff" p="5" mb="1" justifyContent="space-between" direction="row">
        <Box justifyContent="space-between">
            <Heading size="md">{trip.title}</Heading>
            <Text fontSize="md">{trip.days}天{trip.days-1}夜</Text>
            <Text fontSize="md">從{trip.year}年, {trip.month}月, {trip.day}日開始</Text>
        </Box>
        <Box alignItems="flex-end">
            <Pressable onPress={onPress}>
                <Image source={require('../asset/option.png')}/>
            </Pressable>
            <Image w={135} h={71} source={{uri: trip.image}}/>
        </Box>
    </Flex>
)};

export default SearchTrip;
