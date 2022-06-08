import React, { useState, useEffect }  from "react";
import { Box, useColorMode, Flex, Pressable, Text, Image, Heading, Input } from "native-base";
import { TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import SafeAreaView from "react-native-safe-area-view";
import DraggableFlatList from 'react-native-draggable-flatlist';
import { useDispatch, useSelector } from "react-redux";
import moment, { now } from "moment"
import {
  selectData,
  uploadTripAsync,
  readTripAsync
} from "../redux/TripSlice";

const black="#1D1D1D";
const blueGreen="#2AB3C0";
const blue = "#A8DEE0";
const orange="#F9BC75";
const white="#fff";
const green="#7EBB94";
const darkBlack="#262626";
const darkWhite="#E4E4E4";
const lightYellow="#F7E2BC";
const lightBlue ="#E7FEFF";

const Goal_data = [
  {
    key: "1",
    label: "Group",
    backgroundColor: "#black",
  }
]
  

const TripPlanScreenDay3 = ({  navigation: { goBack }, navigation, route }) => {
  const { colorMode } = useColorMode();
  const { name, days, date, image, imageUrl } = route.params;
  const dispatch = useDispatch();
  const general = useSelector(selectData);
  const [data, setData] = useState(Goal_data);
  const [number, setNumber] = useState(1);
  //const name = props.name;
  const onUpdate = () => {
    dispatch(uploadTripAsync({ name, days, date, image }));;
  };


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: "first",
    title: '第一天'
  }, {
    key: "second",
    title: '第二天' 
  }, {
    key: "third",
    title: '第三天'
  }, ]);

  const plusdata = (data, number) => {
    let d = data;
    const newRecord = {
      key: `${number+1}`,
      label: "Group",
    };
    setData( d => [...d, newRecord] );
    setNumber(number+1);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colorMode == "light" ? white : darkBlack,
      }}
    >
      <Box flex="1" _light={{ bg: white }} _dark={{ bg: darkBlack }}>
        <Flex
          direction="column"
          alignItems="center"
          py={2}
          justifyContent="center"
        >
          <Pressable
            ml={6} 
            onPress={() => goBack()}
            alignSelf="flex-start">
              <Box
                size={38}
                bg="#F9BC75"
                justifyContent="center"
                alignItems="center"
                borderRadius={15}
                borderWidth={2}
                _light={{ borderColor: darkBlack }}
                _dark={{ borderColor: white }}
              >
                <Image
                  alt={"back"}
                  size={28}
                  source={require("../asset/back.png")}
                />
              </Box>
          </Pressable>
          <Text
            position="absolute"
            justifyContent="center"
            alignContent="center"
            fontSize="md"
            fontWeight="bold">
            {(name)}
          </Text>
        </Flex>
        <Flex 
          direction="column"
          justifyContent='center'>
          <Box
            h={70}
            w={310}
            mt={2}
            mb={5}
            direction='column'
            alignSelf='center'
            alignItems='center'
            borderBottomColor={'#A1A1A1'}
            borderBottomWidth={1}
            >
          <ScrollView 
            horizontal= {true}>
              <Pressable
                onPress={() => {
                  navigation.navigate("TripPlanScreenDay1",{
                    name: name,
                    days: days,
                    date: date,
                    image: image,
                    imageUrl: imageUrl,
                });
                }}>
              {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box 
                w={100}
                h={70} 
                bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : white} 
                direction="column"
                justifyContent="center"
                alignItems="center">
                  <Text 
                    fontSize={14}
                    fontWeight='bold'
                    mb={2}
                    color={black}>
                    第一天
                  </Text>
                  <Text 
                    fontSize={12}
                    color={black}
                  >{moment(date).format('M 月 DD 日')}</Text>
              </Box>
              }}
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate("TripPlanScreenDay2",{
                    name: name,
                    days: days,
                    date: date,
                    image: image,
                    imageUrl: imageUrl,
                });
                }}>
              {({
                isHovered,
                isFocused,
                isPressed
              }) => {
                return <Box 
                w={100}
                h={70} 
                bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : white} 
                direction="column"
                justifyContent="center"
                alignItems="center">
                  <Text 
                    fontSize={14}
                    fontWeight='bold'
                    mb={2}
                    color={black}>
                    第二天
                  </Text>
                  <Text 
                    fontSize={12}
                    color={black}
                  >{moment(date).add(1, 'days').format('M 月 DD 日')}</Text>
              </Box>
              }}
              </Pressable>
              <Box 
                w={100}
                h={20} 
                direction="column"
                justifyContent="center"
                alignItems="center">
                  <Text 
                    fontSize={14}
                    fontWeight='bold'
                    mb={2}
                    color={orange}>
                    第三天
                  </Text>
                  <Text 
                    fontSize={12}
                    color={orange}
                  >{moment(date).add(2, 'days').format(' M 月 DD 日')}</Text>
                  <Box
                    h={1}
                    w={20}
                    mt={2}
                    borderRadius={5}
                    backgroundColor={orange} />
              </Box>
        </ScrollView>
          </Box>
        </Flex>
        <Box 
        flex="1" 
        alignSelf="center" 
        _light={{ bg: white }} 
        _dark={{ bg: darkBlack }} 
        px={25}
        >
        <Box h={210} alignItems="center" mb={5}>
          <Box 
            mt={1.5} 
            h={200} 
            w={290}
            borderRadius="25" 
            borderWidth="1.5" 
            _light={{ borderColor: darkBlack }} 
            _dark={{ borderColor: white }}
            bg={blueGreen}
          />
            <Flex 
              position="absolute" 
              w={300} 
              h={200} 
              justifyContent="center"
              borderRadius={30} 
              borderWidth="1.5"
              _light={{ borderColor: darkBlack,bg: white }}
              _dark={{ borderColor: white, bg: darkBlack }}
            >
              <Image alt={"map"} position="absolute" alignSelf="center" w="96%" h="93%" borderRadius={25} source={require('../asset/map.png')}/>
              <Box 
                position="absolute" 
                alignSelf="center"
                w="96%" 
                h="93%" 
                borderRadius={25} 
                borderWidth={1.5} 
              />
            </Flex>
        </Box>
        <ScrollView>
          <Box 
            flexDirection= "row" 
            justifyContent='center'
          >
            <Box width={310}>
                <DraggableFlatList
                  data={data}
                  extraData={data}
                  keyExtractor={(item, index) => `draggable-item-${index}`}
                  onDragEnd={({ data }) => setData(data)}
                  renderItem={({ item, index, drag, isActive }) => {
                    return (
                      <TouchableOpacity
                        onLongPress={drag}
                        onPress={() => {
                          navigation.navigate("Map");
                        }}
                      >
                        <Box flexDir='row'>
                        <Box 
                          mr={10} mt={10} height={5} width={5} borderRadius={20} 
                          _light={{ borderColor: darkBlack }} 
                          _dark={{ borderColor: white }} 
                          borderWidth={2} 
                          bgColor={green} 
                        />
                        <Box 
                          mb={5} 
                          justifyContent="center" 
                          alignItems="center"
                        >
                          <Box 
                            h={90} w={230} mt={3}
                            borderRadius="30" 
                            borderWidth="1.5" 
                            _light={{ borderColor: darkBlack,bg: lightBlue }} 
                            _dark={{ borderColor: white, bg: darkBlack }}
                            alignSelf="center"
                          />
                            <Box 
                              position='absolute' 
                              h={90} w={240} 
                              flexDirection="row"
                              borderRadius="30" 
                              borderWidth="1.5" 
                              _light={{ borderColor: darkBlack,bg: white }}
                              _dark={{ borderColor: white, bg: darkBlack }}
                            >
                            <Box>
                              <Input h={17} size="md" mt={25} ml={30} variant="unstyled">
                                第 {index+1} 個行程
                              </Input>
                              <Input h={17} size="sm" mt={2} ml={30} variant="unstyled">
                                地址
                              </Input>
                            </Box>
                            <Box ml={59} mt={5}>
                              <Input h={15} fontSize={12} mb={4} variant="unstyled">
                                時間
                              </Input>
                              <Input  h={15} fontSize={12} variant="unstyled">
                                時間
                              </Input>
                            </Box>
                          </Box>
                        </Box>
                        </Box>
                        </TouchableOpacity>
                      );
                    }}
                  /> 
                  <Box flexDir='row'>
                    <Box 
                      mr={10} mt={10} height={5} 
                      width={5} borderRadius={20} 
                      _light={{ borderColor: darkBlack }} 
                      _dark={{ borderColor: white }}
                      borderWidth={2} 
                    />
                    <Box mb={5} justifyContent="center" alignItems="center">
                      <Box 
                        h={90} w={230} mt={3}
                        borderRadius="30" 
                        borderWidth="1.5" 
                        _light={{ borderColor: darkBlack,bg: lightYellow }} 
                        _dark={{ borderColor: white, bg: orange }}
                        alignSelf="center"
                      />
                      <Box 
                        position='absolute' 
                        h={90} w={240} 
                        borderRadius="30" 
                        borderWidth="1.5" 
                        _light={{ borderColor: darkBlack,bg: white }} 
                        _dark={{ borderColor: white, bg: darkBlack }}
                        justifyContent='center'
                      >
                        <TouchableOpacity 
                          style={{marginLeft:30}} 
                          onPress={() => plusdata(Goal_data, number)}>
                          <Text>新增行程</Text>
                        </TouchableOpacity>
                      </Box>
                    </Box>
                  </Box>
                  <Pressable alignItems="center" marginTop={4}>
                    <Box
                      h={55}
                      w={195}
                      borderRadius="30"
                      borderWidth="1.5"
                      _light={{ bg: blueGreen, borderColor: black }}
                      _dark={{ bg: darkBlack, borderColor: white }}
                    />
                    <Box
                      position="absolute"
                      h={50}
                      w={200}
                      borderRadius="25"
                      borderWidth="1.5"
                      _light={{ borderColor: black }}
                      _dark={{ borderColor: white }}
                      bg={orange}
                    />
                    <Heading
                      position="absolute"
                      mt={15}
                      _light={{ color: white }}
                      _dark={{ color: black }}
                      fontSize="md"
                    >
                      儲存行程
                    </Heading>
                  </Pressable>
                </Box>
          </Box>
      </ScrollView>
    </Box>
    </Box>
    </SafeAreaView>
  );
};

export default TripPlanScreenDay3;
