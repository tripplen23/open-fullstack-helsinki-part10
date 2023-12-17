import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation {
    createUser(user: { username: "myusername", password: "mypassword" }) {
      id
      username
    }
  }
`;

export const AUTHORIZE_USER = gql`
  mutation authorize($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;
