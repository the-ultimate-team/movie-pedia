import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Card from "./Card";
import Label from "./Label";

const WrapStyle = css`
  padding: 0 50px;
`;

const ContentListUl = css`
  display: flex;
`;

const ContentLi = css`
  width: 20%;
  padding: 8px;
`;

const ContentListWrap = () => {
  return (
    <div css={WrapStyle}>
      <Label />
      <div>
        <ul css={ContentListUl}>
          <li css={ContentLi}>
            <Card />
          </li>
          <li css={ContentLi}>
            <Card />
          </li>
          <li css={ContentLi}>
            <Card />
          </li>
          <li css={ContentLi}>
            <Card />
          </li>
          <li css={ContentLi}>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentListWrap;
