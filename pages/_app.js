import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
