"use client";

import { ThemeProvider } from "@mui/material/styles";
import Theme from "./Theme";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
}
