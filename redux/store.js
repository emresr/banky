import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import { createWrapper, HYDRATE } from "next-redux-wrapper";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
   user: userReducer,
});

const makeStore = (context) =>
   createStore(rootReducer, applyMiddleware(ReduxThunk));

export const wrapper = createWrapper(makeStore, { debug: false });
