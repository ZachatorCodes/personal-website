import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
  ],
  {
    basename: "/personal-website",
  }
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
