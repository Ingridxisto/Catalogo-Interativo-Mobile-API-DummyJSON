import Login from "./login";
import { Stack } from "expo-router";
import React from "react";

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Login />
    </>
  );
}
