import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
  return (
    <>
      <StatusBar styles="auto" />
      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false, title: "Home", animation: "none" }}
        />
      </Stack>
    </>
  );
};

export default RootLayout;
