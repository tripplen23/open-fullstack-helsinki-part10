import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 15,
    color: "white",
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.tab}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
