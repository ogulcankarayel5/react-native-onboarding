import React, { useEffect } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { makeDots } from "../helpers";

export default function DotBox({ active, dotLength, position,scrollTo }) {
  const data = makeDots(active, dotLength);
  

  return (
    <View style={styles.dotView}>
      {data.map((dot,index) => {
        return <TouchableOpacity key={index} onPress={()=>scrollTo(index)}>{dot}</TouchableOpacity>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  dotView: {
    marginTop: 10,
    flex: 0.08,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    
  },
});
