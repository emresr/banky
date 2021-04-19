import { GET_ACCOUNTS, GET_ACCOUNT } from "../actions/account";
const initialState = {
   accounts: [],
   account: {},
};

const accountReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ACCOUNTS:
         return { ...state, accounts: action.accounts };
      case GET_ACCOUNT:
         return { ...state, account: action.account };
      default:
         return state;
   }
};
export default accountReducer;
