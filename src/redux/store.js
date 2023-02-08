// import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import sagas from './sagas';
import { createStore, applyMiddleware } from 'redux'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagas.forEach((saga) => sagaMiddleware.run(saga));

export default store;
