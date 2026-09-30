import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = ({ item, deleteGoalHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.deleteButton,
          pressed && styles.pressedItem,
        ]}
        onPress={() => deleteGoalHandler(item.id)}
        android_ripple={{ color: "#210644" }}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#5e0acc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
  goalText: {
    color: "white",
    flex: 1,
    marginRight: 8,
  },
  deleteButton: {
    padding: 4,
  },
  deleteButtonText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
