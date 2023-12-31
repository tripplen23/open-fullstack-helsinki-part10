import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import Text from "./Text";
import theme from "../theme";
import formatInThousands from "../utils/fotmatInThousands";

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
});

// TODO: Count items
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
    id,
  } = repository;

  const navigate = useNavigate();

  const repositoryPress = () => {
    console.log("id of repo: ", id);
    navigate(`/repositories/${id}`);
  };

  return (
    <TouchableOpacity onPress={repositoryPress}>
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
            <View style={styles.languageContainer}>
              <Text testID="repositoryLanguage" style={styles.languageText}>
                {language}
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom container */}
        <View style={styles.bottomContainer}>
          <CountItem count={stargazersCount} label="Stars" />
          <CountItem count={forksCount} label="Folks" />
          <CountItem count={reviewCount} label="Reviews" />
          <CountItem count={ratingAverage} label="Rating" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RepositoryItem;
