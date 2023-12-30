import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton } from "react-native-paper";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodolist] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {

    if(todo === ""){
      return;
    }
    setTodolist([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleDeleteTodo = (id) => {
    alert("Silmek istediğine emin misin?");
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodolist(updatedTodoList);
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map((item) => {
      if (item.id === editedTodo.id) {
        return { ...item, title: todo };
      }
      return item;
    });
    setTodolist(updatedTodos);
    setEditedTodo(null);
    setTodo("");
  };

  const renderTodos = ({ item, index }) => {
    return (
      <View style={styles.todoContainer}>
        <Text style={styles.todoText}>{item.title}</Text>
        <IconButton
          icon="pencil"
          color="#fff"
          onPress={() => handleEditTodo(item)}
        />
        <IconButton
          icon="trash-can"
          color="#fff"
          onPress={() => handleDeleteTodo(item.id)}
        />
      </View>
    );
  };

  return (
    <SafeAreaView>
      <TextInput
        style={styles.textInput}
        placeholder="Add a task"
        value={todo}
        onChangeText={(text) => {
          setTodo(text);
        }}
      />

      {editedTodo ? (
        <TouchableOpacity style={styles.button} onPress={() => handleUpdateTodo()}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={() => handleAddTodo()}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      )}

      <FlatList data={todoList} renderItem={renderTodos} />

      {todoList.length <= 0 && <Fallback />}
    </SafeAreaView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: "#1e90ff",
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 6,
    paddingVertical: 12,
    marginHorizontal: 10,
    marginVertical: 34,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#1e90ff",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 10,
  },

  todoText: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "800",
  },
});
