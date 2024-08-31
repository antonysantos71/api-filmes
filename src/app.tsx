import { AboutPage } from "./pages/about-page";
import { DetailsFilm } from "./pages/details-film";
import { Home } from "./pages/home";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movie/:id",
    element: <DetailsFilm/>,
  },
  {
    path: "/about",
    element: <AboutPage/>,
  }
]);

export function App() {
  return <RouterProvider router={router}/>
}
