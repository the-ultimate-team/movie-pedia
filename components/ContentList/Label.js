import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const LabelStyle = css`
  color: #292a32;
  font-size: 22px;
  letter-spacing: -0.4px;
  line-height: 30px;
`;

const LabelDivStyle = css`
  padding: 12px 0 14px;
`;

const Label = () => {
  return (
    <div css={LabelDivStyle}>
      <span css={LabelStyle}>박스오피스 순위</span>
    </div>
  );
};

export default Label;
