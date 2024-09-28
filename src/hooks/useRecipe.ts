"use client";

import { useQuery } from "@tanstack/react-query";

type Recipe = {
  name: string;
};

export const recipeKeys = {
  current: () => ["recipe", "current"],
};

const useRecipe = () => {
  return useQuery({
    queryFn: () => {},
    queryKey: recipeKeys.current(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });
};

export default useRecipe;
