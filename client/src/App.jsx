import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./page/Home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./page/Products/Products";
import Product from "./page/product/Product";
import Registration from "./page/Auth/Registration/Registration";
import Login from "./page/Auth/Login/Login";
import Account from "./page/Account/Account";
import Admin from "./page/Admin/Admin";
import { jwtDecode } from "jwt-decode";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
    ],
  },
]);

const authRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

const authRouterAdmin = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        path: "/Admin",
        element: <Admin />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
]);

function App() {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.role;

  return token ? (
    userRole === "Admin" ? (
      <RouterProvider router={authRouterAdmin} />
    ) : (
      <RouterProvider router={authRouter} />
    )
  ) : (
    <RouterProvider router={router} />
  );
}

export default App;
