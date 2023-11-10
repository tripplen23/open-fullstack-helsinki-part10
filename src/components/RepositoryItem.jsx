import { Text, View } from "react-native";

const RepositoryItem = ({ item }) => {
  return (
    // Customize the rendering of each repository item here
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Describtion: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Starts: {item.stargazersCount}</Text>
      <Text>Folks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
