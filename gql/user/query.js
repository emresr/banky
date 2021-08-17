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
const GETLAST10 = gql`
   query GetLast10($id: ID!) {
      getLast10Transactions(id: $id) {
         id
         createdAt
         amount
         newSenderBalance
         newReceiverBalance
      }
   }
`;
const CHECKTOKEN = gql`
   query {
      me {
         id
      }
   }
`;
