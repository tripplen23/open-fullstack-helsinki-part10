import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  const { error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      // console.log("GraphQL data received:", data);
      setRepositories(data.repositories);
    },
  });

  // console.log("useRepositories hook executed. Repositories:", repositories);

  return { repositories, loading, error };
};
export default useRepositories;
