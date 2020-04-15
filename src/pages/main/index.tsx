import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";

import { Select } from "components/select";

import * as actions from "store/actions/forecast";
import {
  selectForecast,
  selectForecastLoadingStatus,
  selectForecastError,
} from "store/selectors/forecast";

import { LOADING_STATUSES } from "data/constants";

export const MainPage = () => {
  const dispatch = useDispatch();
  const [cityForSearch, setCityForSearch] = useState("");

  const forecast = useSelector(selectForecast);
  const forecastLoadingStatus = useSelector(selectForecastLoadingStatus);
  const forecastError = useSelector(selectForecastError);

  useEffect(() => {
    if (forecastError.length) {
      alert(forecastError);
      dispatch(actions.setForecastError(""));
    }
  }, [forecastError]);

  const isLoading = forecastLoadingStatus === LOADING_STATUSES.LOADING;
  const canShowForecast = Boolean(Object.keys(forecast).length) && !isLoading;

  const options = JSON.parse(localStorage.getItem("cities") || "[]");

  const searchForecast = (e: any) => {
    e.preventDefault();
    dispatch(actions.getForecast(cityForSearch));
    setCityForSearch("");
  };

  return (
    <div className={style.wrapper}>
      <h1>Weather app</h1>
      <form onSubmit={searchForecast} className={style.weatherFormWrapper}>
        <Select
          name={"City"}
          value={cityForSearch}
          options={options}
          onChange={(e: any) => {
            setCityForSearch(e.target.value);
          }}
        />
        <button onClick={() => {}}>Search</button>
      </form>
      {isLoading && <span>Loading...</span>}
      {canShowForecast && "city" in forecast && (
        <div className={style.weatherInfo}>
          <h2>{forecast.city}</h2>
          <h2>{forecast.temp}&#8451;</h2>
        </div>
      )}
    </div>
  );
};
