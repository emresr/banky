import { GETUSER } from "../../gql/user/query";
import { LOGIN, SIGNUP } from "../../gql/user/mutation";

import getClient from "../../apollo/apollo";
export const GET_USER = "GET_USER";
export const LOGIN_USER = "LOGIN_USER";
export const SIGNUP_USER = "SIGNUP_USER";
export const LOGOUT = "LOGOUT";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const REGISTER_ERROR = "REGISTER_ERROR";

export const getUser = () => {
   return async (dispatch, getState) => {
      console.log(getState().user.userId);
      getClient()
         .query({
            query: GETUSER,
            variables: { id: getState().user.userId },
         })
         .then((res) => {
            if (res.data) {
               dispatch({ type: GET_USER, user: res.data.user });
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

      getClient()
         .mutate({
            mutation: LOGIN,
            variables: {
               email,

               password,
            },
         })
         .then((res) => {
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
export const logoutUser = () => {
   return { type: LOGOUT };
};
