import React, { useState,useRef } from "react";
import {

  StyleSheet,

  Dimensions,
  
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { dummyData } from "../data/Data";
import Slider from "../components/Slider";
import DotBox from "../components/DotBox";
import TouchableText from "../components/TouchableText";
import Button from "../components/Button";
import {useScroll} from '../hooks'

const { width } = Dimensions.get("window");
export default function OnBoardingScreen() {
  const [active, setActive] = useState(0);
  const viewRef=useRef();
  const {scrollToNext,scrollToEnd,scrollToIndex}=useScroll(viewRef,active,width);
  
  const onChange = ({ nativeEvent }) => {
    const active = Math.floor(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
    );

    setActive(active);
   
    console.log(active);
  };
  const getViewRef = ()=>{
    return viewRef;
  }

 


  return (
    <SafeAreaView style={styles.container}>
      <TouchableText scrollToEnd={scrollToEnd}/>
      <Slider data={dummyData} onChange={onChange} active={active} viewRef={getViewRef}/>
      <DotBox
        dotLength={dummyData.length}
        active={active}
        scrollTo={scrollToIndex}
        // position={position}
        // scale={scale}
      />
      <Button scrollTo={scrollToNext}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
});
