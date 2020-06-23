import React from "react";

export const makeBold = (data) => {
  const arr = data.split(" ");
  const test = (acc, cur) => {
    let previousVal = acc[acc.length - 1];
    if (
      previousVal &&
      previousVal.startsWith("**") &&
      !previousVal.endsWith("**")
    )
      acc[acc.length - 1] = previousVal + " " + cur;
    else acc.push(cur);
    return acc;
  };
 
  const newData = arr.reduce(test, []);
  console.log(newData);
  return newData
};
