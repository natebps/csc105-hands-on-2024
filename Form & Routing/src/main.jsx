import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import Favorite from "./pages/FavouritesPage";
import NotFoundPage from './pages/NotFoundPage';
import FavouriteDetailPage from './pages/FavouriteDetailPage';

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    children: [],
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/fav",
    element: <Favorite />,
  },
  {
    path: "/fav/:id",
    element: <FavouriteDetailPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>
);
