import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const StarRating = () => {
  return (
    <div css={starRatingStyle}>
      <input type="radio" id="5-stars" name="rating" value="5" />
      <label htmlFor="5-stars">&#9733;</label>
      <input type="radio" id="4-stars" name="rating" value="4" />
      <label htmlFor="4-stars">&#9733;</label>
      <input type="radio" id="3-stars" name="rating" value="3" />
      <label htmlFor="3-stars">&#9733;</label>
      <input type="radio" id="2-stars" name="rating" value="2" />
      <label htmlFor="2-stars">&#9733;</label>
      <input type="radio" id="1-star" name="rating" value="1" />
      <label htmlFor="1-star">&#9733;</label>
    </div>
  );
};

const starRatingStyle = css`
  font-family: RobotoInCjk, "Noto Sans KR", "Apple SD Gothic Neo",
    "Nanum Gothic", "Malgun Gothic", sans-serif;
  margin: 0 auto;
  display: flex;
  flex-direction: row-reverse;
  font-size: 43px;
  justify-content: space-around;
  text-align: center;
  width: 190px;
  input {
    display: none;
  }
  label {
    color: #ddd;
    cursor: pointer;
  }
  input:checked ~ label {
    color: #fc0;
  }
  label:hover,
  label:hover ~ label {
    color: #fc0;
  }
`;

export default StarRating;
