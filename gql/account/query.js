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
         balance
         cards {
            id
         }
         sended {
            id
            amount
            createdAt
         }
         received {
            id
            amount
            createdAt
         }
      }
   }
`;

export { GETACCOUNTS, GETACCOUNT };
