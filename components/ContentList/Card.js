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
`;

const YearNationSort = css`
  display: flex;
`;

const TitleStyle = css`
  font-size: 16px;
  color: #292a32;
  font-weight: bold;
  letter-spacing: -0.3px;
  line-height: 22px;
  margin-bottom: 3px;
`;

const YearNationStyle = css`
  color: #292a32;
  line-height: 21px;
  font-size: 14px;
`;

const AvgGradeStyle = css`
  color: #555765;
  font-size: 14px;
  line-height: 14px;
`;

const Card = () => {
  return (
    <div css={CardStyle}>
      <div css={ImageStyle}>이미지</div>
      <div css={TitleStyle}>타이틀</div>
      <div css={YearNationSort}>
        <div css={YearNationStyle}>년도&nbsp;</div>
        <div css={YearNationStyle}>국가</div>
      </div>
      <div css={YearNationSort}>
        <div css={AvgGradeStyle}>평균★&nbsp;</div>
        <div css={AvgGradeStyle}>평점</div>
      </div>
    </div>
  );
};

export default Card;
