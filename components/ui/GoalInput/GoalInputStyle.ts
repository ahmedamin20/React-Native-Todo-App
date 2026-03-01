import { StyleSheet } from "react-native";

export const GoalInputStyle = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    width: "100%",
    marginTop: 16,
  },
});
