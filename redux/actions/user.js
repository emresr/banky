import { GETUSER, GETLAST10, CHECKTOKEN, LMAO } from "../../gql/user/query";
import { LOGIN, SIGNUP } from "../../gql/user/mutation";
import { gql } from "@apollo/client";

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
               dispatch({
                  type: GET_LAST10,
                  last10: res.data.getLast10Transactions,
               });
            }
         });
   };
};
export const signup = (name, email, password) => {
   console.log("asdksd");
   return async (dispatch, getState) => {
      await getClient()
         .mutate({
            mutation: SIGNUP,
            variables: {
               name,
               email,
               password,
            },
         })
         .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.signup.token);
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
            console.log(err);
            return dispatch({
               type: REGISTER_ERROR,
               result: " email already registered.",
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
            console.log(res);
            localStorage.setItem("token", res.data.login.token);
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
   return async (dispatch) => {
      getClient()
         .query({
            query: CHECKTOKEN,
            variables: {
               token,
            },
         })
         .then((res) => {
            dispatch({
               type: LOGIN_USER,
               result: { token, user: res.data.checkToken },
            });
         })
         .catch((err) => {
            return err;
         });
   };
};
export const logoutUser = () => {
   return { type: LOGOUT };
};
