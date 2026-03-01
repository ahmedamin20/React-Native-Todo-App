import React from "react";
import { Button, Image, Modal, View } from "react-native";
import imageSource from "../../../assets/images/react-logo.png";
import CustomInput from "../CustomInput/Input";
import { GoalInputStyle } from "./GoalInputStyle";
export const GoalInput = ({
  goal,
  textInputChange,
  addGoal,
  isOpen,
  inUpdate,
  setIsOpen,
}: {
  goal: string;
  textInputChange: (text: string) => void;
  addGoal: () => void;
  isOpen: boolean;
  inUpdate: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Modal visible={isOpen} animationType="slide">
      <View style={GoalInputStyle.inputContainer}>
        <Image style={GoalInputStyle.image} source={imageSource} />
        <CustomInput
          onChangeText={textInputChange}
          placeholder="Enter Your Goal Here!"
          value={goal}
        />
        <View style={GoalInputStyle.buttonsContainer}>
          <Button
            title={inUpdate ? "Update Goal" : "Add Goal"}
            onPress={addGoal}
          />
          <Button title="Cancel" onPress={() => setIsOpen(false)} />
        </View>
      </View>
    </Modal>
  );
};
