import { colors } from "../../../themes/colors";
import React from "react";
import { Animated, Dimensions, StyleSheet } from "react-native";
import { RFValue as fs } from "react-native-responsive-fontsize";
import { useFonts } from "expo-font";

type PropsText = {
  children: any;
  color?: String;
  style?: Object;
  numberOfLines?: number;
  size?: number;
  type: "thin" | "regular" | "semibold" | "bold";
  align?: "left" | "center" | "right" | "justify";
  [key: string]: any;
};

const Text: React.FC<PropsText> = (props) => {
  const [loaded] = useFonts({
    Regular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    Semibold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    Thin: require("../../../assets/fonts/Montserrat-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }
  const TextStyles: any[] = [
    props.type === "thin" && styles.thin,
    props.type === "regular" && styles.regular,
    props.type === "semibold" && styles.semibold,
    props.type === "bold" && styles.bold,
  ];

  const textColor: object = {
      color: props.color ? props.color : colors.dark,
    },
    { height } = Dimensions.get("window");
  const sizeText: object = {
    fontSize: props.size ? fs(props.size - 3, height) : fs(15 - 3, height),
  };

  return (
    <Animated.Text
      {...props}
      minimumFontScale={12}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      ellipsizeMode="tail"
      style={[
        styles.default,
        TextStyles,
        textColor,
        sizeText,
        props.style,
        { textAlign: props.align },
      ]}
    >
      {props.children}
    </Animated.Text>
  );
};

export default Text;

const styles = StyleSheet.create({
  default: {},
  thin: {
    fontFamily: "Thin",
  },
  regular: {
    fontFamily: "Regular",
  },
  semibold: {
    fontFamily: "Semibold",
  },
  bold: {
    fontFamily: "Bold",
  },
});
