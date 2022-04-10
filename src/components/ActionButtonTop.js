import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose, Center, Text, useColorMode } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';

export default () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclose();
  const black="#1D1D1D";
  const blue="#2AB3C0";
  const orange="#F9BC75";
  const white="#fff";
  const green="#7EBB94";
  const darkBlack="#262626";
  const darkWhite="#E4E4E4";
  return (
    <>
      <Pressable onPress={onOpen}>
        <Box borderRadius="full" borderWidth={2} borderColor={white}
          justifyContent="center" size={25} p={1}
          >
        <Feather name="more-vertical" size={14} color={white} />
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content borderTopWidth={1.5} borderLeftWidth={1.5} borderRightWidth={1.5}
          _light={{ bg: white, borderColor: black }} _dark={{ bg: darkBlack, borderColor: darkWhite }}
        >
          <Center>
          <Actionsheet.Item>分享</Actionsheet.Item>
          <Actionsheet.Item>
            <Text fontSize="md" color="#E4605D">
              刪除
            </Text>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={onClose}>取消</Actionsheet.Item>
          </Center>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}