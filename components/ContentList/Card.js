/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";

const Card = ({ movieItem }) => {
  const { poster_path, original_title, vote_average, release_date } = movieItem;
  return (
    <li css={ContentLi}>
      <div css={CardStyle}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="image"
        />
        <div css={TitleStyle}>{original_title}</div>
        <div css={YearNationSort}>
          <div css={YearNationStyle}>개봉일&nbsp;</div>
          <div css={YearNationStyle}>{release_date}</div>
        </div>
        <div css={YearNationSort}>
          <div css={AvgGradeStyle}>평균★&nbsp;</div>
          <div css={AvgGradeStyle}>{vote_average}</div>
        </div>
      </div>
    </li>
  );
};

const ContentLi = css`
  width: 20%;
  padding: 8px;
`;

const CardStyle = css`
  display: flex;
  flex-direction: column;
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
  line-height: 22px;
  font-size: 14px;
`;

const AvgGradeStyle = css`
  color: #555765;
  font-size: 14px;
  line-height: 22px;
`;

export default Card;
