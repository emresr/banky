import { GETUSER, GETLAST10, CHECKTOKEN } from "../../gql/user/query";
import { LOGIN, SIGNUP } from "../../gql/user/mutation";

import getClient from "../../apollo/apollo";
export const GET_USER = "GET_USER";
export const GET_LAST10 = "GET_LAST10";

export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";

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
export const getLast10 = (id) => {
   return async (dispatch, getState) => {
      getClient()
         .query({
            query: GETLAST10,
            variables: { id: id },
         })
         .then((res) => {
            if (res.data) {
               console.log(res.data);
               dispatch({
                  type: GET_LAST10,
                  last10: res.data.getLast10Transactions,
               });
            }
         });
   };
};
export const signup = (username, email, password) => {
   return async (dispatch, getState) => {
      getClient()
         .mutate({
            mutation: SIGNUP,
            variables: {
               username: username,
               email: email,
               password: password,
            },
         })
         .then((res) => {
            if (res.data) {
               return dispatch({
                  type: LOGIN_USER,
                  result: res.data.createUser,
               });
            }
            return dispatch({
               type: REGISTER_ERROR,
               result: res.errors[0].message,
            });
         })
         .catch((err) => {
            return dispatch({
               type: REGISTER_ERROR,
               result:
                  "kullanıcı adı, e-posta veya telefon numarası kayıtlıdır.",
            });
         });
   };
};

export const login = (email, password) => {
   return async (dispatch, getState) => {
      dispatch({ type: LOGIN_ERROR, result: "" });
      console.log(email, password);
      getClient()
         .mutate({
            mutation: LOGIN,
            variables: {
               email,
               password,
            },
         })
         .then((res) => {
            console.log(res);
            if (res.data) {
               dispatch({ type: LOGIN_USER, result: res.data.login });
            } else {
               dispatch({ type: LOGIN_ERROR, result: res.errors[0].message });
            }
         })
         .catch((err) => {
            dispatch({
               type: LOGIN_ERROR,
               result: "kullanıcı adı veya şifre yanlış",
            });
         });
   };
};
export const checkToken = (token) => {
   console.log("checkliyorum1", token);

   return async (dispatch) => {
      getClient()
         .query({
            query: CHECKTOKEN,
            variables: {
               token,
            },
         })
         .then((res) => {
            console.log("checkliyorum", res.data.checkToken);
            dispatch({
               type: LOGIN_USER,
               result: { token, user: res.data.checkToken },
            });
         })
         .catch((err) => {
            console.log(err);
            return err;
         });
   };
};
export const logoutUser = () => {
   return { type: LOGOUT };
};
