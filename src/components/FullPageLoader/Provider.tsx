"use client";

import { createContext } from "react";

type LoadingCtx = {
  isLoading: boolean;
  setLoading?: (newStatus: boolean) => void;
};

const defaultContext = {
  isLoading: false,
  setLoading: undefined,
};

export const LoaderContext = createContext<LoadingCtx>(defaultContext);
