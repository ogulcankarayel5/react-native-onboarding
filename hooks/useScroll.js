import React from "react";

export const useScroll = (viewRef,active,width) => {


  const scrollToEnd = () => {
    viewRef.current.scrollToEnd({ animated: true });
  };

  const scrollToIndex = (index) => {
    viewRef.current.scrollTo({ x: width * index, animated: true });
  };
  const scrollToNext = () => {
    viewRef.current.scrollTo({ x: width *(active+1), animated: true });
  }

  return { scrollToIndex, scrollToEnd,scrollToNext };
};
