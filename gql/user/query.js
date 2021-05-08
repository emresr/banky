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
            balance
            cards {
               id
            }
            cards {
               id
            }
            sended {
               createdAt
               amount
               newSenderBalance
            }
            received {
               createdAt
               amount
            }
         }
      }
   }
`;

export { GETUSER };
