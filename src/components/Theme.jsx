"use client";
import * as MT from "@material-tailwind/react";

export const PageWrapper = ({ children }) => {
  return <MT.ThemeProvider>{children}</MT.ThemeProvider>;
};

export default MT;
