export type Filters = {
  name: string;
  id: string;
};

export const filterBy = [
  { name: "bez glutenu", id: "gluten" },
  {
    name: "bez orzechów",
    id: "nuts",
  },
  {
    name: "bez selera",
    id: "celery",
  },
  {
    name: "bez skorupiaków",
    id: "crustaceans",
  },
  {
    name: "bez jaj",
    id: "egg",
  },
  {
    name: "bez ryb",
    id: "fish",
  },
  {
    name: "bez łubinu",
    id: "lupin",
  },
  {
    name: "bez mleka",
    id: "milk",
  },
  {
    name: "bez mięczaków",
    id: "molluscs",
  },
  {
    name: "bez gorczycy",
    id: "mustard",
  },
  {
    name: "bez orzeszków ziemnych",
    id: "peanuts",
  },
  {
    name: "bez sezamu",
    id: "sesame",
  },
  {
    name: "bez soi",
    id: "soya",
  },
  {
    name: "bez dwutlenku siarki",
    id: "sulphur",
  },
];
