import { gql } from "@apollo/client";

const GETCARD = gql`
   query GetCard($id: ID!) {
      card(id: $id) {
         id
         account {
            id
            iban
         }

         atmdomestic
         atmabroad
         shoppingdomestic
         shoppingabroad
         ecommercedomestic
         ecommerceabroad
      }
   }
`;

export { GETCARD };
