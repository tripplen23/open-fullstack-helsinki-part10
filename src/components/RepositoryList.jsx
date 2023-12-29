import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import TextInput from "./TextInput";
import { useDebounce } from "use-debounce";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const FilterText = ({ setFilterText }) => {
  return (
    <TextInput
      onChangeText={(text) => setFilterText(text)}
      placeholder="Filter repositories..."
    />
  );
};

const Dropdown = ({ setSortBy }) => {
  return (
    <Picker
      selectedValue={null}
      onValueChange={(value) => setSortBy(value)}
      style={{ height: 50, width: "100%" }}
    >
      <Picker.Item label="Select an item..." value={null} />
      <Picker.Item label="Latest repositories" value="CREATED_AT" />
      <Picker.Item label="Highest rated repositories" value="DESC" />
      <Picker.Item label="Lowest rated repositories" value="ASC" />
    </Picker>
  );
};

// TODO: For separate each Repository item
const ItemSeparator = () => <View style={styles.separator} />;

/*
export const RepositoryListContainer = ({ repositories, setSortBy }) => {
  // TODO: Get the nodes from the edges array:
  // Extract the actual repositories into the repositoryNodes variable
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      ListHeaderComponent={() => <Dropdown setSortBy={setSortBy} />}
      testID="repositoryItem"
      data={repositoryNodes}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem repository={item} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};
*/

export class RepositoryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.renderHeader = this.renderHeader.bind(this);
  }

  renderHeader() {
    const props = this.props;
    return (
      <View>
        <FilterText setFilterText={props.setFilterText} />
        <Dropdown setSortBy={props.setSortBy} />
      </View>
    );
  }

  render() {
    const repositories = this.props.repositories;
    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    return (
      <FlatList
        ListHeaderComponent={this.renderHeader}
        testID="repositoryItem"
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  }
}

const RepositoryList = () => {
  const [sortBy, setSortBy] = useState("");
  // console.log("Sort by: ", sortBy);
  const [filterText, setFilterText] = useState("");
  const [filterTextValue] = useDebounce(filterText, 500);

  const { repositories } = useRepositories(sortBy, filterTextValue);

  return (
    <RepositoryListContainer
      repositories={repositories}
      setSortBy={setSortBy}
      setFilterText={setFilterText}
    />
  );
};

export default RepositoryList;
