import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { globalStyle } from "../styles";
const { width } = Dimensions.get("window");

import { CustomText } from "./CustomText";
export default function SliderItem({ image, title, description }) {
  return (
    <View style={styles.itemContainer}>
      <View >
        <Image
          source={{ uri: image }}
          style={globalStyle.image}
         
        />
      </View>

      <View>
        <Text style={styles.title}>
          <CustomText data={title} />
        </Text>
      </View>
      <View>
        <Text style={styles.text}>
          <CustomText data={description} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width,
  },

  title: {
    fontSize: globalStyle.FONT_SIZE_TITLE,
    textAlign: "center",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    fontSize: globalStyle.FONT_SIZE,
    width: width * 0.95,
   
  },
});
