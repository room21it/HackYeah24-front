"use client";

import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";
import useRecipe from "~/hooks/useRecipe";
import { a11yProps } from "~/utils/a11yProps";
import FullRecipePanel from "../components/FullRecipePanel";
import RecipeStepsPanel from "../components/RecipeStepsPanel";

export default function RecipeCooking({ params }: { params: { guid: string } }) {
  const { data: recipe, isSuccess } = useRecipe(params.guid);

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container component="main">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="PEŁNY PRZEPIS" {...a11yProps(0)} />
        <Tab label="KROK PO KROKU" {...a11yProps(1)} />
      </Tabs>

      <FullRecipePanel index={0} value={value} guid={params.guid} />
      <RecipeStepsPanel index={1} value={value} guid={params.guid} />
    </Container>
  );
}
