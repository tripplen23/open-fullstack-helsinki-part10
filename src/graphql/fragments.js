import { gql } from "@apollo/client";

export const REPOSITORY_BASE_FIELDS = gql`
  fragment RepositoryBaseFields on Repository {
    id
    name
    ownerName
    fullName
    stargazersCount
    folksCount
    url
    ownerAvatarUrl
    description
    language
    createdAt
  }
`;

export const USER_BASE_FIELDS = gql`
  fragment UserBaseFields on User {
    id
    username
    createAt
  }
`;
