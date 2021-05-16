import {
   GET_USER,
   CREATE_USER,
   LOGIN_USER,
   LOGIN_ERROR,
   LOGOUT,
   REGISTER_ERROR,
} from "../actions/user";
import Cookies from "js-cookie";

const initialState = {
   user: {},
   userId: 2,
   token: "",
   errorLogin: "",
   errorRegister: "",
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return { ...state, user: action.user };
      case LOGIN_USER:
         Cookies.set("token", action.result.token);
         return {
            ...state,
            token: action.result.token,
            user: { ...action.result.user },
            errorMessage: "",
         };
      case LOGIN_ERROR:
         return { ...state, errorLogin: action.result };
      case REGISTER_ERROR:
         return { ...state, errorRegister: action.result };
      case LOGOUT:
         Cookies.remove("token");
         return { ...initialState };
      default:
         return state;
   }
};
export default userReducer;
