import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import React from "react";

const _layout = () => {
  return (
    <>
      <StatusBar styles="auto" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Home" }}
        />
      </Stack>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
