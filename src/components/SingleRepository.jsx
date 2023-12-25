import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useParams } from "react-router-native";
import * as Linking from "expo-linking";

import Button from "./Button";
import RepositoryItem from "./RepositoryItem";
import useRepository from "../hooks/useRepository";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 15,
  },
  openInGithubContainer: {
    marginTop: 10,
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

  const { repository, loading, error } = useRepository(id);
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.error("Error fetching repository:", error);
    return <Text>Error fetching repository</Text>;
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
    </View>
  );
};

export default SingleRepository;
