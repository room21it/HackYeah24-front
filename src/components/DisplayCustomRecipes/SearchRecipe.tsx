"use client";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { filterBy, Filters } from "./constants";
import { ExcludedAllergenChip } from "./ExcludedAllergenChip";
import { RecipesContainer } from "./RecipesContainer";

export const SearchRecipe = () => {
  const [excludedAllergens, setExcludedAllergens] = useState<null | Filters[]>(null);

  const removeExcludedAllergen = (allergen: Filters["name"]) => {
    excludedAllergens && setExcludedAllergens([...excludedAllergens].filter((item) => allergen !== item.name));
  };

  return (
    <Box>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={filterBy}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => setExcludedAllergens(value)}
        value={excludedAllergens || []}
        filterSelectedOptions
        renderInput={(params) => <TextField {...params} label="Filtruj listę przepisów" placeholder="Wybierz alergen" />}
        renderTags={() => null}
        sx={{ marginBottom: "6px" }}
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {excludedAllergens?.map((allergen) => {
          return <ExcludedAllergenChip key={allergen.id} name={allergen.name} removeExcludedAllergen={removeExcludedAllergen} />;
        })}
      </Stack>
      <RecipesContainer allergens={excludedAllergens} />
    </Box>
  );
};
