import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { ServerStyleSheets, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { Helmet } from "react-helmet";
import Routes from "../client/Routes";
import theme from "../client/theme";

export default (req, store, context) => {
  const sheets = new ServerStyleSheets();
  const content = renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <StaticRouter location={req.path} context={context}>
            <div>{renderRoutes(Routes)}</div>
          </StaticRouter>
        </Provider>
      </ThemeProvider>
    )
  );

  const helmet = Helmet.renderStatic();
  const css = sheets.toString();

  return `
  <html lang="ja">
    <head>
        <style id="jss-server-side">${css}</style>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
      window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
};
