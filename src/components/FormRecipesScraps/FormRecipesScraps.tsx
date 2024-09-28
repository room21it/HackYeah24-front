"use client";

import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { FormForLink } from "./FormForLink";
import { FormForDescription } from "./FormForDescription";
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";

export const FormRecipesScraps = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography color="primary" variant="h5" component="h2" gutterBottom>
        Przeanalizuj przepis
      </Typography>
      <Tabs aria-label="możesz wpisać podać link do przepisu albo wkleić opis przepisu" value={value} onChange={handleChange}>
        <Tab label="LINK" {...a11yProps(0)} />
        <Tab label="TEKST" {...a11yProps(1)} />
      </Tabs>
      <Divider sx={{ mb: 2 }} />
      <FormForLink index={0} value={value} />
      <FormForDescription index={1} value={value} />
    </Box>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
