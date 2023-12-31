import { useState } from "react";
import { useQuery } from "@apollo/client";

import { GET_REVIEWS } from "../graphql/queries";

const useReviews = (id) => {
  // console.log(id);
  const [reviews, setReviews] = useState();

  const { error, loading } = useQuery(GET_REVIEWS, {
    variables: { id },
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      // console.log(data);
      setReviews(data.repository.reviews.edges);
    },
  });

  return { reviews, loading, error };
};

export default useReviews;
