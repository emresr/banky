import { GETTRANSACTION } from "../../gql/transaction/query";
import getClient from "../../apollo/apollo";

export const GET_TRANSACTION = "GET_CARD";

export const getTransaction = (id) => {
   return async (dispatch, getState) => {
      getClient()
         .query({
            query: GETTRANSACTION,
            variables: { id: id },
         })
         .then((res) => {
            if (res.data) {
               dispatch({
                  type: GET_TRANSACTION,
                  transaction: res.data.transaction,
               });
            }
         });
   };
};
