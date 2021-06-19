import { gql } from "@apollo/client";

const CREATETRANSACTION = gql`
   mutation CreateTransaction(
      $senderId: ID!
      $receiverId: ID!
      $amount: Float!
      $note: String
   ) {
      createTransaction(
         senderId: $senderId
         receiverId: $receiverId
         amount: $amount
         note: $note
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
      $note: String
   ) {
      sendToIbanToPhoneNumber(
         senderId: $senderId
         amount: $amount
         email: $email
         phonenumber: $phonenumber
         note: $note
      ) {
         id
      }
   }
`;

export { CREATETRANSACTION, IBANPHONETRANSACTION };
