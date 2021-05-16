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
const IBANPHONETRANSACTION = gql`
   mutation sendToIbanToPhoneNumber(
      $senderId: ID!
      $amount: Float!
      $email: String
      $phonenumber: Int
   ) {
      sendToIbanToPhoneNumber(
         senderId: $senderId
         amount: $amount
         email: $email
         phonenumber: $phonenumber
      ) {
         id
      }
   }
`;

export { CREATETRANSACTION, IBANPHONETRANSACTION };
