import React from "react";
import { Dimensions,StyleSheet } from "react-native";
import {colors} from './colors'
// Precalculate Device Dimensions for better performance
const x = Dimensions.get("window").width;
const y = Dimensions.get("window").height;

// Calculating ratio from iPhone breakpoints
const ratioX = x < 375 ? (x < 320 ? 0.75 : 0.875) : 1;
const ratioY = y < 568 ? (y < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 15;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
function em(value) {
  return unit * value;
}

// Then we set our styles with the help of the em() function
export const globalStyle = StyleSheet.create({
  boldText: { fontWeight: "bold" },
  dot: {
    margin: em(0.6),
    borderRadius: em(0.7),
  },
  image: {
    height: x * 0.8,
    width: x*0.9,
    resizeMode: "contain",
   
  },
  button: {
    backgroundColor:"red",
    paddingHorizontal:em(6),
    paddingVertical:em(.7),
    borderRadius:em(1.5),
    backgroundColor:colors.primary
    
    
    
  },
  buttonText:{
    color:colors.buttonTextColor
  },
  fontSize:{
    fontSize:em(1)
  },
  

  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.3),
})
