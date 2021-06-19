import { gql } from "@apollo/client";

const GETTRANSACTION = gql`
   query GetTransation($id: ID!) {
      transaction(id: $id) {
         id
         note
         senderId
         amount
         createdAt
         receiverId
         newSenderBalance
         newReceiverBalance
      }
   }
`;

export { GETTRANSACTION };
