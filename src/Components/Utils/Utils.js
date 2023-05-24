import Home from "../../Pages/Home/Home";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Products from "../../Pages/Products/Products";
import CustomButton from "../CustomButton/CustomButton";
import { Route } from "react-router-dom";

export const appRoutes = [
  {
    title: "Home",
    path: "/home",
    component: <Home />,
    subRoutes: [
      {
        index: true,
        component: <Products />,
      },
      {
        title: "CARDS",
        path: "cards",
        component: <CustomButton />,
      },
    ],
  },
  {
    title: "About Us",
    path: "/about-us",
    component: <AboutUs />,
  },
];

export const generateRoutes = (routes) => {
  let _routes = routes.map((route, idx) => {
    if (route.subRoutes) {
      return (
        <Route key={idx} path={route.path} element={route.component}>
          {generateRoutes(route.subRoutes)}
        </Route>
      );
    } else {
      if (route.index)
        return <Route key={idx} index element={route.component} />;
      else
        return <Route key={idx} path={route.path} element={route.component} />;
    }
  });

  return _routes;
};

/**
 * import { lazy } from "react";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Logout from "../pages/logout/Logout";
const Products = lazy(() => import("../pages/products/Products"));
const Feedbacks = lazy(() => import("../pages/feedbacks/Feedbacks"));
const Reports = lazy(() => import("../pages/reports/Reports"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Orders = lazy(() => import("../pages/orders/Orders"));
const Offers = lazy(() => import("../pages/offers/Offers"));
const ProductDetails = lazy(() =>
  import("../pages/productDetails/ProductDetails")
);
const AddProduct = lazy(() => import("../pages/addProduct/AddProduct"));
const AddOffer = lazy(() => import("../pages/addOffer/AddOffer"));
export const Routes = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/products",
    subRoutes: [
      {
        index: true,
        component: <Products />,
      },
      {
        path: ":productId",
        component: <AddProduct />,
      },
      {
        path: "add",
        component: <AddProduct />,
      },
    ],
  },
  {
    path: "/offers",
    subRoutes: [
      {
        index: true,
        component: <Offers />,
      },
      {
        path: ":offerId",
        component: <ProductDetails />,
      },
      {
        path: "add",
        component: <AddOffer />,
      },
    ],
  },
  {
    path: "/orders",
    subRoutes: [
      {
        index: true,
        component: <Orders />,
      },
    ],
  },
  {
    path: "/feedbacks",
    component: <Feedbacks />,
  },
  {
    path: "/reports",
    component: <Reports />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/logout",
    component: <Logout />,
  },
];


export function generateRoutes(routes) {
  return routes.map((route, idx) => {
    if (route.subRoutes) {
      if (route.layout) {
        return (
          <Route key={route.idx} path={route.path} element={route.layout}>
            {generateRoutes(route.subRoutes)}
          </Route>
        );
      } else {
        return (
          <Route key={route.idx} path={route.path}>
            {generateRoutes(route.subRoutes)}
          </Route>
        );
      }
    } else if (route.index) {
      return <Route key={idx} index element={route.component} />;
    } else {
      return (
        <Route key={route.idx} path={route.path} element={route.component} />
      );
    }
  });
}

 */
