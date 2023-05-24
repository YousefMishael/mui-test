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
