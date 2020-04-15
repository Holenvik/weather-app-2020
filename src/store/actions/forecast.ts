import { createAction } from "redux-actions";

const moduleName = "WA/FORECAST";

export const getForecast = createAction(`${moduleName}/GET_FORECAST`);
export const setForecast = createAction(`${moduleName}/SET_FORECAST`);
export const setForecastError = createAction(
  `${moduleName}/SET_FORECAST_ERROR`
);
