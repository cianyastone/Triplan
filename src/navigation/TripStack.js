import React from "react";
import { Image, Pressable, Box, useColorMode } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import TripPlanScreenDay1 from "../days/TripPlanScreenDay1";
import TripPlanScreenDay2 from "../days/TripPlanScreenDay2";
import TripPlanScreenDay3 from "../days/TripPlanScreenDay3";
import AddTripScreen from "../screens/AddTripScreen";
import MapScreen from "../screens/MapScreen";

const Stack = createStackNavigator();
const black = "#1D1D1D";
const blueGreen = "#2AB3C0";
const blue = "#A8DEE0";
const orange = "#F9BC75";
const white = "#fff";
const green = "#7EBB94";
const darkBlack = "#262626";

export const TripStack = ({ navigation: { goBack } }) => {
    const { colorMode } = useColorMode();

    
    return (
        <Stack.Navigator>
        <Stack.Screen
          name="Add Trip"
          component={AddTripScreen}
          options={{
            headerTitle: "新增行程",
            headerTintColor: colorMode == "light" ? black : white,
            headerTitleStyle: {
              fontSize: 20,
              backgroundColor: colorMode == "light" ? white : darkBlack,
            },
            headerStyle: {
              backgroundColor: colorMode == "light" ? white : darkBlack,
            },
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
        name="TripPlanScreenDay1"
        component={TripPlanScreenDay1}
        options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
        name="TripPlanScreenDay2"
        component={TripPlanScreenDay2}
        options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
        name="TripPlanScreenDay3"
        component={TripPlanScreenDay3}
        options={{
            headerShown: false,
            animationEnabled: false,
          }}
        />
        <Stack.Screen
        name="Map"
        component={MapScreen}
        options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    );
  };
  