import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/projects",
      element: <Projects />
    },
    {
      path: "/*",
      element: <Navigate replace to="/" />,
    },
  ],
  {
    basename: "/personal-website",
  }
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
