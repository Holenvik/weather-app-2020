import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { ForecastReducer } from "store/reducers/forecast";
import { rootSaga } from "store/sagas";

export type Store = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({ ForecastReducer });

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (process.env.NODE_ENV === "development" &&
    window !== undefined &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
