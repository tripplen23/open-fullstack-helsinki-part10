import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackGroundColor,
    paddingBottom: Constants.statusBarHeight,
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  containerItem: {
    marginRight: 15,
    flexGrow: 1,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab style={styles.containerItem} to="/" text="Repositories" />
      <AppBarTab style={styles.containerItem} to="/signin" text="Sign in" />
    </View>
  );
};

export default AppBar;
