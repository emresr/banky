import { GET_USER } from "../actions/user";
const initialState = {
   user: {},
};

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_USER:
         return { ...state, user: action.user };
      default:
         return state;
   }
};
export default userReducer;
