import { gql } from "@apollo/client";

const CREATECARD = gql`
   mutation CreateCard($accountId: ID!) {
      createCard(accountId: $accountId) {
         id
      }
   }
`;

export { CREATECARD };
