import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Navigator from "./routes/HomeStack";
import OnBoardingScreen from "./screens/OnBoardingScreen";

export default function App() {
  const [firstScreen, setFirstScreen] = useState(true);
  if (firstScreen) {
    return (
      <SafeAreaProvider>
        <OnBoardingScreen />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <Navigator />
    </SafeAreaProvider>
  );
}
