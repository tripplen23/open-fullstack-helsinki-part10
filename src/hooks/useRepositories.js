import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";
import parseSortBy from "../utils/parseSortBy";

const useRepositories = (sortBy, filterText) => {
  const [repositories, setRepositories] = useState();

  const sortVariables = parseSortBy(sortBy);

  const queryVariables = {
    ...sortVariables,
    searchKeyword: filterText,
  };

  const { error, loading } = useQuery(GET_REPOSITORIES, {
    variables: queryVariables,
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
