import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import logo from "../assets/Logo.png";

const logoStyle = css`
  width: 151px;
  height: 29px;
`;
const Navbar = () => {
  return (
    <header>
      <nav>
        <div>
          <div>
            <ul>
              <li>
                <Image src={logo} css={logoStyle} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
