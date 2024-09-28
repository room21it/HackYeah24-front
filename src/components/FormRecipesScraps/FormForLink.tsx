import useStepsFromLink from "~/hooks/useStepsFromLink";
import { useTabPanel } from "./useTabPanel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { FormEventHandler } from "react";
import useFullPageLoader from "~/hooks/useFullPageLoader";

type Props = {
  index: number;
  value: number;
};

export const FormForLink = ({ index, value }: Props) => {
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { setLoading } = useFullPageLoader();

  const { mutate, isPending } = useStepsFromLink({
    onPending: () => {
      !!setLoading && setLoading(true);
    },
    onSuccess: () => {
      !!setLoading && setLoading(false);
    },
  });

  const getSteps: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
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
        label="Link do przepisu"
        placeholder="https://..."
        fullWidth
        disabled={isPending}
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
