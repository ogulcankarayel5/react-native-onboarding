import React, { useCallback,useRef } from "react";
import { View, StyleSheet, ScrollView, Dimensions,Button,Text } from "react-native";
import SliderItem from "./SliderItem";
import { dummyData } from "../data/Data";
import DotBox from "./DotBox";

const width = Dimensions.get("window").width;
const { height } = Dimensions.get("window");
export default function Slider({data,onChange,active}) {

  console.log("render");

  
  // const onChange = ({ nativeEvent }) => {
    // const active = Math.floor(
    //   nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    // );

    // setActive(active);

    // console.log(active);
  //   //Animated.event([{nativeEvent:{contentOffset:{x:slide}}}])
  // };

  return (
    <View style={styles.container}>
      <ScrollView
     
      snapToAlignment={"center"}
      
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

       

      {/* <View style={styles.dotView}>
        {dummyData.map((k, i) => (
          <View
            key={i}
            style={{
              backgroundColor: i === active ? "red" : "blue",
              height: 10,

              width: 10,

              margin: 8,
              borderRadius: 6,
            }}
          />
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 0.75, },
 

 
});
