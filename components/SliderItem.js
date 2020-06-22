import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");
export default function SliderItem({ image, title, description }) {
  return (
    <View style={styles.itemContainer}>
      <Image
        source={{ uri: image }}
        style={{ width: width / 2, height: height / 2 }}
        
      />
      <Text style={styles.text}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width,
  },
  text: { textAlign: "center", marginTop: 20 },
});
