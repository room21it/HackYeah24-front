"use client";

import mainClient from "~/api/mainClient";
import { useQuery } from "@tanstack/react-query";
import { paths } from "~/types/api";

type Recipe = paths["/Recipes/{id}"]["get"]["responses"]["200"]["content"]["application/json"] | undefined;

export const recipeKeys = {
  current: (guid: string) => ["recipe", guid],
};

const useRecipe = (guid: string) => {
  return useQuery<Recipe>({
    queryFn: async () => {
      const response = await mainClient.GET("/Recipes/{id}", {
        params: {
          path: {
            id: guid,
          },
        },
      });

      return response.data;
    },
    queryKey: recipeKeys.current(guid),
  });
};

export default useRecipe;
