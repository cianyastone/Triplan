import React , { useState } from "react";
import { View, FlatList, Button, Text } from "react-native";
import Header from "../components/Header";
import DayScreen from "../components/DayScreen";
import albumData from "../json/albums.json";
import DatePicker from 'react-native-date-picker'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const AlbumScreen = ({ navigation }) => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={{flex: 1}}>
      <View 
      style={{
        justifyContent: "flex-start"
      }}
      >
        <Text style={{fontSize:14}}>時間：</Text>
        <Button 
        title="請選時間" 
        onPress={() => setOpen(true)} 
        style={{height:14}}
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
      <Tab.Navigator>
        <Tab.Screen name="First Day" component={DayScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default AlbumScreen;
