import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./styles/index.css";
import App from "./components/App.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./components/Resume.jsx";
// import { StrictMode } from "react";

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
      path: "/resume",
      element: <Resume />
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
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
