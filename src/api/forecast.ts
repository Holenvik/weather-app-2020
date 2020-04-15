import api from "axios-config";

export const getForecast = (payload: string) =>
  api.get(
    `/weather?q=${payload}&units=metric&appid=a0a7d7eaf5b391ca0b41647fee93864a`
  );
