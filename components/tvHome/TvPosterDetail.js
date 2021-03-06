import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import StarRating from "../StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPencil,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import PosterDetailCommentCard from "../PosterDetailCommentCard";
import TvSimilarPosterCard from "./TvSimilarPosterCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { useState, useEffect } from "react";

const PosterDetail = ({ tvDetailDataProps, tvDetailSimilar }) => {
  const [posterShow, setPosterShow] = useState(15);

  useEffect(() => {
    setPosterShow((prev) => 15);
  }, [tvDetailDataProps, tvDetailSimilar]);

  const {
    name,
    vote_average,
    original_language,
    poster_path,
    overview,
    genres,
    vote_count,
    first_air_date,
    backdrop_path,
  } = tvDetailDataProps;

  const NumberOfShowMore = () => {
    setPosterShow((prev) => prev + 5);
  };

  return (
    <div>
      <Navbar />
      <section css={PosterContainer}>
        <div css={PosterBigImage}>
          <img
            css={PosterBigImageStyle}
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt="image"
          />
        </div>
        <div css={PosterBasicInfoContainer}>
          <div css={PosterBasicInfo}>
            <div css={PosterImage}>
              <img
                css={PosterImageStyle}
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="image"
              />
            </div>
            <div css={PosterDetailInfo}>
              <div css={PosterTitle}>{name}</div>
              <div css={PosterDetailStyle}>
                {first_air_date} ・{" "}
                {genres?.map((genre, index) => (
                  <span key={genre.id}>
                    {index !== 0 && " / "}
                    {genre.name}
                  </span>
                ))}{" "}
                ・ {original_language}
              </div>
              <div css={PosterAvg}>
                평균★ {vote_average}점 ({vote_count}명)
              </div>
              <div css={PosterGrade}>
                <div css={PosterStar}>
                  <div css={PosterAvgFont}>평가하기</div>
                  <div>
                    <StarRating />
                  </div>
                </div>
                <div css={MiddleLine}></div>
                <div css={PosterLikeComment}>
                  <button css={LikeComment}>
                    <FontAwesomeIcon
                      css={LikeFontAwesome}
                      icon={faPlus}
                      layout="fill"
                    />
                    &nbsp; 보고싶어요
                  </button>
                  <button css={LikeComment}>
                    <FontAwesomeIcon
                      css={LikeFontAwesome}
                      icon={faPencil}
                      layout="fill"
                    />
                    &nbsp; 코멘트
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div css={PosterDetailInfoWrap}>
        <div css={PosterDetailInfoArea}>
          <div>
            <div css={PosterCoomonSort}>
              <div css={CommonSubTitleStyle}>기본 정보</div>
              <div css={CommonSubMore}>
                <a>더보기</a>
              </div>
            </div>
            <div css={PosterDetailInfoPadding}>
              <div css={MarginStyle}>
                <div>{name}</div>
                <div>
                  {first_air_date} ·{" "}
                  {genres?.map((genre, index) => (
                    <span key={genre.id}>
                      {index !== 0 && " / "}
                      {genre.name}
                    </span>
                  ))}{" "}
                  ・ {original_language}
                </div>
              </div>
              <div css={PosterDetailDesc}>{overview}</div>
              <div css={Line} />
            </div>
          </div>
          <div>
            <div css={PosterCoomonSort}>
              <div css={CommonSubTitleStyle}>코멘트</div>
              <div css={CommonSubMore}>
                <a>더보기</a>
              </div>
            </div>
            <div css={PosterCommentCardPadding}>
              <ul css={PosterCommentSort}>
                <PosterDetailCommentCard />
              </ul>
            </div>
          </div>

          <div css={SimilarPosterPadding}>
            <div css={Line2} />
            <div css={CommonSubTitleStyle}>비슷한 작품</div>
            <div css={SimilarPosterMargin}>
              <ul css={SimilarPosterFlex}>
                {tvDetailSimilar
                  ?.filter((_, index) => index < posterShow)
                  .map((tv) => (
                    <li key={tv.id} css={SimilarPosterSize}>
                      <TvSimilarPosterCard tvSimilar={tv} />
                    </li>
                  ))}
              </ul>
            </div>
            <div style={{ marginTop: "30px" }}>
              {tvDetailSimilar.length <= posterShow ? null : (
                <button onClick={NumberOfShowMore} css={SimilarPosterMore}>
                  더보기&nbsp;
                  <FontAwesomeIcon icon={faAngleDown} layout="fill" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const PosterCommentSort = css`
  display: flex;
  overflow: hidden;
`;

const SimilarPosterMore = css`
  cursor: pointer;
  border-radius: 6px;
  box-sizing: border-box;
  min-width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 18px;
  text-align: center;
  width: calc(100% - 30px);
  max-width: 172px;
  height: 34px;
  padding: 0px 0px 0px 8px;
  border: 1px solid rgb(227, 227, 227);
  margin: 0px auto !important;
`;

const SimilarPosterSize = css`
  margin-bottom: 15px;
  flex-basis: 20%;
`;

const SimilarPosterFlex = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PosterBigImageStyle = css`
  width: 100%;
  height: 100%;
  /* object-fit: contain; */
`;

const PosterImageStyle = css`
  /* vertical-align: top; */
  width: 100%;
  height: 100%;
  opacity: 1;
  /* object-fit: cover; */
`;

const SimilarPosterPadding = css`
  padding: 25px;
`;

const SimilarPosterMargin = css`
  width: 100%;
  /* height: 978.5px; */
  margin-top: 22px;
  /* overflow: hidden; */
`;

const PosterCommentCardPadding = css`
  margin: 20px;
  width: 100%;
`;

const MarginStyle = css`
  margin: 8px 0px;
`;

const PosterDetailInfoPadding = css`
  padding: 0 25px;
  color: rgb(74, 74, 74);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 24px;
`;

const PosterDetailDesc = css`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const Line = css`
  border-bottom: 1px solid #f0f0f0;
  margin-top: 20px;
`;

const Line2 = css`
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 20px;
`;

const CommonSubMore = css`
  color: rgb(255, 47, 110);
  text-decoration: none;
  margin-top: 5px;
`;

const CommonSubTitleStyle = css`
  color: rgb(0, 0, 0);
  font-size: 19px;
  font-weight: bold;
  letter-spacing: -0.7px;
  line-height: 28px;
`;

const PosterCoomonSort = css`
  display: flex;
  justify-content: space-between;
  padding: 20px 25px 10px 25px;
`;

const PosterContainer = css`
  width: 100%;
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const PosterBigImage = css`
  width: 100%;
  height: 509px;
  min-height: 209px;
  /* padding-top: 300px; */
  background-color: gray;
`;

const PosterBasicInfoContainer = css`
  padding: 14px 16px 22px;
  /* background-color: skyblue; */
`;

const PosterBasicInfo = css`
  max-width: 960px;
  margin: 0 auto;
  /* height: 200px; */
  position: relative;
`;

const PosterImage = css`
  width: 166px;
  height: 238px;
  background-color: green;
  box-shadow: rgb(0 0 0 / 30%) 0px 0px 2px;
  border-width: 2px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 3px;
  position: absolute;
  top: -50px;
`;

const PosterDetailInfo = css`
  margin: 0 0 0 191px;
`;

const PosterTitle = css`
  font-size: 33px;
  font-weight: 700;
  letter-spacing: -1.2px;
  line-height: 41px;
`;

const PosterDetailStyle = css`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
`;

const PosterAvg = css`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 8px 0px;
  border-top: 1px solid rgb(237, 237, 237);
  border-bottom: 1px solid rgb(237, 237, 237);
  margin-top: 14px;
`;

const PosterGrade = css`
  display: flex;
  margin-top: 20px;
`;

const PosterStar = css`
  width: 238px;
  height: 57px;
  text-align: center;
`;

const PosterLikeComment = css`
  display: flex;
  padding-left: 12px;
`;

const LikeComment = css`
  margin: 0 18px;
  background: none;
  padding: 0px;
  border: none;
  cursor: pointer;
  align-items: center;
  color: rgb(41, 42, 50);
  letter-spacing: -0.1px;
  text-align: center;
  font-size: 14px;
  line-height: 14px;
  width: auto;
  height: unset;

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease-in-out;
  }
`;

const LikeFontAwesome = css`
  font-size: 18px;
`;

const PosterAvgFont = css`
  font-size: 12px;
  line-height: 16px;
  color: rgb(120, 120, 120);
`;

const MiddleLine = css`
  border-left: 1px solid rgb(237, 237, 237);
`;

const PosterDetailInfoWrap = css`
  /* width: 100%; */
  background-color: rgb(248, 248, 248);
  padding: 28px 0px 48px;
`;

const PosterDetailInfoArea = css`
  max-width: 960px;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 6px;
`;

export default PosterDetail;
