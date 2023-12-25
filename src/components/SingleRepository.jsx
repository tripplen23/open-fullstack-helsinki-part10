import React from "react";
import { View, StyleSheet, Text, Pressable, FlatList } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";

import Button from "./Button";
import RepositoryItem from "./RepositoryItem";
import { ReviewItem, ItemSeparator } from "./ReviewItem";
import useRepository from "../hooks/useRepository";
import useReviews from "../hooks/useReviews";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 15,
  },
  openInGithubContainer: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  openInGithubButton: {
    paddingHorizontal: 130,
  },
});

const SingleRepository = () => {
  const { id } = useParams();
  console.log("ID: ", id);

  const {
    repository,
    loading: repoLoading,
    error: repoError,
  } = useRepository(id);

  const {
    reviews,
    loading: reviewsLoading,
    error: reviewsError,
  } = useReviews(id);

  if (repoLoading || reviewsLoading) {
    return <Text>Loading...</Text>;
  }

  if (repoError || reviewsError) {
    console.error(
      "Error fetching repository or reviews:",
      repoError,
      reviewsError
    );
    return <Text>Error fetching repository or reviews</Text>;
  }

  if (!repository) {
    return <Text>Repository not found</Text>;
  }

  return (
    <View style={styles.container}>
      <RepositoryItem repository={repository} />

      {/* Open in Github container */}
      <View style={styles.openInGithubContainer}>
        <Pressable>
          <Button
            onPress={() => {
              Linking.openURL(repository.url);
            }}
            style={styles.openInGithubButton}
          >
            Open in Github
          </Button>
        </Pressable>
      </View>
      <ItemSeparator />
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ node }) => node.id}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default SingleRepository;
