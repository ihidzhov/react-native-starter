import React, { memo, forwardRef } from "react";
import { View } from "react-native";

function Divider({ w, h, bg, direction, m, ...rest }) {
  return (
    <View
      style={[
        { width: w, height: h },
        bg && { backgroundColor: bg },
        m && { marginHorizontal: m },
        rest.style,
      ]}
    >
      {rest.children}
    </View>
  );
}

export default memo(Divider);
