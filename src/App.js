import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // Import correct components
import ContactUs from "./components/ContactUs";

const root = ReactDom.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

// Define routes using createBrowserRouter
const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restuarant/:id",
        element: <RestuarantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={AppRoutes} />);
