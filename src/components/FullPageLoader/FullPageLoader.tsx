"use client";

import { ReactNode, useCallback, useState } from "react";
import { LoaderContext } from "./Provider";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  children: ReactNode;
};

export const FullPageLoader = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const setLoading = useCallback((newStatus: boolean) => {
    setIsLoading(newStatus);
  }, []);

  return (
    <LoaderContext.Provider value={{ isLoading, setLoading }}>
      <Box
        component="div"
        hidden={!isLoading}
        sx={{
          display: isLoading ? "flex" : "none",
          top: 0,
          left: 0,
          position: "fixed",
          height: "100vh",
          width: "100vw",
          backgroundColor: "#ffffff",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: (theme) => theme.zIndex.appBar - 1,
        }}
      >
        <CircularProgress size="4em" />
        Czekaj!
      </Box>
      {children}
    </LoaderContext.Provider>
  );
};
