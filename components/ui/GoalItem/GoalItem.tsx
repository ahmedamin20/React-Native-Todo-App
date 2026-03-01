import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { goalItemStyles } from "./goalItemStyle";

const GoalItem = ({
  item,
  onDelete,
  onDone,
  onUpdate,
}: {
  item: { id: string; text: string; done: boolean };
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
  onUpdate: (id: string) => void;
}) => {
  return (
    <View style={goalItemStyles.goalItemContainer}>
      <View
        style={
          item.done
            ? goalItemStyles.goalTextContainerDone
            : goalItemStyles.goalTextContainer
        }
      >
        <Text style={goalItemStyles.goalText}>{item.text}</Text>
        <Pressable
          onPress={onDone.bind(this, item.id)}
          android_ripple={{ color: "#00630d" }}
          style={({ pressed }) => pressed && goalItemStyles.iphoneClicked}
        >
          <View
            style={{
              backgroundColor: item.done ? "#573b81" : "#5e0acc",
              borderRadius: 6,
              padding: 8,
            }}
          >
            <AntDesign
              name={item.done ? "reload" : "check"}
              size={24}
              color="white"
            />
          </View>
        </Pressable>
      </View>
      <View style={{ backgroundColor: "red", borderRadius: 6, padding: 8 }}>
        <Pressable
          onPress={onDelete.bind(this, item.id)}
          android_ripple={{ color: "#2b0235" }}
          style={({ pressed }) => pressed && goalItemStyles.iphoneClicked}
        >
          <AntDesign name="delete" size={24} color="white" />
        </Pressable>
      </View>
      <View style={{ backgroundColor: "blue", borderRadius: 6, padding: 8 }}>
        <Pressable
          onPress={onUpdate.bind(this, item.id)}
          android_ripple={{ color: "#2b0235" }}
          style={({ pressed }) => pressed && goalItemStyles.iphoneClicked}
        >
          <AntDesign name="edit" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

export default GoalItem;
