import React from "react";
import { Link } from "react-router-dom";

import logo from "@/shared/assets/logo.png";

const Logo = ({ className }) => {
  return (
    <Link className={className} to={"/"}>
      <img src={logo} alt="logo"  />
    </Link>
  );
};

export default Logo;
