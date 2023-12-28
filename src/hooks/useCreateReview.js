import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";

const useCreateReview = () => {
  const [mutate, payload] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repositoryName, ownerName, rating, text }) => {
    const payload = await mutate({
      variables: { repositoryName, ownerName, rating, text },
    });

    console.log("Payload at useCreateReview hook: ", payload);
    return payload;
  };

  console.log(payload);
  return [createReview, payload];
};

export default useCreateReview;
