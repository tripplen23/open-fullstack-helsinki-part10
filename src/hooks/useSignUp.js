import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, payload] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const payload = await mutate({
      variables: { username, password },
    });

    console.log("Payload at useSignup hook: ", payload);
    return payload;
  };

  console.log(payload);
  return [signUp, payload];
};

export default useSignUp;
