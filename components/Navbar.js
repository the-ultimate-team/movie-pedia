import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Container from "./responsiveLayout/Container";

const Navbar = () => {
  return (
    <header css={navContainer}>
      <nav>
        <div>
          <Container>
            <ul css={menuStyle}>
              <li css={logoStyle}>
                <Image src={logo} alt="logo" layout="fill" />
              </li>
              <li css={btnLi}>
                <button css={basicButton}>영화</button>
              </li>
              <li css={btnLi}>
                <button css={basicButton}>TV</button>
              </li>
              <li css={searchLi}>
                <label css={searchInput}>
                  <FontAwesomeIcon
                    css={searchIcon}
                    icon={faSearch}
                    layout="fill"
                  />
                  <input
                    type="text"
                    autoComplete="off"
                    placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요."
                    name="searchKeyword"
                    value=""
                    css={inputStyle}
                  />
                </label>
              </li>
              <li css={btnLi}>
                <button css={loginButton}>로그인</button>
              </li>
              <li css={btnLi}>
                <button css={borderButton}>회원가입</button>
              </li>
            </ul>
          </Container>
        </div>
      </nav>
    </header>
  );
};

const navContainer = css`
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 51;
  background: #fff;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 62px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 8%);
`;

const menuStyle = css`
  display: flex;
`;

const logoStyle = css`
  margin: 15px 15px 0 0;
  min-width: 151px;
  height: 29px;
  position: relative;
`;

const btnLi = css`
  margin: 0 0 0 24px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 62px;
`;
const searchLi = css`
  display: flex;
  align-items: center;
  width: 300px;
  margin: 0 0 0 auto;
  flex-shrink: 1;
`;
const searchInput = css`
  width: 100%;
  height: 38px;
  padding: 7px 10px 8px 36px;
  border-radius: 2px;
  background: #f5f5f7;
  position: relative;
`;

const searchIcon = css`
  position: absolute;
  top: 10px;
  left: 9px;
  width: 16px;
  color: #ccc;
`;

const inputStyle = css`
  font-size: 14px;
  font-weight: 400;
  -webkit-letter-spacing: -0.3px;
  -moz-letter-spacing: -0.3px;
  -ms-letter-spacing: -0.3px;
  letter-spacing: -0.3px;
  line-height: 23px;
  background: transparent;
  width: 100%;
  padding: 0;
  padding-bottom: 1px;
  border: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  caret-color: #353535;
`;
const basicButton = css`
  background: none;
  padding: 0;
  border: none;
  margin: 0;
  cursor: pointer;
  color: #353535;
  font-size: 15px;
  letter-spacing: -0.3px;
`;
const loginButton = css`
  ${basicButton}
  color: #74747b;
  font-size: 15px;
`;
const borderButton = css`
  text-align: center;
  font-size: 14px;
  line-height: 20px;
  box-sizing: border-box;
  width: auto;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: #353535;
  letter-spacing: -0.3px;
  padding: 5px 14px 6px 14px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  border-radius: 6px;
  margin: 15px 0;
`;
export default Navbar;
