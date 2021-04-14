import { gql } from "@apollo/client";

const GETUSER = gql`
   query GetUser($id: ID!) {
      user(id: $id) {
         id
         email
         total
         accounts {
            id
            iban
            cards {
               id
            }
         }
      }
   }
`;

export { GETUSER };
