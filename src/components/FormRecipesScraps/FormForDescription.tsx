import Box from "@mui/material/Box";
import { useTabPanel } from "./useTabPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStepsFromDesc from "~/hooks/useStepsFromDesc";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  index: number;
  value: number;
};

export const FormForDescription = ({ index, value }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });

  const { mutate, isPending } = useStepsFromDesc();

  const getSteps = () => {
    mutate();
  };

  if (isHidden) {
    return null;
  }

  return (
    <Box
      {...tabProps}
      component="form"
      onSubmit={getSteps}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "center",
      }}
    >
      <TextField
        required
        label="Opis przepisu"
        placeholder="zacznij gotować makaron z ...."
        fullWidth
        disabled={isPending}
        multiline
        rows={4}
        sx={{
          maxWidth: 600,
        }}
      />
      <Button
        type="submit"
        size="large"
        variant="contained"
        fullWidth
        startIcon={isPending ? <CircularProgress size="1em" /> : undefined}
        disabled={isPending}
        sx={{ maxWidth: 300 }}
      >
        ANALIZUJ
      </Button>
    </Box>
  );
};
