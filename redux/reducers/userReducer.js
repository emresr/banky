import {
   GET_USER,
   CREATE_USER,
   LOGIN_USER,
   LOGIN_ERROR,
   LOGOUT,
   REGISTER_ERROR,
   GET_LAST10,
} from "../actions/user";
import Cookies from "js-cookie";

const initialState = {
   user: {},
   token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYyODYzMDMwMn0.RDIbS4j9uUXNsB6F9NZgGdGqiP2aOXUqDVMdsc2wY9U",
   errorLogin: "",
   errorRegister: "",
   last10: [],
};
//res.data.login;
const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return { ...state, user: action.user };
      case GET_LAST10:
         return { ...state, last10: action.last10 };
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
