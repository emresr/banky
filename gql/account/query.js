import { gql } from "@apollo/client";

const GETACCOUNTS = gql`
   query {
      accounts {
         id
      }
   }
`;
const GETACCOUNT = gql`
   query GetAccount($id: ID!) {
      account(id: $id) {
         id
         iban
         cards {
            id
         }
      }
   }
`;

export { GETACCOUNTS, GETACCOUNT };
