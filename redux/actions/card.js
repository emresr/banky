import { GETCARD } from "../../gql/card/query";
import getClient from "../../apollo/apollo";

export const GET_CARD = "GET_CARD";

export const getCard = (id) => {
   return async (dispatch, getState) => {
      getClient()
         .query({
            query: GETCARD,
            variables: { id: id },
         })
         .then((res) => {
            if (res.data) {
               dispatch({ type: GET_CARD, card: res.data.card });
            }
         });
   };
};
