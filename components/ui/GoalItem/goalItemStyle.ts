import { StyleSheet } from "react-native";

export const goalItemStyles = StyleSheet.create({
  goalItemContainer: {
    margin: 8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  deleteButtonText: {
    textAlign: "center",
    color: "white",
    padding: 8,
  },
  goalTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#5e0acc",
    fontSize: 18,
    borderRadius: 6,
    width: "70%",
    textAlign: "auto",
  },
  goalTextContainerDone: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#573b81",
    borderRadius: 6,
    width: "70%",
    textAlign: "auto",
    opacity: 0.6,
  },
  goalText: {
    color: "white",
    fontSize: 18,
  },
  iphoneClicked: {
    opacity: 0.5,
  },
});
