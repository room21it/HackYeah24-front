import mainClient from "~/api/mainClient";

import { useMutation } from "@tanstack/react-query";

type StepsFromLink = {
  onSuccess?: (recipeGuid: string) => void;
  onPending?: () => void;
};

const useStepsFromLink = ({ onSuccess = undefined, onPending = undefined }: StepsFromLink) => {
  return useMutation({
    mutationFn: async (link: string) => {
      const response = await mainClient.POST("/Recipes/addbylink", {
        body: link,
      });

      if (response.data) {
        return response.data;
      } else {
        return Promise.reject();
      }
    },
    onSuccess: onSuccess,
    onMutate: onPending,
  });
};

export default useStepsFromLink;

async function mockGetSteps() {
  return new Promise((ok) => {
    setTimeout(() => {
      ok({
        id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        name: "MokoweDane",
        nutriens: {
          id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
          calories: 0,
          macroElements: {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            protein: {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              quantityPerGram: 0,
            },
            carbohydrate: {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              quantityPerGram: 0,
            },
            fat: {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              quantityPerGram: 0,
            },
          },
        },
        ingredients: [
          {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "string",
            isAllergen: true,
          },
        ],
        steps: [
          {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            title: "string",
            startCondition: {
              id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
              prerequisiteStepIds: [0],
            },
            duration: 10,
          },
        ],
        allergens: [
          {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            allergenType: 0,
            ingredients: [
              {
                id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                name: "string",
                isAllergen: true,
              },
            ],
          },
        ],
      });
    }, 1000);
  });
}
