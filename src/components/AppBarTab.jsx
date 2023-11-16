import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  tab: {
    paddingTop: 25,
    color: "white",
  },
});

const AppBarTab = ({ to, text }) => {
  return (
    <Pressable>
      <Link to={to}>
        <Text style={styles.tab}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;
