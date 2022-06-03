import React from "react";
import { Image, Pressable, Box, useColorMode } from "native-base";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import Setting from "../screens/SettingScreen";
import ProfileSetting from "../screens/ProfileSettingScreen";
import Profile from "../screens/ProfileScreen";

const Stack = createStackNavigator();
const black = "#1D1D1D";
const blueGreen = "#2AB3C0";
const blue = "#A8DEE0";
const orange = "#F9BC75";
const white = "#fff";
const green = "#7EBB94";
const darkBlack = "#262626";

export const HomeStack = ({ navigation: { goBack } }) => {
  const { colorMode } = useColorMode();
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
          title: "設定",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTintColor: colorMode == "light" ? black : white,
          headerLeft: () => (
            <Pressable ml={6} onPress={() => goBack()}>
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
                  alt={"setting"}
                  size={28}
                  source={require("../asset/back.png")}
                />
              </Box>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colorMode == "light" ? white : darkBlack,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ProfileSetting"
        component={ProfileSetting}
        options={{
          title: "編輯個人檔案",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTintColor: colorMode == "light" ? black : white,
          headerLeft: () => (
            <Pressable ml={6} onPress={() => goBack()}>
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
                  alt={"setting"}
                  size={28}
                  source={require("../asset/back.png")}
                />
              </Box>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colorMode == "light" ? white : darkBlack,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "個人檔案",
          headerTitleStyle: {
            fontSize: 16,
          },
          headerTintColor: colorMode == "light" ? black : white,
          headerLeft: () => (
            <Pressable ml={6} onPress={() => goBack()}>
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
                  alt={"setting"}
                  size={28}
                  source={require("../asset/back.png")}
                />
              </Box>
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: colorMode == "light" ? white : darkBlack,
          },
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
