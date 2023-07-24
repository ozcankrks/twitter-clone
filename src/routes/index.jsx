import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { About } from "../pages/about/About";
import { WebLayout } from "../layout/web/index";


const router = createBrowserRouter([
  {
    path: "/",
    element: <WebLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ],
  },
]);

export default router;