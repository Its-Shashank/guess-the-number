import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../utils/colors";

function Header() {
  return (
    <View style={styles.screen}>
      <Text style={styles.font}>Guess a Number</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 50,
  },
  font: {
    fontSize: 20,
  },
});
export default Header;
