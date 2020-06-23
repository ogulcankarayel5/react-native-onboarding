import React from "react";
import { TouchableOpacity, Animated } from "react-native";
import { globalStyle } from "../styles";
import { colors } from "../styles";

export const makeDots = (active, dotLength) => {
  let content = [];
  for (let i = 0; i < dotLength; i++) {
    // let opacity = position.interpolate({
    //   inputRange: [i - 1, i, i + 1],
    //   outputRange: [1, 1, 1],
    //   extrapolate: "clamp",
    // });

    content.push(
      <Animated.View
        useNativeDriver
        style={[
          globalStyle.dot,
          {
            backgroundColor: i === active ? colors.primary : colors.secondary,
            width: i === active ? 12 : 10,
            height: i === active ? 12 : 10,
            // opacity,
          },
        ]}
      />
    );
  }
  return content;
};
