import { all } from "@redux-saga/core/effects";

import { forecastSaga } from "./forecast";

export function* rootSaga() {
  yield all([forecastSaga()]);
}
