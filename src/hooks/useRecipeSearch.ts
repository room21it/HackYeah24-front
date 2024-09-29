import mainClient from "~/api/mainClient";

import { useQuery } from "@tanstack/react-query";

export const excludedAllergens = {
  detail: (allergens: string[] | undefined) => ['recipes', allergens],
};

type StepsFromLink = {
  allergens?: string[];
  onSuccess?: () => void;
  onPending?: () => void;
};

const useRecipeSearch = ({
  allergens,
}: StepsFromLink) => {
  return useQuery({
    queryKey: excludedAllergens.detail(allergens),
    queryFn: async () => {
        const response = await mainClient.GET("/Recipes", {
        params: {
          query: {
            // @ts-ignore
            
            allergens
          },
        },
      });
      return response.data
    },
  });
};

export default useRecipeSearch;
