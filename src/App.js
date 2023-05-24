// import logo from "./logo.svg";
import { createRef } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { theme } from "./Utils/StyleUtils";
import { Box, ThemeProvider } from "@mui/material";
import CustomButton from "./Components/CustomButton/CustomButton";
import CustomCard from "./Components/Card/Card";
import Layout from "./Layout/Layout";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import AboutUs from "./Pages/AboutUs/AboutUs";
import IsAuth from "./Components/Auth/IsAuth";
import { appRoutes, generateRoutes } from ".//Components/Utils/Utils";
// import CustomInput from "./CustomInput";

function App() {
  const ref = createRef();

  const hideInput = () => {
    ref.current.style.display = "none";
  };

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />} errorElement={<>Not Found</>}>
        {generateRoutes(appRoutes)}
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App">
        <Header />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            gap: "1em",
            padding: "1em",
          }}
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </Box>
      </div> */}
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
