import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,

} from "react-native";
import {globalStyle} from '../styles'

export default function Button({scrollTo}) {
  return (
    <View style={{marginTop:10}}>
      <TouchableOpacity onPress={scrollTo}>
        <Animated.View style={globalStyle.button}>
          <Text style={[globalStyle.buttonText,globalStyle.fontSize]}>Next</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
}
