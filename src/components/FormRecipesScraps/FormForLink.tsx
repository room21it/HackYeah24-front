"use client";

import useStepsFromLink from "~/hooks/useStepsFromLink";
import { useTabPanel } from "../../hooks/useTabPanel";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import useFullPageLoader from "~/hooks/useFullPageLoader";
import { useRouter } from "next/navigation";

type Props = {
  index: number;
  value: number;
};

export const FormForLink = ({ index, value }: Props) => {
  const { push } = useRouter();
  const { tabProps, isHidden } = useTabPanel({ index, value });
  const { setLoading } = useFullPageLoader();
  const [link, setLink] = useState("");

  const updateLink: ChangeEventHandler<HTMLInputElement> = (event) => {
    setLink(event.target.value);
  };

  const { mutate, isPending } = useStepsFromLink({
    onPending: () => {
      !!setLoading && setLoading(true);
    },
    onSuccess: (guid) => {
      push(`/recipe/${guid}`, { scroll: true });
    },
  });

  const getSteps: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    mutate(link);
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
        value={link}
        onChange={updateLink}
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
