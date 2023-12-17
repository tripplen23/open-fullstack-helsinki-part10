import { useMutation } from "@apollo/client";

import { AUTHORIZE_USER } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, { data }] = useMutation(AUTHORIZE_USER);
  console.log("Data mutation:", data);

  const signIn = async ({ username, password }) => {
    try {
      const result = await mutate({ variables: { username, password } });

      // Check for errors in the result
      if (result && result.errors) {
        throw new Error(result.errors[0].message);
      }

      return result;
    } catch (error) {
      throw new Error("Authentication failed");
    }
  };

  return [signIn, data];
};

export default useSignIn;
