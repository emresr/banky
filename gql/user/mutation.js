import { gql } from "@apollo/client";

const CREATEUSER = gql`
   mutation CreateUser($email: String!, $password: String!) {
      signup(email: $email, password: $password) {
         token
      }
   }
`;

const LOGINUSER = gql`
   mutation LoginUser($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
      }
   }
`;

export { CREATEUSER, LOGINUSER };
