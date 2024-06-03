import { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/home";
import Users from "./pages/users";
import Login from "./pages/login";
import Products from "./pages/products";
import Layout from "./Layout";
import Posts from "./pages/posts";
import Orders from "./pages/orders";
import Profile from "./pages/profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/users", element: <Users /> },
        { path: "/products", element: <Products /> },
        { path: "/orders", element: <Orders /> },
        { path: "/posts", element: <Posts /> },
        { path: "/profile", element: <Profile /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
