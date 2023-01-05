import React, { memo, forwardRef } from "react";
import { View, StyleSheet } from "react-native";

function VStack({ alignItems, bg, reverse, ...rest }) {
  return (
    <View
      style={[
        styles.defaultStyle,
        bg && { backgroundColor: bg },
        alignItems && { alignItems },
        rest.style,
      ]}
    >
      {rest.children}
    </View>
  );
}

const styles = StyleSheet.create({
  defaultStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
  },
});

export default memo(VStack);
