import { GETUSER } from "../../gql/user/query";
import getClient from "../../apollo/apollo";

export const GET_USER = "GET_USER";

export const getUser = (id) => {
   return async (dispatch, getState) => {
      getClient()
         .query({
            query: GETUSER,
            variables: { id: id },
         })
         .then((res) => {
            if (res.data) {
               dispatch({ type: GET_USER, user: res.data.user });
            }
         });
   };
};
