"use client";

import { useEffect, useState } from "react";
import Hero from "~/components/Hero";
import { Box, Container, Typography } from "@mui/material";
import { Allergens } from "../api/allergens/allergens";
import Select from "./select";

const Settings = () => {
  const [allergens, setAllergens] = useState<Allergens[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/allergens");
      const convertedData = await data.json();
      setAllergens(convertedData.allergens);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Hero />
      <Box>
        <Typography variant="h5" color="primary" sx={{weight: 600, marginBottom: "20px"}}>Wybierz swoje alergeny</Typography>
        <Typography variant="body1" sx={{marginBottom: "16px"}}>
            Wybierając alergeny umożliwisz nam weryfikację przepisów pod kątem Twoich potrzeb. Zostaniesz poinformowany/a jeśli przepis zawiera wskazany alergen.
        </Typography>
      </Box>
      <Select allergens={allergens} />
    </Container>
  );
};

export default Settings;
