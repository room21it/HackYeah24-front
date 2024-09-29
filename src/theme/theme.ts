"use client";

import { Orbitron, Poppins } from "next/font/google";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const orbitron = Orbitron({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = extendTheme({
  colorSchemes: {
    dark: {},
    light: {
      palette: {
        primary: {
          main: "#FF7A00",
          dark: "#9C4B00",
          contrastText: "#FFF",
        },
      },
    },
  },
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    // @ts-ignore
    CustomLogo: {
      styleOverrides: {
        root: {
          fontFamily: orbitron.style.fontFamily,
        },
      },
    },
  },
});
