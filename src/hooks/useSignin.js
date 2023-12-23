import { useApolloClient, useMutation } from "@apollo/client";

import { AUTHENTICATE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHENTICATE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  console.log("Data mutation:", result);

  const signIn = async ({ username, password }) => {
    const credentials = { username, password };

    const payload = await mutate({ variables: { credentials } });
    const { data } = payload;

    if (data?.authenticate) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
      apolloClient.resetStore();
    }

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;

// Integrate the storage to the useSignIn hook. To achieve this,the hook must be able to access token storage instance we have initialized in the App component.
