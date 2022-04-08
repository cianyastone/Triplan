import React from 'react';
import { Box, Pressable, Actionsheet, useDisclose, Image } from 'native-base';
export default () => {
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <>
      <Pressable onPress={onOpen}>
        <Box borderRadius="full" borderWidth={2} borderColor="#fff"
          justifyContent="center" size={25} p={1}
          >
        <Image size={17} source={require('../asset/more_light.png')}/>
        </Box>
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
            <Actionsheet.Item>分享</Actionsheet.Item>
            <Actionsheet.Item color="red.500">刪除</Actionsheet.Item>
          </Actionsheet.Content>
          <Actionsheet.Footer>
            <Actionsheet.Item onPress={onClose}>取消</Actionsheet.Item>
          </Actionsheet.Footer>          
      </Actionsheet>
    </>
  );
}
