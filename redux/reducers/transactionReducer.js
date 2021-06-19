import { GET_TRANSACTION } from "../actions/transaction";
const initialState = {
   transaction: {},
};

const transactionReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_TRANSACTION:
         return { ...state, transaction: action.transaction };
      default:
         return state;
   }
};
export default transactionReducer;
