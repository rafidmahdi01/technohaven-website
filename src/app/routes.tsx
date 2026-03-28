import { createBrowserRouter } from "react-router";
import { Root } from "./components/layout/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import LandingPage from "./pages/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "landing", Component: LandingPage },
    ],
  },
]);
