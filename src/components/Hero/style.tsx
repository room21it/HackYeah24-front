import Typography from "@mui/material/Typography";
import type {} from '@mui/material/themeCssVarsAugmentation';
import { styled } from '@mui/material/styles';

const StyledComponent = styled('button')(({ theme }) => ({
  // ✅ typed-safe
  color: theme.vars.palette.primary.main,
}));

export const Title = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  fontSize: 'clamp(3.5rem, 10vw, 4rem)',

  "& mark": {
    all: "unset",
    fontSize: 'clamp(3rem, 10vw, 4rem)',
    color: theme.vars.palette.primary.dark,
  }
}))