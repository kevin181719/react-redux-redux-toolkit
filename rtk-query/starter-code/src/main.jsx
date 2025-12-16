import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
// import { ApiProvider } from "@reduxjs/toolkit/query/react";
// import { apiSlice } from "./redux/apiSlice.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      // <ApiProvider api={apiSlice}>
      //   <App />
      // </ApiProvider>

      <Provider store={store}>
          <App />
      </Provider>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <p>Contact Us</p>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
