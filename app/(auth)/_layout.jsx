import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <StatusBar styles="auto" />
      <Stack screenOptions={{ headerShown: false, animation: "none" }} />
    </>
  );
}
