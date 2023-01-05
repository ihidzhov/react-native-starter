import React, { memo, forwardRef } from "react";
import { View, StyleSheet } from "react-native";

function BR({ height, style }) {
  return (
    <View
      style={[styles.defaultStyle, height && { height: height }, style]}
    ></View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    width: "100%",
    backgroundColor: "transparent",
    height: 20,
  },
});

export default memo(BR);
