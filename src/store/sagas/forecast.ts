import { call, put, takeLatest } from "@redux-saga/core/effects";

import * as api from "api/forecast";
import * as actions from "store/actions/forecast";
import { saveToLocalStorageArray } from "utils";

function* getForecast(action: ReturnType<typeof actions.getForecast>) {
  try {
    yield call(saveToLocalStorageArray, "cities", action.payload);
    const response = yield call(api.getForecast, action.payload);
    yield put(actions.setForecast(response.data));
  } catch (error) {
    yield put(actions.setForecastError(error.response.data?.message));
  }
}

export function* forecastSaga() {
  yield takeLatest(actions.getForecast, getForecast);
}
