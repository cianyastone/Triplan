import React , { useState, Component } from "react";
import { Box, Input, ScrollView, Text } from "native-base";
import { View, Image, useWindowDimensions, StyleSheet, Dimensions, Button  } from 'react-native';
import DayScreen from "./DayScreen";
import DatePicker from 'react-native-date-picker'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view';
import { Tab } from "react-native-elements";



const FirstRoute = () => (
  <View >  
      <DayScreen />
  </View>
);
  

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);


class TripPlanScreen extends Component {

  // layout = useWindowDimensions();
  constructor(props) {
    super(props)
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: '第一天' },
        { key: 'second', title: '第二天' },
        { key: 'third', title: '第三天' },
      ]
    }
  }

  renderScene = SceneMap({
  first: DayScreen,
  second: DayScreen,
  third: DayScreen,
})
indexChangeHandler = (index) => {
  this.setState({ index })
}
  render() {
  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
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
      navigationState={this.state}
      renderScene={this.renderScene}
      onIndexChange={this.indexChangeHandler}
      initialLayout={
        {height: 0,
        width: Dimensions.get('window').width}
      }
      renderTabBar={props => (
        <TabBar
          {...props}
          scrollEnabled 
          style={{
            backgroundColor: 'white',
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
            backgroundColor: '#F9BC75',
            width: 50, 
            left: 25
          }}
          activeColor={'#F9BC75'}
          inactiveColor={'#1D1D1D'}
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
      

    </View>
  );}
};

export default TripPlanScreen;
