import { RouteObject } from "react-router";
import Home from "../pages/Home";

const routes:RouteObject[] = [
  {
    path: "/",
    children: [
      {path: "", element: <Home />}
    ]
  },
  // {
  //   path: "/project1",
  //   children: [
  //     {path: "", element: <Services />}
  //   ]
  // }
];

export default routes;