import React from "react";
import {Text, StyleSheet } from "react-native";
import { makeBold } from "../helpers";
//her scroll işleminde render olmamıs için memo kullanıldı. Çünkü gelen data scroll işleminde aynı kalıyor
export const CustomText = React.memo(({ data }) => {
  const array = makeBold(data);

  return array.map((text, index) => {
    if (text.startsWith("**") || text.endsWith("**")) {
      let newText = text.split("**").join("");

      return (
        <Text key={index} style={styles.boldText}>
          {newText + " "}
        </Text>
      );
    }
    return `${text} `;
  });
});

const styles = StyleSheet.create({
  boldText: { fontWeight: "bold" },
});
