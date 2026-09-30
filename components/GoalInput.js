import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";

// export const GoalInput = ({ goalInputHandler, goalValue, addGoalHandler }) => {
export const GoalInput = (props) => {
  const [goalValue, setGoalValue] = React.useState("");

  const goalInputHandler = (enteredText) => {
    setGoalValue(enteredText);
  };

  function addGoalHandler() {
    // Forward the goalValue
    props.onAddGoal(goalValue);
    setGoalValue("");
  }

  function cancelHandler() {
    setGoalValue("");
    props.onCancel();
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal."
          onChangeText={goalInputHandler}
          value={goalValue}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" color="#b180f0" onPress={addGoalHandler} />
          <Button title="Cancel" color="#f31282" onPress={cancelHandler} />
        </View>
      </View>
    </Modal>
  );
};

// onAddGoal

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginBottom: 24,
    // borderBottomWidth: 1,
    // borderBottomColor: "#cccccc",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    marginRight: 8,
    color: "#ffffff",
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
