import React from 'react';
import { Platform } from 'react-native';
import { useSelector } from "react-redux";
import { Image, KeyboardAvoidingView, Pressable, Box, Flex } from 'native-base';
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
      tabBar={(props) => <MyTabBar {...props}/>}
      screenOptions={{ headerShown: false, }}>
      <Tab.Screen name="HomeStack" component={HomeStack}/>
      <Tab.Screen name="AddStack" component={TripStack}/>
      <Tab.Screen name="SearchStack" component={Search}/>
    </Tab.Navigator>
  );
}

const HomeStack = ({ navigation: { goBack }, navigation }) => {
  // navigation.setOptions({ tabBarStyle:{ display:'none' }});
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
            fontSize: 16,
          },
          headerLeft: () => (
            <Pressable ml={6}onPress={() => goBack()}>
              <Box size={38} bg="#F9BC75" justifyContent="center" alignItems="center"
                borderRadius={15} borderWidth={2} borderColor="#1D1D1D"
              >
                <Image size={28} source={require('../asset/back.png')}/>
              </Box>
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const TripStack = ({ navigation: { goBack }, navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Trip" 
        component={TripPlanScreen} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
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

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <Box>
      <Box mt={3} h={60} w={340} alignSelf="center"
        borderRadius="10" borderWidth="1.5" borderColor="#1D1D1D"
      />
      <Flex position="absolute"
        direction="row" alignItems="center" alignSelf="center"
        bg="#2AB3C0" w={360} h={65}
        borderRadius={10} borderWidth={1.5}
      >
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              onPress={onPress}
              flex={1}
              alignItems="center"
            >
              {
                () => {
                  if (route.name == "HomeStack"){
                    return (
                      isFocused
                      ?<Box w={50} h={38}
                        borderRadius="10" borderWidth="1.5" borderColor="#1D1D1D"
                        bg="#F9BC75" alignItems="center" justifyContent="center"
                      >
                        <Image size={25} source={require('../asset/home_light.png')}/>
                      </Box>
                      :<Image size={25} source={require('../asset/home_light.png')}/>
                    )
                  }else if(route.name == "AddStack"){
                    return (
                      <Box size={60} mb={30}
                        borderRadius="60" borderWidth="1.5" borderColor="#1D1D1D"
                        bg="#A8DEE0" alignItems="center" justifyContent="center"
                      >
                        <Image size={30} source={require('../asset/add_light.png')}/>
                      </Box>
                  )
                  }else{
                    return (
                      isFocused
                      ?<Box w={50} h={38}
                        borderRadius="10" borderWidth="1.5" borderColor="#1D1D1D"
                        bg="#F9BC75" alignItems="center" justifyContent="center"
                      >
                        <Image size={25} source={require('../asset/search_light.png')}/>
                      </Box>
                      :<Image size={25} source={require('../asset/search_light.png')}/>
                  )}
                }
              }
            </Pressable>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Navigation;