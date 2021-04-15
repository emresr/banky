import { GET_CARD } from "../actions/card";
const initialState = {
   card: {},
};

const cardReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_CARD:
         return { ...state, card: action.card };
      default:
         return state;
   }
};
export default cardReducer;
