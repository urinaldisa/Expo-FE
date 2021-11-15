import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Router from "./src/router";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Router />
        <StatusBar hidden={true} />
      </NavigationContainer>
    </>
  );
}
