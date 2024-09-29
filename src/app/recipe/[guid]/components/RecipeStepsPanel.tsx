import Box from "@mui/material/Box";
import useRecipe from "~/hooks/useRecipe";
import { useTabPanel } from "~/hooks/useTabPanel";

import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

type Props = {
  index: number;
  value: number;
  guid: string;
};

const RecipeStepsPanel = ({ index, value, guid }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { data: recipe } = useRecipe(guid);

  const [activeStep, setActiveStep] = React.useState(0);

  const steps = recipe?.steps || [];
  const maxSteps = recipe?.steps?.length || 0;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (isHidden) {
    return null;
  }

  return (
    <Box {...tabProps} sx={{ flexGrow: 1, maxWidth: { xs: undefined, md: 400 } }}>
      <Box sx={{ minHeight: 255, width: "100%", p: 2, fontSize: "1.75em" }}>{steps[activeStep]?.title}</Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Następny
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Poprzedni
          </Button>
        }
      />
    </Box>
  );
};

export default RecipeStepsPanel;
