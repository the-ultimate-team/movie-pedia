import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const CardStyle = css`
  display: flex;
  flex-direction: column;
`;

const ImageStyle = css`
  width: 100%;
  height: 100%;
  background: gray;
  opacity: 0.6;
`;

const Card = () => {
  return (
    <div css={CardStyle}>
      <div css={ImageStyle}>이미지</div>
      <div>타이틀</div>
      <div>
        <div>년도</div>
        <div>국가</div>
      </div>
      <div>
        <div>평균★</div>
        <div>평점</div>
      </div>
    </div>
  );
};

export default Card;
