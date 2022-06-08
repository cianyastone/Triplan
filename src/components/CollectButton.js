import React, { useEffect, useState } from "react";
import {
  Pressable,
  Actionsheet,
  useDisclose,
  Center,
  Text,
  Box,
  useColorMode,
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  selectCollectData,
  collectTripAsync,
  deleteCollectAsync,
  readCollectAsync,
  selectStatus,
} from "../redux/TripSlice";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";

export default ({ name, user }) => {
  const dispatch = useDispatch();
  const data = useSelector(selectCollectData);
  const tripStatus = useSelector(selectStatus);
  const [collect, setCollect] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclose();

  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blue = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  const onCollect = () => {
    dispatch(collectTripAsync({ name, user }));
    dispatch(readCollectAsync());
    setCollect(true);
  };

  const deleteCollect = () => {
    dispatch(deleteCollectAsync({ name, user }));
    dispatch(readCollectAsync());
    setCollect(false);
  };

  useEffect(() => {
  });

  return (
    <>
      <Pressable onPress={onOpen}>
        {tripStatus == "loading" ? (
          <Box size={25} justifyContent="center" alignItems="center">
            <Box w="100%" h={21}>
              <LottieView
                source={require("../LottieAnim/Loading.json")}
                loop
                autoPlay
              />
            </Box>
          </Box>
        ) : (
          <>
            {collect ? (
              <MaterialIcons
                name={"bookmark"}
                size={25}
                color={colorMode == "light" ? black : darkWhite}
              />
            ) : (
              <MaterialIcons
                name={"bookmark-border"}
                size={25}
                color={colorMode == "light" ? black : darkWhite}
              />
            )}
          </>
        )}
      </Pressable>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content
          borderTopWidth={1.5}
          borderLeftWidth={1.5}
          borderRightWidth={1.5}
          _light={{ bg: white, borderColor: black }}
          _dark={{ bg: darkBlack, borderColor: darkWhite }}
        >
          <Center>
            {collect ? (
              <Actionsheet.Item onPress={deleteCollect}>
                取消收藏
              </Actionsheet.Item>
            ) : (
              <Actionsheet.Item onPress={onCollect}>收藏</Actionsheet.Item>
            )}
            <Actionsheet.Item>分享</Actionsheet.Item>
            <Actionsheet.Item onPress={onClose}>取消</Actionsheet.Item>
          </Center>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};
