import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from "react-redux";
import { Image, KeyboardAvoidingView } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/HomeScreen";
import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterSceen';
import TripPlanScreen from '../screens/TripPlanScreen';
import Setting from "../screens/SettingScreen";
import Search from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  const { login } = useSelector((state) => state.account);

  return (
    <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        {
          !login.hasLogin
          ? (
            <NavigationContainer>
              <UserStack />
            </NavigationContainer>  
          )
          : (
            <NavigationContainer>
              <MyTabs />
            </NavigationContainer>            
          )
        }
      </KeyboardAvoidingView>
  );
}

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => (
            focused
            ?<Image source={require('../asset/home_active.png')}/>
            :<Image source={require('../asset/home.png')}/>
          ),
        }}
      />
      <Tab.Screen 
        name="AddStack" 
        component={TripTab} 
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: () => (
            <Image size={70} mb="10" source={require('../asset/add.png')}/>
          ),
        }}
      />
      <Tab.Screen 
        name="SearchStack" 
        component={Search} 
        options={{
          tabBarLabel:() => {return null},
          tabBarIcon: ({ focused }) => (
            focused
            ?<Image source={require('../asset/search_active.png')}/>
            :<Image source={require('../asset/search.png')}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name=" " 
        component={Home} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Setting" 
        component={Setting} 
        options={{
          title: '設定',
          headerTitleStyle: {
            fontSize: 20
          },
        }}
      />
    </Stack.Navigator>
  );
}

const TripStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Trip" 
        component={TripPlanScreen} 
        options={{
          title: '行程標題',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20
          }, 
        }}
      />
    </Stack.Navigator>
  );
}

const TripTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="行程標題" 
        component={TripStack} 
        options={{
          headerShown: false,
        }}
        />
    </Tab.Navigator>
  );
}

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="Register" 
        component={Register} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation;