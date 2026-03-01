import React from "react";
import { TextInput } from "react-native";
import { inputStyles } from "./style";

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
}: {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={inputStyles.textInput}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
