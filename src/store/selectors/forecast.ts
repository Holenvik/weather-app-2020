import { Store } from "store";
import { LOADING_STATUSES } from "data/constants";

const forecastSelector = (state: Store) => state.ForecastReducer;

export const selectForecast = (
  state: Store
): { city: string; temp: string } | {} => {
  const forecast = forecastSelector(state).data;
  return Object.keys(forecast).length
    ? {
        city: forecast.name,
        temp: forecast.main.temp,
      }
    : {};
};

export const selectForecastLoadingStatus = (state: Store): LOADING_STATUSES =>
  forecastSelector(state).status;

export const selectForecastError = (state: Store): string =>
  forecastSelector(state).error;
