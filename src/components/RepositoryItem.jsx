import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  repositoryItem: {
    backgroundColor: "white",
    padding: 10,
  },
  infoContainer: {
    marginLeft: 70,
    marginTop: -52,
    marginBottom: 10,
    flexGrow: 1,
  },
  infoItem: {
    marginTop: 3,
  },
  languageTag: {
    backgroundColor: "#0366d6",
    color: "white",
    padding: 5,
    alignSelf: "flex-start",
  },
  flexContainer: {
    flexDirection: "row",
  },
  flexItem: {
    flexGrow: 1,
    textAlign: "center",
  },
});

// TODO: Format counting function:
const formatCount = (count) => {
  if (count > 1000) {
    return (count / 1000).toFixed(1) + "k";
  } else {
    return count.toString();
  }
};

const RepositoryItem = ({ item }) => {
  return (
    // Customize the rendering of each repository item here
    <View style={styles.repositoryItem}>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.infoContainer}>
        <Text fontWeight="bold" style={styles.infoItem}>
          {item.fullName}
        </Text>
        <Text color="textSecondary" style={styles.infoItem}>
          {item.description}
        </Text>
        <Text style={[styles.languageTag, styles.infoItem]}>
          {item.language}
        </Text>
      </View>
      <View style={styles.flexContainer}>
        <Text style={styles.flexItem}>
          {formatCount(item.stargazersCount)}
          {"\n"}Stars
        </Text>
        <Text style={styles.flexItem}>
          {formatCount(item.forksCount)}
          {"\n"}Folks
        </Text>
        <Text style={styles.flexItem}>
          {item.reviewCount}
          {"\n"}Reviews
        </Text>
        <Text style={styles.flexItem}>
          {item.ratingAverage}
          {"\n"}Rating
        </Text>
      </View>
    </View>
  );
};

export default RepositoryItem;
