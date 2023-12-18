import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";

import Main from "./src/components/Main";

import createApolloClient from "./src/utils/apolloClient"; // Storage instance.
import AuthStorage from "./src/utils/authStorage"; // Authentication storage for storing user's access token.
import AuthStorageContext from "./src/contexts/AuthStorageContext"; // Provide the storage instance to the descendants of the context.

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
