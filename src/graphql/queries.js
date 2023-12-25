import { gql } from "@apollo/client";
import { REPOSITORY_BASE_FIELDS, USER_BASE_FIELDS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
      edges {
        node {
          ...repositoryBaseFields
          reviewCount
          stargazersCount
        }
      }
    }
  }

  ${REPOSITORY_BASE_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
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
      url
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query authorizedUser {
    me {
      ...userBaseFields
    }
  }

  ${USER_BASE_FIELDS}
`;
