import CssBaseline from "@mui/material/CssBaseline";
import { appWithTranslation } from "next-i18next";
import * as React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(MyApp);
