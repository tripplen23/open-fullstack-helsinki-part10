import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import SignUpForm from "./SignUpForm";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .min(1, "Minimum length is 1")
    .max(30, "Maximum length is 30"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Minimum length is 5")
    .max(50, "Maximum length is 50"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "password do not match")
    .required("Password confirmation is required"),
});

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);

    await signUp({ username, password });
    await signIn({ username, password });
    navigate("/", { replace: true });
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;
