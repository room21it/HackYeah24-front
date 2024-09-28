"use client";

import { alpha } from "@mui/material";
import Box from "@mui/material/Box";

export const Space = () => {
  return (
    <Box
      tabIndex={-1}
      component="div"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light" ? "linear-gradient(180deg, #CEE5FD, #FFF)" : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
        pt: { xs: 12, sm: 13 },
      })}
    ></Box>
  );
};
