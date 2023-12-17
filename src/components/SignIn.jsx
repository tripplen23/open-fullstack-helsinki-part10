import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import useSignin from "../hooks/useSignin";

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
          name="username"
          placeholder="Username"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.fieldContainer}>
        {/* Password Formik text input */}
        <FormikTextInput
          name="password"
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <Button onPress={onSubmit}>Sign in</Button>
    </View>
  );
};

// TODO: Sign in logic
const SignIn = () => {
  const [signIn] = useSignin();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const result = await signIn({ username, password });
      console.log("Data is: ", result.data);
    } catch (error) {
      console.error("Error is: ", error);
    }
  };

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

export default SignIn;
