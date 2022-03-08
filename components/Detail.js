import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import StarRating from "./StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPencil } from "@fortawesome/free-solid-svg-icons";

const Detail = () => {
  return (
    <div>
      <section css={PosterContainer}>
        <div css={PosterBigImage}>빅 이미지</div>
        <div css={PosterBasicInfoContainer}>
          <div css={PosterBasicInfo}>
            <div css={PosterImage}></div>
            <div css={PosterDetailInfo}>
              <div css={PosterTitle}>타이틀명</div>
              <div css={PosterDetail}>2022 ・ 액션/범죄/드라마 ・ 미국</div>
              <div css={PosterAvg}>평균 ★</div>
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
        <div css={PosterDetailInfoArea}>dd</div>
      </div>
    </div>
  );
};

const PosterContainer = css`
  width: 100%;
  border-bottom: 1px solid rgb(227, 227, 227);
`;

const PosterBigImage = css`
  width: 100%;
  height: 509px;
  min-height: 209px;
  padding-top: 300px;
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

const PosterDetail = css`
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
  width: 63%;
  background-color: #fff;
  margin: 0 auto;
`;

export default Detail;
