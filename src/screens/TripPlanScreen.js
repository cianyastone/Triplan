import React , { useState } from "react";
import { View, FlatList, Button, Text, Image, Box, Pressable } from "react-native";
import DayScreen from "./DayScreen";
import DatePicker from 'react-native-date-picker'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from "./HomeScreen";

const Tab = createMaterialTopTabNavigator();

const TripPlanScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      <View 
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
      </View>
      <Tab.Navigator style={{flex: 1, backgroundColor:'white'}}>
        <Tab.Screen name="First Day" component={DayScreen} />
        <Tab.Screen name="Second Day" component={DayScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default TripPlanScreen;
