import mainClient from "~/api/mainClient";

import { useMutation } from "@tanstack/react-query";

type StepsFromDesc = {
  onSuccess?: (recipeGuid: string) => void;
  onPending?: () => void;
};

const useStepsFromDesc = ({ onSuccess = undefined, onPending = undefined }: StepsFromDesc) => {
  return useMutation({
    mutationFn: async () => {
      // const response = await mainClient.POST("/RecipeControllers/addbytext");

      // if (response.data) {
      return "38b14ffc-f72d-4b80-a975-14953f080ec0";
      // }
    },
    onSuccess: onSuccess,
    onMutate: onPending,
  });
};

export default useStepsFromDesc;

async function mockGetSteps() {
  return new Promise((ok) => {
    setTimeout(() => {
      ok({
        id: "7e8d8bba-604b-4167-876e-9d3313ff9a61",
        name: "Puree z dyni",
        nutriens: {
          id: "af05abdb-3ee7-407f-95be-637752104748",
          calories: 1353,
          macroElements: {
            id: "e4e327c2-7923-4a43-9f94-f2052f34264a",
            protein: {
              id: "6d4a5ebc-2474-4f2f-8a04-142e5bc6f7e1",
              gramms: 38,
            },
            carbohydrate: {
              id: "9aebe2de-dbf9-418f-bba1-dae1c17ebece",
              gramms: 195,
            },
            fat: {
              id: "f0475de5-b203-43ce-892e-8dd36958d6d4",
              gramms: 44,
            },
          },
        },
        ingredients: [
          {
            id: "01fdd14b-2a61-481d-8b52-46281fe394a4",
            name: "cynamon",
            amount: 0.33,
            unit: "łyżeczki",
            allergenTypes: [],
          },
          {
            id: "1886ec09-bebf-4363-81e5-821414c78873",
            name: "jajka",
            amount: 1,
            unit: "sztuka",
            allergenTypes: ["egg"],
          },
          {
            id: "222566e3-693f-42a2-a32f-5f007727c943",
            name: "olej",
            amount: 10,
            unit: "ml",
            allergenTypes: [],
          },
          {
            id: "284e0e1f-3fc4-4e56-960f-fe3db7aa078b",
            name: "maślanka",
            amount: 200,
            unit: "ml",
            allergenTypes: ["milk"],
          },
          {
            id: "3c3f69a0-8112-482b-b842-51206de37711",
            name: "dynia Hokkaido",
            amount: 500,
            unit: "g",
            allergenTypes: [],
          },
          {
            id: "967276ef-38c3-4d2e-a46f-76fed00e6dfb",
            name: "cukier",
            amount: 3,
            unit: "łyżki",
            allergenTypes: [],
          },
          {
            id: "a5923492-5c7c-442e-aaa6-f93158853512",
            name: "olej",
            amount: 2,
            unit: "łyżki",
            allergenTypes: [],
          },
          {
            id: "e1475a34-cc2f-497c-b6a0-86840da106bc",
            name: "proszek do pieczenia",
            amount: 1,
            unit: "łyżeczka",
            allergenTypes: [],
          },
          {
            id: "e47799cb-9b8e-46cb-b0ab-fabbcd62c7e3",
            name: "mąka pszenna",
            amount: 230,
            unit: "g",
            allergenTypes: ["gluten"],
          },
        ],
        steps: [
          {
            id: "4f137c70-6f56-4144-b5c5-4aff30d5bbc9",
            title:
              "Dynię myjemy, kroimy na duże kawałki i układamy na blaszce do pieczenia wyłożonej papierem do pieczenia. Usuwamy pestki z dyni. Pieczemy przez 20 minut w temperaturze 200 stopni. Studzimy w zamkniętym piekarniku przez 5-10 minut, a później wyciągamy i wrzucamy do garnka czy miski. Odstawiamy do całkowitego przestygnięcia.",
            startCondition: {
              id: "15760725-6c34-4fd5-bb62-c46b462a5131",
              prerequisiteStepIds: [],
            },
            duration: 1800,
            order: 0,
          },
          {
            id: "523b6ff0-c10d-4321-9a71-e96b67f4d3c9",
            title:
              "Do miski wkładamy puree, maślankę (proponuję na początku dodać 100 ml i później ewentualnie dolewać więcej, aby uzyskać pożądaną konsystencję), a także duże jajko.",
            startCondition: {
              id: "093d9039-af5f-4e5c-96f0-c69ac4bdf2dd",
              prerequisiteStepIds: ["c0000d6e-82eb-48a2-ad49-1e84edc764e5"],
            },
            duration: 300,
            order: 0,
          },
          {
            id: "a925f17b-eb14-4080-ad50-b54ce1b22580",
            title: "Miksujemy do powstania jednolitej masy – to powinno zająć 15-20 sekund.",
            startCondition: {
              id: "ab6f61a4-0215-43b6-8fdc-27df152c2ed0",
              prerequisiteStepIds: ["523b6ff0-c10d-4321-9a71-e96b67f4d3c9"],
            },
            duration: 20,
            order: 0,
          },
          {
            id: "bfae6418-179f-47ac-a071-50a3014048df",
            title:
              "Rozgrzewamy większą patelnię z nieprzywierającą powierzchnią. Nalewamy małą ilość oleju i nakładamy po czubatej łyżce ciasta. Smażymy na średniej mocy palnika z obu stron.",
            startCondition: {
              id: "4a98b820-4e46-4da1-8245-dce05842ac9b",
              prerequisiteStepIds: ["c4aba974-cb47-4e6c-a3dc-a19d4030b8ea"],
            },
            duration: 1200,
            order: 0,
          },
          {
            id: "c0000d6e-82eb-48a2-ad49-1e84edc764e5",
            title: "Blendujemy za pomocą blendera ręcznego do powstania gładkiego puree. Wlewamy 2-3 łyżki oleju i mieszamy za pomocą łyżki.",
            startCondition: {
              id: "5f60c82b-8ee9-4374-8a1b-034c25c0a9f8",
              prerequisiteStepIds: ["4f137c70-6f56-4144-b5c5-4aff30d5bbc9"],
            },
            duration: 300,
            order: 0,
          },
          {
            id: "c4aba974-cb47-4e6c-a3dc-a19d4030b8ea",
            title:
              "Mieszamy do powstania jednolitego ciasta – ma powstać konsystencja nieco gęstsza niż gęsta śmietana 18%. Gdyby ciasto było zbyt gęste wtedy dodajemy pozostałą maślankę, czy nawet nieco więcej niż podałam w składnikach. Jeśli z kolei Twoje puree było bardzo rzadkie, to może być konieczność dosypania dodatkowej małej ilości mąki.",
            startCondition: {
              id: "64d68fac-3397-4875-97e5-0be662be7518",
              prerequisiteStepIds: ["cce227bf-6d73-4435-8153-c0c8ada70a05"],
            },
            duration: 300,
            order: 0,
          },
          {
            id: "cce227bf-6d73-4435-8153-c0c8ada70a05",
            title:
              "Dodajemy cukier (3 płaskie łyżki), cynamon (1/3 łyżeczki), przesianą mąkę tortową (230 g) oraz proszek do pieczenia (1 łyżeczka).",
            startCondition: {
              id: "43d70803-119d-4545-b61e-feb3cd625021",
              prerequisiteStepIds: ["a925f17b-eb14-4080-ad50-b54ce1b22580"],
            },
            duration: 300,
            order: 0,
          },
        ],
        allergens: [
          {
            id: "f8f2a716-180c-4225-9a72-aaf015c6395c",
            allergenType: "gluten",
          },
          {
            id: "9db64728-8dd2-422b-9172-b0144d865981",
            allergenType: "egg",
          },
          {
            id: "b9f53c60-0c5d-481b-ae88-d1ff6e36fc4d",
            allergenType: "milk",
          },
        ],
      });
    }, 1000);
  });
}
