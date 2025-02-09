import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { fetchTasks, createTask, updateTask, deleteTask } from "../api/api";
import TaskItem from "../components/TaskItem"; // Import TaskItem component

// Main Screen --> displays title and list of tasks from backend server
// - managed loading state
// - fetches tasks from backend server TaskItem component

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks()
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching tasks:", error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item._id.toString()}
          renderItem={({ item }) => <TaskItem task={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: "#f5f5f5", 
    justifyContent: "center" 
  },
  title: { 
    fontSize: 24, 
    fontWeight: "bold", 
    marginBottom: 20, 
    textAlign: "center", 
    color: "#333", 
    marginTop: 50 
  },
});

export default HomeScreen;