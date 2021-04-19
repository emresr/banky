import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import userReducer from "./reducers/userReducer";
import cardReducer from "./reducers/cardReducer";
import accountReducer from "./reducers/accountReducer";

const rootReducer = combineReducers({
   user: userReducer,
   card: cardReducer,
   accounts: accountReducer,
});

const makeStore = (context) =>
   createStore(rootReducer, applyMiddleware(ReduxThunk));

export const wrapper = createWrapper(makeStore, { debug: false });
