import React from "react";
import { Box, useColorMode, Flex, Pressable, Text, Image } from "native-base";
import {  Dimensions  } from 'react-native';
import DayScreen from "./DayScreen";
import DatePicker from 'react-native-date-picker'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import SafeAreaView from "react-native-safe-area-view";

const black="#1D1D1D";
const blueGreen="#2AB3C0";
const blue = "#A8DEE0";
const orange="#F9BC75";
const white="#fff";
const green="#7EBB94";
const darkBlack="#262626";
const darkWhite="#E4E4E4";


const TripPlanScreen = ({ navigation: { goBack } }, props) => {
  const { colorMode } = useColorMode();

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

  const renderScene = SceneMap({
  first: DayScreen,
  second: DayScreen,
  third: DayScreen,
  });

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
            {props.name}高雄
          </Text>
        </Flex>
      <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={
        {height: 0,
        width: Dimensions.get('window').width}
      }
      renderTabBar={props => (
        <TabBar
          {...props}
          scrollEnabled 
          style={{
            backgroundColor: colorMode == 'light' ? white : darkBlack,
            shadowOffset: { height: 0, width: 0 },
            shadowColor: "transparent",
            shadowOpacity: 0,
            elevation: 0,
            marginBottom: 20,
            justifyContent:'center',
            marginLeft: 40,
            height: 70,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginRight: 40,
          }}
          tabStyle={{
            width: 100,
          }}
          indicatorStyle={{
            height: 3,
            backgroundColor: orange,
            width: 50, 
            left: 25
          }}
          activeColor={orange}
          inactiveColor={colorMode == 'light' ? black : darkWhite}
          indicatorContainerStyle={{
            width: Dimensions.get("screen").width
          }}
          contentContainerStyle={{
            justifyContent: "center",
            alignSelf:'center',
          }}
          labelStyle={{ fontSize: 14,
            alignSelf:'center',
            justifyContent: "center", 
            fontWeight:'bold',
          }}
          getLabelText={({ route }) => route.title}
        />
        )}
      /> 
    </Box>
    </SafeAreaView>
  );
};

export default TripPlanScreen;
