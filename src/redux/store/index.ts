import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import errorReducers from "../reducers/error";
import loadingReducers from "../reducers/loading";
import tabReducer from "../reducers/tab";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initalState = {
  error: {
    message: "",
    code: 0,
    severity: "",
  },
  loading: false,
  activeTab: 0,
};

const fusionOfReducers = combineReducers({
  error: errorReducers,
  loading: loadingReducers,
  activeTab: tabReducer,
});

export default function configureStore() {
  return createStore(
    fusionOfReducers,
    initalState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
