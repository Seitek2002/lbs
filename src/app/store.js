import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import routerReducer from "../features/router/routerSlice";
import requestListReducer from "../features/requestList/requestListSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: routerReducer,
  requestList: requestListReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
