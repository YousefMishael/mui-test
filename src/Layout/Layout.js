import React, { useState } from "react";
import Header from "../Components/Header/Header";
import { Outlet } from "react-router-dom";
import { AppContext } from "../Utils/Utils";

function Layout() {
  const [token, setToken] = useState("");

  return (
    <AppContext.Provider value={[token, setToken]}>
      <Header />
      <Outlet />
    </AppContext.Provider>
  );
}

export default Layout;
