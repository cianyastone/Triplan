import React from "react";
import { Box, useColorMode } from "native-base";
import {  Dimensions  } from 'react-native';
import DayScreen from "./DayScreen";
import DatePicker from 'react-native-date-picker'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';

const black="#1D1D1D";
const blueGreen="#2AB3C0";
const blue = "#A8DEE0";
const orange="#F9BC75";
const white="#fff";
const green="#7EBB94";
const darkBlack="#262626";
const darkWhite="#E4E4E4";


const TripPlanScreen = () => {
  const { colorMode } = useColorMode();
  // layout = useWindowDimensions();
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     index: 0,
  //     routes: [
  //       { key: 'first', title: '第一天' },
  //       { key: 'second', title: '第二天' },
  //       { key: 'third', title: '第三天' },
  //     ]
  //   }
  // }

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
const indexChangeHandler = {
  width: Dimensions.get("window").width
};

  return (
    <Box flex="1" _light={{ bg: white }} _dark={{ bg: darkBlack }}>
      {/* <View 
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 20,
        height: 75,
      }}
      >
        <Text style={{fontSize:14}}>時間：</Text>
        <Button 
        title="請選時間" 
        onPress={() => setOpen(true)} 
        style={{
          height:14,
          justifyContent: "flex-start"
        }}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
        </View> */}
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
  );
};

export default TripPlanScreen;
