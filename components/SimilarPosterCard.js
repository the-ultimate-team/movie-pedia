import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

const SimilarPosterCard = ({ movieSimilar }) => {
  const { id, title, poster_path, vote_average } = movieSimilar;
  return (
    <div>
      {/* <Link href={`/view/movie/${id}`}> */}
      <div css={SimilarPosterImage}>
        <img
          css={SimilarPosterImageSize}
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt="image"
        />
      </div>
      <div css={SimilarPosterTitle}>{title.substring(0, 20)}</div>
      <div css={AvgClassifyStyle}>평균★ {vote_average}</div>
      {/* <div css={AvgClassifyStyle}>분류</div> */}
      {/* </Link> */}
    </div>
  );
};

const SimilarPosterImageSize = css`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgb(234, 233, 232);
`;

const AvgClassifyStyle = css`
  font-size: 13px;
  color: #787878;
  line-height: 15px;
`;

const SimilarPosterTitle = css`
  font-size: 15px;
  font-weight: bold;
  line-height: 35px;
`;

const SimilarPosterImage = css`
  width: 95%;
  height: 100%;
  min-height: 261.14px;
`;

export default SimilarPosterCard;
