import React, { memo, forwardRef, useRef } from "react";
import { Text as RNText, StyleSheet, Platform, PixelRatio } from "react-native";
import { Layout } from "../../constants";
import Theme from "../../constants/Theme";

function TextRN({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  bold,
  italic,
  underline,
  style,
  size,
  lineHeight,
  letterSpacing,
  ...rest
}) {
  console.log(rest);
  return (
    <RNText
      style={[
        styles.defaultStyle,
        h1 && { fontSize: Theme.FontSize.h1 },
        h2 && { fontSize: Theme.FontSize.h2 },
        h3 && { fontSize: Theme.FontSize.h3 },
        h4 && { fontSize: Theme.FontSize.h4 },
        h5 && { fontSize: Theme.FontSize.h5 },
        p && { fontSize: Theme.FontSize.p },
        underline && { textDecorationLine: "underline" },
        bold && { fontWeight: "bold" },
        italic && { fontStyle: "italic" },
        size && { fontSize: normalize(size) },
        lineHeight && { lineHeight },
        letterSpacing && { letterSpacing },
        style,
      ]}
    >
      {rest.children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  defaultStyle: { fontSize: normalize(16), color: "#ccc" },
});

export default memo(TextRN);

export function normalize(size) {
  const scale = Layout.window.width / 320;
  console.log(scale);
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
