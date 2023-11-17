import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { Formik } from "formik";
import FormikTextInput from "./FormikTextInput";
import * as yup from "yup";

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
  },
  signInText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  formContainer: {
    width: "95%",
    backgroundColor: "white",
  },
  formField: {
    color: "#525464",
    fontWeight: "bold",
    margin: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: "#0366d6",
    padding: 14,
    margin: 8,
    borderRadius: 5,
    alignItems: "center",
    cursor: "pointer",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const initialValues = { username: "", password: "" };

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const SignIn = () => {
  return (
    <View style={styles.signInContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <View style={styles.formContainer}>
            <FormikTextInput
              style={styles.formField}
              name="username"
              placeholder="Username"
              autoCapitalize="none"
            />
            <FormikTextInput
              style={styles.formField}
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Pressable style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign in</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignIn;
