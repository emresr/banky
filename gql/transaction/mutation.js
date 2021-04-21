import { gql } from "@apollo/client";

const CREATETRANSACTION = gql`
   mutation CreateTransaction(
      $senderId: ID!
      $receiverId: ID!
      $amount: Float!
   ) {
      createTransaction(
         senderId: $senderId
         receiverId: $receiverId
         amount: $amount
      ) {
         id
      }
   }
`;
export { CREATETRANSACTION };
