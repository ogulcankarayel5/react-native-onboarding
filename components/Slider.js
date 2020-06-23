import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SliderItem from "./SliderItem";

export default function Slider({ data, onChange, viewRef }) {

  
  return (
    <View style={styles.container}>
      <ScrollView
        ref={viewRef()}
        snapToAlignment={"center"}
        scrollEventThrottle={16}
        onScroll={onChange}
       
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <SliderItem
              key={index}
              title={item.title}
              image={item.url}
              description={item.description}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 0.85 },
});
