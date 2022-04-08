import React from "react";
import { Text, Box, Image, Pressable, Heading, Flex} from "native-base";
import { ActionSheet } from 'react-native-cross-actionsheet';
import moment from "moment";
import ActionButton from './ActionButton_dark';

const UnfinishedTrip = ({ trip }) => {
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
    return (
        <Box w={150} h={200} mr={4} alignItems="center">
            <Box mt={2} h={180} w={138} 
                borderRadius="25" borderWidth="1.5" borderColor="#1D1D1D"
                bg="#2AB3C0"
            />
            <Flex position='absolute' w={150} h={180} bg="#fff" p={2} justifyContent="space-between" alignItems="center"
                borderRadius={15} borderWidth="1.5" borderColor="#1D1D1D"
            >
                <Image mt={1} w={140} h={100} borderRadius={10} source={{uri: trip.image}}/>
                <Flex direction="row" w="100%" justifyContent="space-between" p={2} alignItems="flex-end">
                    <Box>
                        <Text fontSize="md">{trip.title}</Text>
                        <Text fontSize="sm">{moment(trip.date).format("DD")}, {moment(trip.date).format("MMM")}</Text> 
                    </Box>
                    <ActionButton />
                </Flex>
            </Flex>
        </Box>
)};

export default UnfinishedTrip;
