"use client";

import useRecipe from "~/hooks/useRecipe";

export default function Recipe() {
  const { data: recipe } = useRecipe();

  console.log({ recipe });

  return <div>You goti it!</div>;
}
