import React, { useEffect } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
 
} from "react-native";
import { dummyData } from "../data/Data";
import {colors} from '../styles';
import { TouchableOpacity } from "react-native-gesture-handler";

const { width } = Dimensions.get("window");

export default function DotBox({ active, dotLength, position }) {
  const makeDots = () => {
    let content = [];
    for (let i = 0; i < dotLength; i++) {
      // let opacity = position.interpolate({
      //   inputRange: [i - 1, i, i + 1],
      //   outputRange: [1, 1, 1],
      //   extrapolate: "clamp",
      // });

      content.push(
        <TouchableOpacity key={i} onPress={() => alert("pressed")}>
          <Animated.View
            useNativeDriver
            style={[
              styles.dot,
              {
                backgroundColor: i === active ? colors.activeDot : colors.notActiveDot,
                // opacity,

                
              },
            ]}
          />
        </TouchableOpacity>
      );
    }
    return content;
  };

  return <View style={styles.dotView}>{makeDots()}</View>;
}

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dot: {
    height: 10,

    width: 10,

    margin: 8,
    borderRadius: 6,
  },
});
