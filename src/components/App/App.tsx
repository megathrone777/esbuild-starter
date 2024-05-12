import React, { lazy } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { NotFound, Layout } from "~/components";
import { AppProvider } from "~/store";
import { GlobalStyle, theme } from "~/theme";

const HomePage: React.LazyExoticComponent<React.FC> = lazy(
  () => import("~/pages/Home")
);

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <NotFound />,
      path: "/",
      children: [
        {
          element: <HomePage />,
          index: true,
        },
        {
          element: <div>Test</div>,
          path: "test",
        },
      ],
    },
  ]);

  return (
    <AppProvider>
      <StyleSheetManager enableVendorPrefixes shouldForwardProp={(): true => true}>
        <ThemeProvider {...{ theme }}>
          <GlobalStyle />
          <RouterProvider {...{ router }} />
        </ThemeProvider>
      </StyleSheetManager>
    </AppProvider>
  );
};

export { App };
