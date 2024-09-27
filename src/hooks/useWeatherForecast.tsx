import mainClient from "~/api/mainClient";

import { useQuery } from "@tanstack/react-query";

export const characterKeys = {
  detail: () => ["weatherForecast"],
};

const useWeatherForecast = () => {
  return useQuery({
    queryKey: characterKeys.detail(),
    queryFn: () => {
      return mainClient.GET("/WeatherForecast");
    },
  });
};

export default useWeatherForecast;
