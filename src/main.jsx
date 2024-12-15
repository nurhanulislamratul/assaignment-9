import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Components/Erorr/Error.jsx";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Register/Register.jsx";
import About from "./Components/About/About.jsx";
import EstateDetails from "./Components/EstateDetails/EstateDetails.jsx";
import AuthProvider from "./Components/Providers/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import ExclusiveOffer from "./Components/ExclusiveOffer/ExclusiveOffer.jsx";
import Profile from "./Components/Profile/Profile.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/offer",
        element: (
          <PrivateRoute>
            <ExclusiveOffer></ExclusiveOffer>
          </PrivateRoute>
        ),
      },
      {
        path: "/estate/:id",
        element: (
          <PrivateRoute>
            <EstateDetails></EstateDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/estate.json"),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        {" "}
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);
