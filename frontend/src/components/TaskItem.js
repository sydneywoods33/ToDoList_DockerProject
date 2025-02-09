import React from "react";
import { View, Text, StyleSheet } from "react-native";

// reusable component to display a task item

const TaskItem = ({ task }) => { // takes a task object as a prop
  return (
    <View style={styles.taskContainer}> 
      <Text style={styles.taskTitle}>{task.title}</Text> {/* display task title */}
      <Text style={styles.taskStatus}>{task.status ? "✅ Completed" : "❌ Pending"}</Text> {/* display task status */}
    </View>
  );
};

// styling for component
const styles = StyleSheet.create({
  taskContainer: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  taskStatus: {
    fontSize: 14,
    color: "gray",
  },
});

export default TaskItem;