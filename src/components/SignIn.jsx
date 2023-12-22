import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";

import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "white",
  },
  fieldContainer: {
    marginBottom: 15,
  },
});

const initialValues = { username: "", password: "" };

// TODO: Validation
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

// TODO: Sign in form
const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.fieldContainer}>
        {/* Username Formik text input */}
        <FormikTextInput
          testID="formikUsername"
          name="username"
          placeholder="Username"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.fieldContainer}>
        {/* Password Formik text input */}
        <FormikTextInput
          testID="formikPassword"
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Button testID="formikSubmit" onPress={onSubmit}>
        Sign in
      </Button>
    </View>
  );
};

// TODO: Sign in container
export const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

// TODO: Sign in logic
const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const result = await signIn({ username, password });
      console.log(
        "Access Token for this user is: ",
        result.data.authenticate.accessToken
      );

      if (result.data.authenticate.accessToken) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error is: ", error);
    }
  };

  return <SignInContainer onSubmit={onSubmit} />;
};

export default SignIn;
