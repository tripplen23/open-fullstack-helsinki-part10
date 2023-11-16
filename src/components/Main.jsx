import { StyleSheet, View } from "react-native";
import { Route, Routes } from "react-router-native";

import SignIn from "./SignIn";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Catching paths that don't match any previously defined path */}
        <Route path="*" element={<RepositoryList />} />
      </Routes>
    </View>
  );
};

export default Main;
