import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import Search from "./screens/Search";
import Topic from "./screens/Topic";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const NavigationStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Topic" component={Topic} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default NavigationStack;
