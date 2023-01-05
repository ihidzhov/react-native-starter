import React, { memo, forwardRef } from "react";
import { View, StyleSheet } from "react-native";

function HStack({ justifyContent, bg, reverse, ...rest }) {
  return (
    <View
      style={[
        styles.defaultStyle,
        justifyContent && { justifyContent },
        bg && { backgroundColor: bg },
        reverse && { flexDirection: "row-reverse" },
        rest.style,
      ]}
    >
      {rest.children}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default memo(HStack);
