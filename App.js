import React, { useState } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";


import OnBoardingScreen from "./screens/OnBoardingScreen";

export default function App() {
 

  return (
    <SafeAreaProvider>
       <OnBoardingScreen />
    </SafeAreaProvider>
  );
}
