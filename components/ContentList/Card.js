import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Image from "next/image";
import axios from "axios";

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

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Card = () => {
  const [moives, setMovies] = useState([]);

  useEffect(async () => {
    const res = await axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <div css={CardStyle}>
      <img
        src="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
        css={ImageStyle}
        alt="image"
        layout="fill"
      />
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
