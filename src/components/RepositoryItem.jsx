import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import formatInThousands from "../utils/fotmatInThousands";
import Button from "./Button";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 15,
  },
  topContainer: {
    flexDirection: "row",
    marginBottom: 15,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  avatarContainer: {
    flexGrow: 0,
    marginRight: 20,
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
  nameText: {
    marginBottom: 5,
  },
  descriptionText: {
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: theme.roundness,
  },
  countItem: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
  languageContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
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

// TODO: Count items in bottom container
const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text
        testID="repositoryCounts"
        style={styles.countItemCount}
        fontWeight="bold"
      >
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Avatar container */}
        <View style={styles.avatarContainer}>
          <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        </View>
        {/* Content container */}
        <View style={styles.contentContainer}>
          {/* Full name */}
          <Text
            testID="repositoryName"
            style={styles.nameText}
            fontWeight="bold"
            fontSize="subheading"
            numberOfLines={1}
          >
            {fullName}
          </Text>

          {/* Description */}
          <Text
            testID="repositoryDescription"
            style={styles.descriptionText}
            color="textSecondary"
          >
            {description}
          </Text>

          {/* Language */}
          {language ? (
            <View style={styles.languageContainer}>
              <Text testID="repositoryLanguage" style={styles.languageText}>
                {language}
              </Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* Bottom container */}
      <View style={styles.bottomContainer}>
        <CountItem count={stargazersCount} label="Stars" />
        <CountItem count={forksCount} label="Folks" />
        <CountItem count={reviewCount} label="Reviews" />
        <CountItem count={ratingAverage} label="Rating" />
      </View>

      {/* Open in Github container */}
      <View style={styles.openInGithubContainer}>
        <Pressable>
          <Button
            onPress={() => {
              /* Add your onPress logic here */
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

export default RepositoryItem;
