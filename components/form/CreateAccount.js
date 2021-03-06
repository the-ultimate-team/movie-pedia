import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import logo from "../../assets/Logo.png";

const CreateAccount = (props) => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nicknameMessage, setNicknameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // true : 안보임 / false : 보임
  const [isNickname, setIsNickname] = useState(true);
  const [isEmail, setIsEmail] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const onNickname = (e) => {
    setNickname(e.target.value);

    if (
      e.target.value !== "" &&
      (e.target.value.length < 2 || e.target.value.length > 5)
    ) {
      setNicknameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  const onEmail = (e) => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    setEmail(e.target.value);

    if (e.target.value !== "" && !emailRegex.test(e.target.value)) {
      setEmailMessage("이메일 형식이 틀렸습니다.");
      setIsEmail(false);
    } else {
      setIsEmail(true);
    }
  };

  const onPassword = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{6,25}$/;
    setPassword(e.target.value);

    if (e.target.value !== "" && !passwordRegex.test(password)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해야 합니다."
      );
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onCreateAccount = (e) => {
    e.preventDefault();
    if (!isNickname || !isEmail || !isPassword) {
      alert("입력하신 정보가 틀렸습니다.");
      return;
    }
    if (nickname === "" || email === "" || password === "") {
      alert("회원정보를 입력해주세요.");
      return;
    }
    localStorage.setItem("nickname", nickname);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("회원가입이 완료되었습니다.");
    props.signupDoneRepresh();
  };

  useEffect(() => {
    document.body.style.cssText = `
    position: fixed; 
    top: -${window.scrollY}px;
    overflow-y: scroll;
    width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

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
            <form onSubmit={onCreateAccount}>
              <div css={InputPadding}>
                <InputStyle
                  onChange={onNickname}
                  type="text"
                  placeholder="이름"
                  value={nickname}
                  isValidation={isNickname}
                />
                {!isNickname && (
                  <span css={isNicknameValid}>{nicknameMessage}</span>
                )}
              </div>
              <div css={InputPadding}>
                <InputStyle
                  onChange={onEmail}
                  type="text"
                  placeholder="이메일"
                  value={email}
                  isValidation={isEmail}
                />
                {!isEmail && <span css={isNicknameValid}>{emailMessage}</span>}
              </div>
              <div css={InputPadding}>
                <InputStyle
                  onChange={onPassword}
                  type="password"
                  placeholder="비밀번호"
                  value={password}
                  isValidation={isPassword}
                />
                {!isPassword && (
                  <span css={isNicknameValid}>{passwordMessage}</span>
                )}
              </div>
              <button type="submit" css={ButtonStyle}>
                회원가입
              </button>
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

const isNicknameValid = css`
  color: red;
  font-size: 12px;
  display: block;
  text-align: left;
  margin: 6px 12px 4px;
`;

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
  position: fixed;
  top: calc(50vh - 270px); //브라우저 절반 - 자기 자신 높이 절반
  left: calc(50% - 187.5px); //브라우저 절반 - 자신 너비 절반
  box-shadow: 5px 10px 10px 1px rgba(0, 0, 0, 0.3);
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

const InputStyle = styled.input`
  background: ${(props) =>
    props.isValidation ? "rgb(245, 245, 245)" : "rgb(255, 240, 240);"};
  width: 100%;
  height: 44px;
  padding: 0 12px;
  border-radius: 6px;
  border: ${(props) => (props.isValidation ? "none" : "1px solid red")};
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
