import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import logo from "../../assets/Logo.png";
import LoginForm from "./LoginForm";

const CreateAccount = (props) => {
  return (
    <div css={CenterPositioinParent}>
      <div css={LoginWrap}>
        <div css={Padding}>
          <div css={LogoCenter}>
            <div css={LogoStyle}>
              <Image src={logo} alt="logo" layout="fill" />
            </div>
          </div>
          <h2 css={LoginFontStyle}>회원가입</h2>
          <div>
            <form>
              <div css={InputPadding}>
                <input css={InputStyle} type="text" placeholder="이름" />
              </div>
              <div css={InputPadding}>
                <input css={InputStyle} type="text" placeholder="이메일" />
              </div>
              <div css={InputPadding}>
                <input
                  css={InputStyle}
                  type="password"
                  placeholder="비밀번호"
                />
              </div>
              <button css={ButtonStyle}>회원가입</button>
            </form>
          </div>
          <div css={AccountSignin}>
            <span css={Account}>
              이미 가입하셨나요?
              <button onClick={props.onToggleLoginFormHandler} css={Signin}>
                로그인
              </button>
            </span>
          </div>
          <hr css={HrStyle}></hr>
          <div>
            <button css={FacebookButton}>Facebook 으로 회원가입</button>
          </div>
        </div>
      </div>
      <div onClick={props.onToggleModalHandler} css={Background}></div>
    </div>
  );
};

const LogoCenter = css`
  display: flex;
  justify-content: center;
`;

const LogoStyle = css`
  width: 198px;
  height: 38.03px;
  position: relative;
`;

const CenterPositioinParent = css`
  position: relative;
`;

const Background = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
`;

const LoginWrap = css`
  width: 375px;
  height: auto;
  min-height: 540px;
  border-radius: 6px;
  overflow: auto;
  text-align: center;
  background: rgb(255, 255, 255);
  padding: 0 18px;
  position: absolute;
  top: calc(50vh - 270px - 82px); //브라우저 절반 - 자기 자신 높이 절반 - 헤더
  left: calc(50% - 187.5px); //브라우저 절반 - 자신 너비 절반
  box-shadow: rgb(0 0 0 / 12%) 0 0 6px 0;
  z-index: 101;
`;

const Padding = css`
  padding: 32px 0px 48px;
  display: flex;
  flex-direction: column;
`;

const LoginFontStyle = css`
  font-size: 17px;
  letter-spacing: -0.5px;
  line-height: 22px;
  margin: 24px 0px 20px;
`;

const InputPadding = css`
  padding: 4px 0;
`;

const InputStyle = css`
  background: rgb(245, 245, 245);
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  border: none;
`;

const ButtonStyle = css`
  border: none;
  cursor: pointer;
  background: rgb(255, 47, 110);
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  margin: 16px 0px 0px;
`;

const AccountSignin = css`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  margin: 20px 0px 14px;
`;

const Account = css`
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  color: rgb(140, 140, 140);
  text-align: center;
`;

const Signin = css`
  background: none;
  padding: 0px;
  border: none;
  margin: 0px;
  cursor: pointer;
  color: rgb(255, 47, 110);
`;

const HrStyle = css`
  position: relative;
  color: black;
  text-align: center;
  height: 1.5em;
  border: 0px;
  outline: 0px;
  margin: 24px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0px;
    width: 100%;
    border-top: 1px solid rgb(216, 216, 216);
  }

  &::after {
    content: "OR";
    display: inline-block;
    position: relative;
    top: -2px;
    background-color: rgb(255, 255, 255);
    color: rgb(160, 160, 160);
    font-size: 14px;
    font-weight: 400;
    letter-spacing: -0.3px;
    line-height: 19px;
    vertical-align: middle;
    padding: 0px 14px;
  }
`;

const FacebookButton = css`
  color: rgb(255, 255, 255);
  text-align: center;
  font-size: 17px;
  letter-spacing: -0.7px;
  line-height: 22px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  position: relative;
  background: rgb(60, 90, 160);
  font-weight: 700;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 12px;
    background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMS41IDEyLjA1ODFDMjEuNSA2Ljc3OTMgMTcuMjQ2NyAyLjUgMTIgMi41QzYuNzUzMjkgMi41IDIuNSA2Ljc3OTMgMi41IDEyLjA1ODFDMi41IDE2LjgyODggNS45NzQwMSAyMC43ODMgMTAuNTE1NiAyMS41VjE0LjgyMUg4LjEwMzUyVjEyLjA1ODFIMTAuNTE1NlY5Ljk1MjMyQzEwLjUxNTYgNy41NTY4MiAxMS45MzM5IDYuMjMzNjMgMTQuMTAzOSA2LjIzMzYzQzE1LjE0MzMgNi4yMzM2MyAxNi4yMzA1IDYuNDIwMzEgMTYuMjMwNSA2LjQyMDMxVjguNzcyNDlIMTUuMDMyNUMxMy44NTI0IDguNzcyNDkgMTMuNDg0NCA5LjUwOTI3IDEzLjQ4NDQgMTAuMjY1MVYxMi4wNTgxSDE2LjExOTFMMTUuNjk3OSAxNC44MjFIMTMuNDg0NFYyMS41QzE4LjAyNiAyMC43ODMgMjEuNSAxNi44Mjg4IDIxLjUgMTIuMDU4MVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=)
      center center no-repeat;
    width: 24px;
    height: 24px;
  }
`;

export default CreateAccount;
