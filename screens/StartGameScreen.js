import React from "react";
import { View, TextInput, Text, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import colors from "../utils/colors";

function StartGameScreen() {
  return (
    <View style={styles.screen}>
      <Text style={{ fontSize: 15 }}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <TextInput placeholder='Enter' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={colors.primary} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={colors.secondary} />
          </View>
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  button: {
    width: 100,
  },
});
export default StartGameScreen;
