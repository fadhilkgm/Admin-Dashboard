import Home from "./pages/home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import './styles/global.scss'
import User from "./pages/users/User";
import Product from "./pages/products/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SideMenu from "./components/SideMenu/SideMenu";
import Login from "./pages/Login/Login";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <SideMenu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/users",
          element: <User/>,
        },
        {
          path: "/products",
          element: <Product />,
        },
      ]
    },
    {
      path:'/login',
      element:<Login />
    }
  ]);
  return <RouterProvider router={router} />;
}

export default App;
