/* eslint-disable react-native/no-inline-styles */

import { useFonts } from "expo-font";
import React, { FC, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput as TextInputRN,
  Image,
  KeyboardType,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { colors } from "../../../themes/colors";
import { sizes } from "../../../themes/sizes";
import CustomButton from "../../molecules/Button";
import Text from "../Text";

type PropsInput = {
  label?: string;
  labeltype?: "thin" | "regular" | "semibold" | "bold";
  labelColor?: string;
  placeholder?: string;
  placeholderTextColor?: string;
  onChangeText?: (value: string) => void;
  onBlur?: () => void;
  value?: string;
  textColor?: string;
  type?: "default" | "password" | "phone-number";
  focusedBorderColor?: string;
  blurBorderColor?: string;
  defaultCountry?: any;
  isPhoneNumber?: boolean;
  keyboardType?: KeyboardType;
  defaultValue?: string;
  maxLength?: any;
};

const TextInput: FC<PropsInput> = ({
  label,
  labeltype = "regular",
  labelColor,
  placeholder,
  placeholderTextColor,
  focusedBorderColor,
  blurBorderColor,
  type,
  keyboardType,
  onChangeText,
  defaultValue,
  maxLength,
}: PropsInput) => {
  const [isFocused, setFocused] = useState<boolean>(false),
    [hide, setHide] = useState<boolean>(true);

  const onBlur = () => {
    setFocused(false);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const toggleHide = () => {
    setHide(!hide);
  };

  const [loaded] = useFonts({
    Regular: require("../../../assets/fonts/Montserrat-Regular.ttf"),
    Bold: require("../../../assets/fonts/Montserrat-Bold.ttf"),
    Semibold: require("../../../assets/fonts/Montserrat-SemiBold.ttf"),
    Thin: require("../../../assets/fonts/Montserrat-Thin.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text size={16} type={labeltype} style={styles.label} color={labelColor}>
        {label}
      </Text>
      <TextInputRN
        defaultValue={defaultValue}
        maxLength={maxLength}
        placeholderTextColor={placeholderTextColor}
        onBlur={onBlur}
        selectionColor={colors.primary}
        onFocus={onFocus}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        style={[
          styles.input,
          {
            color: "black",
            borderColor: isFocused
              ? focusedBorderColor || colors.primary
              : blurBorderColor || "grey",
            borderWidth: isFocused ? 2 : 1,
          },
        ]}
        clearButtonMode="always"
        secureTextEntry={type === "password" && hide}
        placeholder={placeholder}
      />
      {/* {type === 'password' && (
        <CustomButton
          onPress={toggleHide}
          rounded
          type="none"
          style={styles.buttonIcon}>
          <Image
            source={hide ? images.eye : images.eye}
            style={styles.iconHide}
          />
        </CustomButton>
      )} */}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    height: heightPercentageToDP(7),
    marginVertical: heightPercentageToDP(3),
  },
  label: { marginBottom: heightPercentageToDP(1) },
  input: {
    borderRadius: sizes.radiusMedium,
    height: heightPercentageToDP(7),
    padding: 10,
    overflow: "hidden",
    fontFamily: "Montserrat-Regular",
  },
  buttonIcon: {
    height: heightPercentageToDP(7),
    width: 36,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -heightPercentageToDP(5),
    right: widthPercentageToDP(1),
  },
  iconHide: {
    height: 26,
    width: 26,
  },
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
