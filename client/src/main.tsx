import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { Home, Login, NotFound } from "@/pages";
import { AccountProvider } from "./context";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export function Root() {
  const [cookie] = useCookies(["jwt"]);

  return (
    <AccountProvider storedToken={cookie.jwt}>
      <RouterProvider router={router} />
    </AccountProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CookiesProvider>
      <Root />
    </CookiesProvider>
  </React.StrictMode>,
);
