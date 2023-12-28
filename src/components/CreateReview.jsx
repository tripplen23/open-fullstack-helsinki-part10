import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-native";
import useCreateReview from "../hooks/useCreateReview";
import * as yup from "yup";
import CreateReviewForm from "./CreateReviewForm";

const validationSchema = yup.object().shape({
  repositoryName: yup.string().required("Repository name is required"),
  ownerName: yup.string().required("Owner name is required"),
  rating: yup
    .number()
    .typeError("you must specify a number")
    .required("Rating is required")
    .min(1, "Please give a number between 1 and 100")
    .max(100, "please give number between 1 and 100"),
  text: yup.string(),
});

const initialValues = {
  repositoryName: "",
  ownerName: "",
  rating: "",
  text: "",
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview, payload] = useCreateReview();
  let navigate = useNavigate();
  console.log("Payload for create review: ", payload);

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    await createReview({
      repositoryName,
      ownerName,
      rating: Number(rating),
      text,
    });
  };

  // TODO: Navigate to the repository route where we just post a review on.
  if (payload.data) {
    let repositoryId = payload.data.createReview.repositoryId;
    navigate(`/repositories/${repositoryId}`);
  }

  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;
