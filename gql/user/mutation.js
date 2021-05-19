import { gql } from "@apollo/client";

const SIGNUP = gql`
   mutation Signup($email: String!, $password: String!, $name: String!) {
      signup(email: $email, password: $password, name: $name) {
         token
      }
   }
`;

const LOGIN = gql`
   mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            id
            email
         }
      }
   }
`;

export { SIGNUP, LOGIN };
