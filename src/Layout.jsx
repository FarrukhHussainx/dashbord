import React from "react";
import Navbar from "./components/Navbar";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-slate-800 ">
      <div className=" flex h-[100vh-80px]">
        <div className="flex-auto hidden md:block md:w-2/12 border-r-2 border-gray-500 rounded-xl">
          <Menu />
        </div>
        <div className="flex-auto md:w-10/12">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
