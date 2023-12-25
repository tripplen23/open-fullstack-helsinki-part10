// ReviewItem.jsx
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { format } from "date-fns";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: "row",
  },
  ratingContainer: {
    flexGrow: 0,
    marginRight: 20,
    width: 40,
    height: 40,
    borderStyle: "solid",
    borderRadius: 20,
    borderColor: "blue",
    color: "blue",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    color: "blue",
    fontWeight: "bold",
  },
  informationContainer: {
    flex: 1,
  },
  usernameText: {
    fontWeight: "bold",
  },
  dateText: {
    color: "gray",
    marginBottom: 5,
  },
  reviewText: {
    //
  },
  // For separating each Review item
  separator: {
    backgroundColor: "rgb(225, 229, 231)",
    height: 10,
  },
});

// For separating each Review item
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  const { rating, text, createdAt, user } = review.node;

  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <Text style={styles.ratingText}>{rating}</Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.usernameText}>{user.username}</Text>
        <Text style={styles.dateText}>
          {format(new Date(createdAt), "dd.MM.yyyy")}
        </Text>
        <Text style={styles.reviewText}>{text}</Text>
      </View>
    </View>
  );
};

export { ReviewItem, ItemSeparator };
