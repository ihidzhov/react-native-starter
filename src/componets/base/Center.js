import React, { memo, forwardRef } from "react";
import { View, StyleSheet } from "react-native";

function Center({ bg, direction, w, h, round, ...rest }) {
  return (
    <View
      style={[
        styles.defaultStyle,
        bg && { backgroundColor: bg },
        direction && { flexDirection: direction },
        w && { width: w },
        h && { height: h },
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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    width: "100%",
  },
});

export default memo(Center);
