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
         }
         received {
            id
            amount
         }
      }
   }
`;

export { GETACCOUNTS, GETACCOUNT };
