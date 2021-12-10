import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

import { useDatabaseConnection } from "../data/connection";

import Todo from "./Todo";

interface TodoItem {
  id: number;
  task: string;
  task_description: string;
}

const TodoList: React.FC = () => {
  const { todosRepository } = useDatabaseConnection();

  const [newTask, setNewTask] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const handleCreateTodo = useCallback(async () => {
    const todo = await todosRepository.create({
      task: newTask,
      task_description: newDescription,
    });

    setTodos((current) => [...current, todo]);

    setNewTask("");
    setNewDescription("");
  }, [newTask, newDescription, todosRepository]);

  const handleDeleteTodo = useCallback(
    async (id: number) => {
      await todosRepository.delete(id);

      setTodos((current) => current.filter((todo) => todo.id !== id));
    },
    [todosRepository]
  );

  useEffect(() => {
    todosRepository.getAll().then(setTodos);
  }, [todosRepository]);

  return (
    <View style={styles.container}>
      <View style={styles.newTodoContainer}>
        <TextInput
          style={styles.newTodoInput}
          value={newTask}
          onChangeText={setNewTask}
        />
        <TextInput
          style={styles.newTodoInput}
          value={newDescription}
          onChangeText={setNewDescription}
        />
        <Button title="Create" onPress={handleCreateTodo} />
      </View>

      {/* <View style={styles.todosContainer}>
        {todos.map((todo) => (
          <TouchableOpacity
            key={String(todo.id)}
            onPress={() => handleToggleTodo(todo.id)}
            onLongPress={() => handleDeleteTodo(todo.id)}
          >
            <Todo task={todo.task} isToggled={todo.is_toggled} />
          </TouchableOpacity>
        ))}
      </View> */}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },

  newTodoContainer: {
    marginTop: 80,
    marginBottom: 40,
  },

  newTodoInput: {
    height: 48,
    marginBottom: 20,

    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#aaa",

    paddingHorizontal: 16,

    fontSize: 20,
  },

  todosContainer: {
    flex: 1,
  },
});
