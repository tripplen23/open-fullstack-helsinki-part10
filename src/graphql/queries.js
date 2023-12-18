import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query authorizedUser {
    me {
      id
      username
    }
  }
`;
