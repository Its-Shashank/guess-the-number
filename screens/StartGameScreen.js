import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Number from "../components/Number";
import colors from "../utils/colors";

const confirmedOutput = (confirmed, selectedValue, onStartGame) => {
  if (confirmed) {
    return (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <Number>{selectedValue}</Number>
        <Button title='START GAME!' onPress={onStartGame} />
      </Card>
    );
  }
};

function StartGameScreen(props) {
  const [value, setValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const handleValueChange = input => {
    setValue(input.replace(/[^0-9]/g, ""));
  };
  const resetInputHandler = () => {
    setValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedValue(value);
    setValue("");
    Keyboard.dismiss();
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <Text style={{ fontSize: 15 }}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Input
            style={styles.input}
            autoCapitalize='none'
            autoCorrect={false}
            blurOnSubmit
            keyboardType='number-pad'
            maxLength={2}
            value={value}
            onChangeText={handleValueChange}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                color={colors.secondary}
                onPress={resetInputHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title='Confirm'
                color={colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput(confirmed, selectedValue, props.onStartGame)}
      </View>
    </TouchableWithoutFeedback>
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
  input: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer: {
    marginVertical: 10,
  },
});
export default StartGameScreen;
