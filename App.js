import React from 'react';
// import { View, FlatList } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TripPlanScreen from './src/screens/TripPlanScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import albumData from "./src/json/albums.json";

  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const TripStack = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen 
            name="Trip" 
            component={TripPlanScreen} 
            options={{
              title: albumData.albumTitle,
              headerTitleStyle: {
                fontWeight: '400',
                fontSize: 20
              }, 
            }}
          />
        </Stack.Navigator>
    );
  }
  
  
  const App = () => {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen 
            name="行程標題" 
            component={TripStack} 
            options={{
              headerShown: false,
            }}
            />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
