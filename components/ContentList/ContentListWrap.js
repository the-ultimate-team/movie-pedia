import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Card from "./Card";
import Label from "./Label";

const WrapStyle = css`
  padding: 0 50px;
`;

const ContentListUl = css`
  list-style: none;
  display: flex;
`;

const ContentListWrap = () => {
  return (
    <div css={WrapStyle}>
      <Label />
      <div>
        <ul css={ContentListUl}>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
          <li>
            <Card />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContentListWrap;
