import React from "react";
import { StyleSheet, View, Text } from "react-native";

interface TodoProps {
  task: string;
  task_description: string;
}

const Todo: React.FC<TodoProps> = ({ task, task_description }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.todoTask]}>{task}</Text>
      <Text style={[styles.todoDescription]}>{task_description}</Text>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    alignItems: "center",
  },

  todoTask: {
    fontSize: 24,
  },

  todoDescription: {
    fontSize: 16,
  },
});
