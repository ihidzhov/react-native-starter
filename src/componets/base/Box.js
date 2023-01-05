import React, { memo, forwardRef } from "react";
import { View, StyleSheet } from "react-native";

function Box({
  w,
  h,
  bg,
  direction,
  justifyContent,
  alignItems,
  round,
  ...rest
}) {
  return (
    <View
      style={[
        styles.defaultStyle,
        w && { width: w },
        h && { height: h },
        bg && { backgroundColor: bg },
        direction && { flexDirection: direction },
        justifyContent && { flexDirection: justifyContent },
        alignItems && { alignItems: alignItems },
        round && { borderRadius: round },
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
    backgroundColor: "transparent",
  },
});

export default memo(Box);
