import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home
      <Link to="about-us">About us</Link>
      <Outlet />
    </div>
  );
}
