import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { colors,globalStyle } from "../styles";
export default function TouchableText({ scrollToEnd }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollToEnd}>
        <Text style={[styles.textColor,globalStyle.FONT_SIZE]}>Skip Introduction</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-end",
    marginVertical: 5,
  },
  textColor: { color: colors.primary },
});
