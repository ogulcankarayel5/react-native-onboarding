import React from "react";
import {
  View,
  StyleSheet,
 
  TouchableOpacity,
  
} from "react-native";
import { makeDots } from "../helpers";

export default function DotBox({ active, dotLength, scrollTo }) {
  const data = makeDots(active, dotLength);

  return (
    <View style={styles.dotView}>
      {data.map((dot, index) => {
        return (
          <TouchableOpacity key={index} onPress={() => scrollTo(index)}>
            {dot}
          </TouchableOpacity>
        );
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
