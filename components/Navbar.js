import React from "react";
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div>
      <Image src={logo} />
    </div>
  );
};

export default Navbar;
