import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Animated,
  TouchableWithoutFeedback,
  AsyncStorage,
} from "react-native";

import { globalStyle } from "../styles";

export default function Button({ scrollTo, length, active }) {
  const [animated, setAnimated] = useState(new Animated.Value(1));

  const toggle = () => {
    Animated.spring(animated, {
      toValue: 0,
      useNativeDriver: true,
    }).start(() => {
      setAnimated(new Animated.Value(1));
    });

    scrollTo();
  };
  const storeData = async () => {
    try {
      
      await AsyncStorage.setItem("first-user-screen-shown", JSON.stringify(true));
    } catch (error) {
      console.log(error);
    }
  };



  const checkLastIndex = () => {
    return active === length - 1 ? true : false;
  };

  return (
    <View style={{ marginTop: 10 }}>
      <TouchableWithoutFeedback onPress={checkLastIndex() ? storeData : toggle}>
        <Animated.View style={[globalStyle.button, { opacity: animated }]}>
          <Text style={[globalStyle.buttonText, globalStyle.fontSize]}>
            {checkLastIndex() ? "Start" : "Next"}
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
