import "./utils/darkMode";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Routes";
import { UserProvider } from "./context/userContext";
import { SnackbarProvider } from "notistack";
import logo from './assets/img/logo/logo.png'

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <link rel="shortcut icon" href={logo} type="image/x-icon" />
    <SnackbarProvider autoHideDuration={2000} maxSnack={3}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </UserProvider>
);
