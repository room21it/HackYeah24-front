import mainClient from "~/api/mainClient";

import { useMutation } from "@tanstack/react-query";

type StepsFromDesc = {
  onSuccess?: () => void;
  onPending?: () => void;
};

const useStepsFromDesc = ({ onSuccess = undefined, onPending = undefined }: StepsFromDesc) => {
  return useMutation({
    mutationFn: () => {
      return mockGetSteps();
      // return mainClient.GET("/WeatherForecast");
    },
    onSuccess,
    onMutate: onPending,
  });
};

export default useStepsFromDesc;

async function mockGetSteps() {
  return new Promise((ok) => {
    setTimeout(() => {
      ok({
        steps: [
          {
            step: 1,
            description: "Zaparz kawę, dodaj likier i ostudź",
            ingredients: [
              {
                name: "kawa",
                amount: "350 ml",
              },
              {
                name: "likier amaretto lub Maraschino",
                amount: "25 ml",
              },
            ],
            time: "10 minut (zaparzenie i ostudzenie)",
          },
          {
            step: 2,
            description: "Oddziel żółtka od białek",
            ingredients: [
              {
                name: "jajka",
                amount: "2 jajka + 2 żółtka",
              },
            ],
            time: "5 minut",
          },
          {
            step: 3,
            description: "Ubij żółtka z cukrem na puszysty krem",
            ingredients: [
              {
                name: "żółtka",
                amount: "4 szt.",
              },
              {
                name: "cukier puder",
                amount: "70 g",
              },
            ],
            time: "7 minut (ubijanie na puszysty krem)",
          },
          {
            step: 4,
            description: "Dodaj mascarpone do ubitych żółtek",
            ingredients: [
              {
                name: "mascarpone",
                amount: "500 g",
              },
            ],
            time: "3-5 minut (dodawanie mascarpone w porcjach)",
          },
          {
            step: 5,
            description: "Ubij białka na sztywną pianę i połącz z kremem",
            ingredients: [
              {
                name: "białka",
                amount: "2 szt.",
              },
              {
                name: "sól",
                amount: "szczypta",
              },
            ],
            time: "5 minut (ubijanie białek)",
          },
          {
            step: 6,
            description: "Nasącz biszkopty w kawie i układaj w naczyniu",
            ingredients: [
              {
                name: "biszkopty Savoiardi",
                amount: "300 g",
              },
              {
                name: "kawa z likierem",
                amount: "350 ml",
              },
            ],
            time: "5 minut (nasączanie i układanie)",
          },
          {
            step: 7,
            description: "Posyp biszkopty kakao i wyłóż krem",
            ingredients: [
              {
                name: "kakao",
                amount: "3 łyżki",
              },
              {
                name: "krem",
                amount: "połowa",
              },
            ],
            time: "3 minuty",
          },
          {
            step: 8,
            description: "Powtórz warstwy biszkoptów, kremu i kakao",
            ingredients: [
              {
                name: "biszkopty Savoiardi",
                amount: "reszta",
              },
              {
                name: "krem",
                amount: "reszta",
              },
              {
                name: "kakao",
                amount: "3 łyżki",
              },
            ],
            time: "5 minut",
          },
          {
            step: 9,
            description: "Schłodź w lodówce",
            ingredients: [],
            time: "3 godziny (lub całą noc)",
          },
        ],
        total_time: "3 godziny 40 minut (łącznie z chłodzeniem)",
      });
    }, 500);
  });
}
