import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../graphql/queries";
import { ReviewItem, ItemSeparator } from "./ReviewItem";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 15,
  },
});

const MyReviews = () => {
  const { data, loading, error } = useQuery(GET_CURRENT_USER, {
    variables: {
      includeReviews: true,
    },
    fetchPolicy: "cache-and-network",
  });
  console.log("GraphQL response: ", data);

  if (loading) {
    return <Text>Loading... </Text>;
  }

  if (error) {
    console.error("Error fetching user's reviews:", error);
    return <Text>Error fetching reviews</Text>;
  }

  let reviews = [];

  if (data && data.me && data.me.reviews && data.me.reviews.edges) {
    reviews = data.me.reviews.edges;
  }

  console.log("User's review is: ", reviews);

  return (
    <View style={styles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={(item) => item.node.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default MyReviews;
