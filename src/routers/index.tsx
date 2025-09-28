import App from "@/App";
import Home from "@/pages/Home";
import ServiceDetails from "@/pages/Service/ServiceDetails";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        path: "/",
      },
    ],
  },
  {
    Component: ServiceDetails,
    path: "/rooms/:id",
  },
]);
