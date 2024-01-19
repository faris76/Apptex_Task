import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetail from "./pages/ProductDetail";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/products/",
          element: <Products />,
        },
        {
          path: "/products/add",
          element: <AddProduct />,
        },
        {
          path: "/products/detail",
          element: <ProductDetail />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
