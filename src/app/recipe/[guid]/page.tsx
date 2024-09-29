"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useFullPageLoader from "~/hooks/useFullPageLoader";
import useRecipe from "~/hooks/useRecipe";
import { a11yProps } from "~/utils/a11yProps";

export default function Recipe({ params }: { params: { guid: string } }) {
  const { data: recipe, isSuccess } = useRecipe(params.guid);
  const { setLoading } = useFullPageLoader();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (isSuccess) {
      setLoading && setLoading(false);
    }
  }, [isSuccess]);

  return (
    <Container component="main">
      <Box>
        <Typography color="primary" variant="h5" component="h2" gutterBottom>
          {recipe?.name}
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="ALERGENY" {...a11yProps(0)} />
          <Tab label="MAKROSKŁADNIKI" {...a11yProps(1)} />
        </Tabs>

        <Tabs value={0}>
          <Tab label="SKŁADNIKI" {...a11yProps(0)} />
        </Tabs>
      </Box>
    </Container>
  );
}
