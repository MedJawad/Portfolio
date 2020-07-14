import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import { ServerStyleSheet } from "styled-components";
export default (req, store) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <StaticRouter context={{}} location={req.path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )
  );
  const styles = sheet.getStyleTags();

  return `
  <!DOCTYPE html>
  <html  lang="en">
    <head>
    <meta charset="utf-8" />
    <link rel="icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Aatafay Mohamed Jawad Portfolio"
    />
    <link rel="apple-touch-icon" href="logo192.png" />
    <link rel="manifest" href="manifest.json" />
      <title>${req.path}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="root">${body}</div>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
      <script src="bundle.js"></script>
      </body>
  </html>
`;
};
