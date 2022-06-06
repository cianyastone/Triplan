import React from "react";
import { Platform } from "react-native";
import { useSelector } from "react-redux";
import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  Box,
  Flex,
  useColorMode,
} from "native-base";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import SafeAreaView from "react-native-safe-area-view";
import AuthScreen from "../screens/AuthScreen";
import { selectLogin } from "../redux/accountSlice";
import Search from "../screens/SearchScreen";
import { HomeStack } from "./HomeStack";
import { TripStack } from "./TripStack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const black = "#1D1D1D";
const blueGreen = "#2AB3C0";
const blue = "#A8DEE0";
const orange = "#F9BC75";
const white = "#fff";
const green = "#7EBB94";
const darkBlack = "#262626";

const Navigation = () => {
  const login = useSelector(selectLogin);
  const { colorMode } = useColorMode();

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 0, android: -500 })}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      flex={1}
    >
      {!login.hasLogin ? (
        <AuthScreen />
      ) : (
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      )}
    </KeyboardAvoidingView>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen
        name="AddStack"
        options={{
          // hide the bottom tab bar on Product Screen
          tabBarStyle: { display: "none" },
        }}
        component={TripStack}
      />
      <Tab.Screen name="SearchStack" component={Search} />
    </Tab.Navigator>
  );
};

function MyTabBar({ state, descriptors, navigation }) {
  const { colorMode } = useColorMode();
  return (
    <SafeAreaView
      forceInset={{ bottom: "always" }}
      style={{ backgroundColor: colorMode == "light" ? white : darkBlack }}
    >
      <Box _light={{ bg: white }} _dark={{ bg: darkBlack }}>
        <Box
          mt={3}
          h={60}
          w={340}
          alignSelf="center"
          borderRadius="10"
          borderWidth="1.5"
          _light={{ borderColor: darkBlack }}
          _dark={{ borderColor: white }}
        />
        <Flex
          position="absolute"
          direction="row"
          alignItems="center"
          alignSelf="center"
          w={360}
          h={65}
          borderRadius={10}
          borderWidth={1.5}
          _light={{ bg: blueGreen, borderColor: darkBlack }}
          _dark={{ bg: darkBlack, borderColor: white }}
        >
          {state.routes.map((route, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            return (
              <Pressable onPress={onPress} flex={1} alignItems="center">
                {() => {
                  if (route.name == "HomeStack") {
                    return isFocused ? (
                      <Box
                        w={50}
                        h={38}
                        borderRadius="10"
                        borderWidth="1.5"
                        _light={{ borderColor: darkBlack }}
                        _dark={{ borderColor: white }}
                        bg="#F9BC75"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          size={25}
                          alt={"home"}
                          source={require("../asset/home_light.png")}
                        />
                      </Box>
                    ) : (
                      <Image
                        size={25}
                        alt={"home"}
                        source={require("../asset/home_light.png")}
                      />
                    );
                  } else if (route.name == "AddStack") {
                    return (
                      <Box
                        size={60}
                        mb={30}
                        borderRadius="60"
                        borderWidth="1.5"
                        _light={{ bg: blue, borderColor: darkBlack }}
                        _dark={{ bg: blueGreen, borderColor: white }}
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          size={30}
                          alt={"add"}
                          source={require("../asset/add_light.png")}
                        />
                      </Box>
                    );
                  } else {
                    return isFocused ? (
                      <Box
                        w={50}
                        h={38}
                        borderRadius="10"
                        borderWidth="1.5"
                        _light={{ borderColor: darkBlack }}
                        _dark={{ borderColor: white }}
                        bg="#F9BC75"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Image
                          size={25}
                          alt={"search"}
                          source={require("../asset/search_light.png")}
                        />
                      </Box>
                    ) : (
                      <Image
                        size={25}
                        alt={"search"}
                        source={require("../asset/search_light.png")}
                      />
                    );
                  }
                }}
              </Pressable>
            );
          })}
        </Flex>
      </Box>
    </SafeAreaView>
  );
}

export default Navigation;
