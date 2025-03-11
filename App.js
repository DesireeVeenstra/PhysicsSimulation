import * as React from "react";
import { View, StyleSheet } from "react-native";
import { GameEngine } from "react-native-game-engine";
import entities from "./Entities";
import Physics from "./Physics";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <View style={styles.container}>
      <GameEngine systems={[Physics]} entities={entities()} style={styles.gameContainer}>
        <StatusBar style="auto" />
      </GameEngine>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
