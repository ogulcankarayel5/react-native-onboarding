import React from "react";
import { Animated } from "react-native";
import { globalStyle } from "../styles";
import { colors } from "../styles";

export const makeDots = (active, dotLength) => {
  let content = [];

  for (let i = 0; i < dotLength; i++) {
    content.push(
      <Animated.View
        useNativeDriver
        style={[
          globalStyle.dot,

          {
            backgroundColor: i === active ? colors.primary : colors.secondary,

            width: i === active ? 12 : 10,
            height: i === active ? 12 : 10,
          },
        ]}
      />
    );
  }
  return content;
};
