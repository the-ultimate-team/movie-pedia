import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import logo from "../assets/Logo.png";

const logoStyle = css`
  margin: 15px 15px 0 0;
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
              <li css={logoStyle}>
                <Image src={logo} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
