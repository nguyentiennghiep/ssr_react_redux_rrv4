import express from 'express';
import cors from "cors";
import { renderToString } from "react-dom/server";
import App from '../shared/App';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from "../shared/reducers/index";
import { StaticRouter, matchPath } from "react-router-dom"
import thunk from "redux-thunk";
import routes from "../shared/routes";

const app = express();
app.use(express.static("public"));
app.use(cors());
const store = createStore(rootReducer, applyMiddleware(thunk))
app.use("*", (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRoute.component.fetchDa ? activeRoute.component.fetchDa(store) : Promise.resolve(null)
  promise.then(data => {
    let context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      </Provider>
    )

    const preloadedState = store.getState();

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title> 
      </head>
      <body>
        <div id="app">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
        </script>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `)
  })
});

app.listen(3000, () => {
  console.log('Server is running ....')
});