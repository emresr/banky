import { GETACCOUNTS, GETACCOUNT } from "../../gql/account/query";
import getClient from "../../apollo/apollo";

export const GET_ACCOUNTS = "GET_ACCOUNTS";
export const GET_ACCOUNT = "GET_ACCOUNT";

export const getAccounts = () => {
   return async (dispatch, getState) => {
      if (getState().accounts.accounts.length !== 0) {
         return dispatch({
            type: GET_ACCOUNTS,
            accounts: getState().accounts,
         });
      }
      getClient()
         .query({
            query: GETACCOUNTS,
         })
         .then((res) => {
            dispatch({
               type: GET_ACCOUNTS,
               accounts: res.data.accounts,
            });
         });
   };
};

export const getAccount = (id) => {
   return async (dispatch, getState) => {
      getClient()
         .query({
            query: GETACCOUNT,
            variables: { id: id },
         })
         .then((res) => {
            if (res.data) {
               dispatch({ type: GET_ACCOUNT, account: res.data.account });
            }
         });
   };
};
