import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id) => {
  console.log(id);
  const [repository, setRepository] = useState();

  const { error, loading } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      console.log(data);
      setRepository(data.repository);
    },
  });

  return { repository, loading, error };
};

export default useRepository;
