import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
//!reducers
import { todoReducer } from "./reducers/todoReducer";

//! combina todos los reducers
const reducer = combineReducers({ todosList: todoReducer });

// !configuracion de persistor
const persistConfig = {
  key: "root",
  storage: storage,
  whiteList: ["todosList"],
};

const rootReducer = persistReducer(persistConfig, reducer);

//! agrega middlewares a nuestras acciones
const middleware = [];

//! creamos el store y le agregamos el compose para usar en el naveagdor el react redux
export const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);
