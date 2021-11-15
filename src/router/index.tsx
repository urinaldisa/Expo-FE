import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Register from "../screen/Auth/Register";
import Main from "../screen/Main";
import List from "../screen/Main/List";
import UpdateData from "../screen/Main/UpdateData";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateData"
        component={UpdateData}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
