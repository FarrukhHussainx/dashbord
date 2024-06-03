import React, { useState } from "react";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="h-[80px] hidden md:flex justify-between items-center md:ml-5 md:mr-5 ">
        <Link to="/" className="flex justify-center gap-2 items-center ml-5">
          <img
            className="w-8 h-8 rounded-lg "
            src="https://cdn.vectorstock.com/i/500p/83/31/business-finance-arrow-chart-logo-vector-5058331.jpg"
            alt=""
          />
          <h1 className="text-white">The Charty</h1>
        </Link>
        <Link
          to="/profile"
          className="flex justify-center gap-3 items-center mr-5"
        >
          <img
            className="w-8 h-8 rounded-full"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg"
            alt=""
          />
          <h1 className="text-white">Admin</h1>
        </Link>
      </div>
      <Link
        to="/"
        className="m-5 flex md:hidden justify-between gap-2 items-center"
      >
        <div className="flex justify-center gap-2 items-center ">
          <img
            className="w-8 h-8 rounded-lg "
            src="https://cdn.vectorstock.com/i/500p/83/31/business-finance-arrow-chart-logo-vector-5058331.jpg"
            alt=""
          />
          <h1 className="text-white">The Charty</h1>
        </div>
        <img
          className="w-8 h-8 rounded-md"
          onClick={() => setOpen(!open)}
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
        />
      </Link>
      {open && (
        <div className="absolute top-0 p-5 bg-white z-10 rounded-e-lg">
          <img
            className="w-8 h-8"
            onClick={() => setOpen(!open)}
            src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png"
          />
          <div className="p-3">
            <Menu />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
