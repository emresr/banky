import { gql } from "@apollo/client";

const GETCARD = gql`
   query GetCard($id: ID!) {
      card(id: $id) {
         id
         account {
            id
            iban
         }
      }
   }
`;

export { GETCARD };
