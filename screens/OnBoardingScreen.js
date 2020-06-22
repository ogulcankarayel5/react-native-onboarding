import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Easing,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "../data/Data";
import Slider from "../components/Slider";
import DotBox from "../components/DotBox";
import TouchableText from "../components/TouchableText";

const { width } = Dimensions.get("window");
export default function OnBoardingScreen() {
  const [active, setActive] = useState(0);

  const onChange = ({ nativeEvent }) => {
    const active = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    setActive(active);

    console.log(active);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableText />
      <Slider data={dummyData} onChange={onChange} active={active} />
      <DotBox
        dotLength={dummyData.length}
        active={active}
        // position={position}
        // scale={scale}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
