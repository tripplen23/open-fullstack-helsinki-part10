import React from "react";
import { View, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const SignIn = () => {
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.signInText}>The sign-in view</Text>
    </View>
  );
};

export default SignIn;
