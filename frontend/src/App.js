import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import HomeScreen from "./screens/HomeScreen"; // API calls

export default function App() {
  return <HomeScreen />;
}

// root component for the app, returns HomeScreen to be rendered when app is launched
