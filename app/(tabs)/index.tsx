import { GoalInput } from "@/components/ui/GoalInput/GoalInput";
import GoalItem from "@/components/ui/GoalItem/GoalItem";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";

export default function HomeScreen() {
  const [goal, setGoal] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [listOfGoals, setListOfGoals] = useState<
    { id: string; text: string; done: boolean }[]
  >([]);
  const textInputChange = (text: string) => {
    setGoal(text);
  };
  const addGoal = () => {
    if (isUpdating) {
      setListOfGoals((currentListOfGoals) => {
        return [
          ...currentListOfGoals,
          { id: Math.random().toString(), text: goal, done: false },
        ];
      });
      setGoal("");
      setIsUpdating(false);
    } else {
      setListOfGoals((currentListOfGoals) => {
        return [
          ...currentListOfGoals,
          { id: Math.random().toString(), text: goal, done: false },
        ];
      });
      setGoal("");
    }
  };
  const deleteGoal = (id: string) => {
    setListOfGoals((currentListOfGoals) => {
      return currentListOfGoals.filter((goal) => goal.id !== id);
    });
  };
  const onDone = (id: string) => {
    setListOfGoals((currentListOfGoals) => {
      return currentListOfGoals.map((goal) => {
        if (goal.id === id) {
          return { ...goal, done: !goal.done };
        }
        return goal;
      });
    });
  };
  const onUpdate = (id: string) => {
    const goalToUpdate = listOfGoals.find((goal) => goal.id === id);
    if (goalToUpdate) {
      setGoal(goalToUpdate.text);
      setIsUpdating(true);
      setIsOpen(true);
      deleteGoal(id);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Button onPress={() => setIsOpen(!isOpen)} title="Add Goal" />
      <GoalInput
        inUpdate={isUpdating}
        addGoal={addGoal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        goal={goal}
        textInputChange={textInputChange}
      />
      <View style={styles.listOfGoals}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={listOfGoals}
          alwaysBounceVertical={false}
          renderItem={({ item }) => (
            <GoalItem
              onUpdate={onUpdate}
              onDelete={deleteGoal}
              onDone={onDone}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 90,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: "#fff",
  },

  listOfGoals: {
    flex: 4,
    flexDirection: "column",
    textAlign: "auto",
    gap: 16,
  },
});
