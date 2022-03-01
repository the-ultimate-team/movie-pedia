import React from "react";
import Container from "./responsiveLayout/Container";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitterSquare,
  faBlogger,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer css={FooterPosition}>
      <div css={FooterGrade}>
        지금까지
        <span css={FooterGradeContent}> ★ 652,014,648 개의 평가가 </span>
        쌓였어요.
      </div>
      <section css={FooterInfoWrap}>
        <Container>
          <div css={MaxWidthAuto}>
            <div>
              <ul css={UlFlexStyle}>
                <li css={LiAfterStyle}>서비스 이용약관</li>
                <li css={LiAfterStyle}>개인정보 처리방침</li>
                <li>회사 안내</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li css={LiAfterStyle}>고객센터</li>
                <li>cs@watchapedia.co.kr, 02-515-9985</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li css={LiAfterStyle}>광고문의</li>
                <li>ad@watcha.com</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li>제휴 및 대외 협력&nbsp; </li>
                <li>https://watcha.team/contact</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li css={LiAfterStyle}>주식회사 왓챠</li>
                <li css={LiAfterStyle}>대표 박태훈</li>
                <li>서울특별시 서초구 강남대로 343 신덕빌딩 3층</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li>사업자 등록 번호 211-88-66013</li>
              </ul>
              <ul css={UlFlexStyle}>
                <li>WATCHA PEDIA&nbsp;</li>
                <li>© 2021 by WATCHA, Inc. All rights reserved.</li>
              </ul>
            </div>
            <div>
              <div>
                <button css={ButtonStyle}>한국어</button>
              </div>
              <div style={{ marginTop: "99px" }}>
                <ul css={FontAwesomeWrap}>
                  <li css={FontAwesomeLi}>
                    <FontAwesomeIcon css={FontAwesomeSize} icon={faFacebook} />
                  </li>
                  <li css={FontAwesomeLi}>
                    <FontAwesomeIcon
                      css={FontAwesomeSize}
                      icon={faTwitterSquare}
                    />
                  </li>
                  <li css={FontAwesomeLi}>
                    <FontAwesomeIcon css={FontAwesomeSize} icon={faBlogger} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </footer>
  );
};

const FooterGrade = css`
  background-color: #101113;
  line-height: 62px;
  text-align: center;
  height: 62px;
  color: #d1d1d2;
  letter-spacing: -0.3px;
  font-size: 19px;
`;

const FooterGradeContent = css`
  color: #ff0558;
  font-size: 19px;
  letter-spacing: -0.3px;
`;

const FooterInfoWrap = css`
  width: 100%;

  background-color: #1c1d1f;
  padding: 20px 0 38px;
  color: #a5a5a7;
  font-size: 13px;
  letter-spacing: -0.3px;
  line-height: 22px;
`;

const MaxWidthAuto = css`
  max-width: 1320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const UlFlexStyle = css`
  display: flex;
`;

const LiAfterStyle = css`
  &::after {
    content: "";
    display: inline-block;
    background: #848485;
    vertical-align: top;
    width: 1px;
    height: 12px;
    margin: 5px 8px 0;
  }
`;

const FooterPosition = css`
  width: 100%;
`;

const ButtonStyle = css`
  background: none;
  cursor: pointer;
  position: relative;
  color: #a5a5a7;
  font-size: 15px;
  letter-spacing: -0.3px;
  line-height: 23px;
  text-align: left;
  width: 117px;
  height: 30px;
  padding: 2.5px 10px 4.5px;
  border: solid 1px #848485;
  border-radius: 2px;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 7px;
    right: 5px;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI2E1YTVhNyIgZmlsbC1vcGFjaXR5PSIuODgiIGQ9Ik0xLjY2IDMuNjY3TDEwLjM0IDMuNjY3IDYgOC4wMDR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyIDIpIi8+CiAgICA8L2c+Cjwvc3ZnPgo=) center no-repeat;
    width: 16px;
    height: 16px;
}
  }
`;

const FontAwesomeWrap = css`
  display: flex;
`;

const FontAwesomeSize = css`
  font-size: 24px;
`;

const FontAwesomeLi = css`
  padding-left: 14px;
`;

export default Footer;
