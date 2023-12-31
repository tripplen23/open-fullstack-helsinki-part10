// Main.jsx
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";

import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CreateReview from "./CreateReview";
import MyReviews from "./MyReviews";
import RepositoryList from "./RepositoryList";
import SingleRepository from "./SingleRepository";
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
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/repositories/:id" element={<SingleRepository />} />
        <Route path="/create-a-review" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviews />} />
        {/* Catching paths that don't match any previously defined path */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
