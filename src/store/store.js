import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { songReducer } from "./reducers/songReducer";
import { authReducer } from "./reducers/authReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  songs: songReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
