import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import FlashMessages from "./FlashMessages";
export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <FlashMessages />
      <Outlet />
    </>
  );
};
