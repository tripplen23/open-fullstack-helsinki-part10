import { useMutation } from "@apollo/client";
import { LOGGIN_USER } from "../graphql/mutations";
// import { useAuthStorage } from "../hooks/useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGGIN_USER);
  // eslint-disable-next-line no-unused-vars
  // const authStorage = useAuthStorage();

  console.log("Data mutation:", result);

  const signIn = async ({ username, password }) => {
    try {
      const data = await mutate({ variables: { username, password } });

      // Check for errors in the result
      if (data && data.errors) {
        throw new Error(data.errors[0].message);
      }

      return result;
    } catch (data) {
      throw new Error("Authentication failed");
    }
  };

  return [signIn, result];
};

export default useSignIn;

// Integrate the storage to the useSignIn hook. To achieve this,the hook must be able to access token storage instance we have initialized in the App component.
