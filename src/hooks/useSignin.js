import { useMutation } from "@apollo/client";
import { LOGGIN_USER } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const [mutate, result] = useMutation(LOGGIN_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  console.log("Data mutation:", result);

  const signIn = async ({ username, password }) => {
    try {
      const data = await mutate({ variables: { username, password } });

      // TODO: Check for errors in the result
      if (data && data.errors) {
        throw new Error(data.errors[0].message);
      }

      // TODO: Extract the access token from the result
      const accessToken = result.data.authenticate.accessToken;

      if (accessToken) {
        // TODO: Save the access token to the authentication storage
        await authStorage.setAccessToken(accessToken);
      }

      apolloClient.resetStore();
      return result;
    } catch (data) {
      throw new Error("Authentication failed");
    }
  };

  return [signIn, result];
};

export default useSignIn;

// Integrate the storage to the useSignIn hook. To achieve this,the hook must be able to access token storage instance we have initialized in the App component.
