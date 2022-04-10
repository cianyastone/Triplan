import React from 'react';
import { Pressable, Actionsheet, useDisclose, Image, Center, Text, useColorMode } from 'native-base';

export default () => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <Pressable onPress={onOpen}>
        <Image 
          size={17} 
          source={require('../asset/more_dark.png')}
        />
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content borderTopWidth={1.5} borderLeftWidth={1.5} borderRightWidth={1.5}>
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
