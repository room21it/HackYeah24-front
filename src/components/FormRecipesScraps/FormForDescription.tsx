"use client";

import Box from "@mui/material/Box";
import { useTabPanel } from "../../hooks/useTabPanel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useStepsFromDesc from "~/hooks/useStepsFromDesc";
import CircularProgress from "@mui/material/CircularProgress";
import useFullPageLoader from "~/hooks/useFullPageLoader";
import { useRouter } from "next/navigation";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

type Props = {
  index: number;
  value: number;
};

export const FormForDescription = ({ index, value }: Props) => {
  const { push } = useRouter();
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { setLoading } = useFullPageLoader();
  const [text, setText] = useState("");

  const updateText: ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  const { mutate, isPending } = useStepsFromDesc({
    onPending: () => {
      !!setLoading && setLoading(true);
    },
    onSuccess: (guid) => {
      push(`/recipe/${guid}`, { scroll: true });
    },
  });

  const getSteps: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutate(text);
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
        value={text}
        onChange={updateText}
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
