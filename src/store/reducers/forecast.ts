import { handleActions } from "redux-actions";

import { LOADING_STATUSES } from "data/constants";
import * as actions from "store/actions/forecast";

export type AttributeState = typeof initialState;

const initialState = {
  data: {} as any,
  status: LOADING_STATUSES.EMPTY,
  error: "",
};

export const ForecastReducer = handleActions<AttributeState, any>(
  {
    [actions.getForecast.toString()]: (state) => ({
      ...state,
      status: LOADING_STATUSES.LOADING,
    }),
    [actions.setForecast.toString()]: (state, { payload }) => ({
      ...state,
      data: payload,
      status: LOADING_STATUSES.SUCCESS,
    }),
    [actions.setForecastError.toString()]: (state, { payload }) => ({
      ...state,
      status: LOADING_STATUSES.SUCCESS,
      error: payload,
    }),
  },
  initialState
);
