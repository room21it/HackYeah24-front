import * as React from "react";
import { styled } from "@mui/material/styles";

export const StatRoot = styled("div", {
  name: "CustomLogo",
  slot: "root",
})(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(0.5),
  fontWeight: 400,
  alignItems: "center",
  textDecoration: "none",
  // padding: theme.spacing(3, 4),
  // backgroundColor: theme.palette.background.paper,
  // borderRadius: theme.shape.borderRadius,
  // boxShadow: theme.shadows[2],
  // letterSpacing: "-0.025em",
  // fontWeight: 600,
}));

export const TextRoot = styled("div", {
  name: "CustomLogo",
  slot: "textRoot",
})(({ theme }) => ({
  // ...theme.typography.h3,
  display: "flex",
  flexDirection: "column",
  lineHeight: "1.2",
}));

export const TextHighlight = styled("span", {
  name: "CustomLogo",
  slot: "textHighlight",
})(({ theme }) => ({
  color: theme.palette.primary.main,
}));

export const TextBlack = styled("span", {
  name: "CustomLogo",
  slot: "textHighlight",
})(({ theme }) => ({
  color: theme.palette.text.primary,
}));
