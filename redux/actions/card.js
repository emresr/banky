import { GETCARD } from "../../gql/card/query";
import getClient from "../../apollo/apollo";

export const GET_CARD = "GET_CARD";

export const getCard = (id) => {
   return async (dispatch, getState) => {
      console.log(id);
      getClient()
         .query({
            query: GETCARD,
            variables: { id: id },
         })
         .then((res) => {
            console.log("red", res);
            if (res.data) {
               dispatch({ type: GET_CARD, card: res.data.card });
            }
         })
         .catch((err) => {
            console.error(err);
         });
   };
};
