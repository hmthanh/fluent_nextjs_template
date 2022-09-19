// import ProgressBar from "../components/ProgressBar/ProgressBar";
import "../styles/custom.css";
import "../styles/main.css";
import "../styles/responsive.css";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";

import { PartialTheme, ThemeProvider } from "@fluentui/react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { registerIcons } from "@fluentui/react/lib/Styling";

import store from "../global/store/store";

import type { NextPage } from "next";
import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { AlertOff20Regular, Alert20Regular, Alert20Filled, AlertOff20Filled } from "@fluentui/react-icons";
const customLightTheme: PartialTheme = {
  palette: {
    // themePrimary: "#1890ff",
    // themeDark: "#324c4d"
  }
};

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  const getLayout = Component.getLayout ?? ((page) => page);

  if (!getLayout) {
    return null;
  }
  initializeIcons();
  registerIcons({
    icons: {
      AlertOff20Regular: <AlertOff20Regular />,
      Alert20Regular: <Alert20Regular />,
      AlertOff20Filled: <AlertOff20Filled />,
      Alert20Filled: <Alert20Filled />
    }
  });

  if (typeof window === "undefined") {
    return null;
  } else {
    return (
      <Provider store={store}>
        {/* <ProgressBar /> */}
        <ThemeProvider theme={customLightTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </Provider>
    );
  }
}
