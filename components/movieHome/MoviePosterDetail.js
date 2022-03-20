import React, { useState, useEffect, useMemo } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import StarRating from "../StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faPencil,
  faAngleDown,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import PosterDetailCommentCard from "../PosterDetailCommentCard";
import SimilarPosterCard from "../SimilarPosterCard";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CommentForm from "../CommentForm";
import { throttle } from "lodash";

const MoviePosterDetail = ({ moiveDetailDataProps, movieDetailSimilar }) => {
  const [posterShow, setPosterShow] = useState(15);
  const [commentModalToggle, setCommentModalToggle] = useState(false);
  const [commentSave, setCommentSave] = useState();
  const [likeToggle, setLikeToogle] = useState(false);
  const commentNickname = localStorage.getItem("nickname");
  const [navbarTransColor, setNavbarTransColor] = useState(true);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
          setNavbarTransColor(false);
        } else {
          setNavbarTransColor(true);
        }
      }, 300),
    []
  );

  useEffect(() => {
    function scrollListener() {
      window.addEventListener("scroll", handleScroll);
    } //  window 에서 스크롤을 감시 시작
    scrollListener(); // window 에서 스크롤을 감시
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //  window 에서 스크롤을 감시를 종료
  });

  useEffect(() => {
    setPosterShow((prev) => 15);
  }, [moiveDetailDataProps, movieDetailSimilar]);

  const {
    title,
    vote_average,
    original_language,
    poster_path,
    overview,
    genres,
    vote_count,
    runtime,
    release_date,
    backdrop_path,
  } = moiveDetailDataProps;

  const NumberOfShowMore = () => {
    setPosterShow((prev) => prev + 5);
  };

  const onCommentModalHandler = () => {
    setCommentModalToggle((prev) => !commentModalToggle);
  };

  const getCommentText = (comment) => {
    setCommentSave({
      id: Math.random(),
      comment,
      nickname: commentNickname,
    });
  };

  const onCommentModalClose = () => {
    setCommentModalToggle((prev) => !commentModalToggle);
  };

  const onlikeToggle = () => {
    setLikeToogle((prev) => !likeToggle);
  };

  return (
    <div>
      <Navbar navbarTrans={navbarTransColor} />
      {commentModalToggle ? (
        <CommentForm
          saveComment={getCommentText}
          onCommentModal={onCommentModalHandler}
          commentSaveButtonClose={onCommentModalClose}
        />
      ) : null}
      <section css={PosterContainer}>
        <div css={PosterBigImage}>
          {/* <img
            css={PosterBigImageStyle}
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt="image"
          /> */}
          <BackgroundImage
            url={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
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
              <div css={PosterTitle}>{title}</div>
              <div css={PosterDetailStyle}>
                {release_date} ・{" "}
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
                  <LikeComment onClick={onlikeToggle} toggle={likeToggle}>
                    {likeToggle ? (
                      <FontAwesomeIcon
                        css={HeartStyle}
                        icon={faHeart}
                        layout="fill"
                      />
                    ) : (
                      <FontAwesomeIcon
                        css={LikeFontAwesome}
                        icon={faPlus}
                        layout="fill"
                      />
                    )}
                    &nbsp; <span>보고싶어요</span>
                  </LikeComment>

                  <LikeComment onClick={onCommentModalHandler}>
                    <FontAwesomeIcon
                      css={LikeFontAwesome}
                      icon={faPencil}
                      layout="fill"
                    />
                    &nbsp; 코멘트
                  </LikeComment>
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
                <div>{title}</div>
                <div>
                  {release_date} ·{" "}
                  {genres?.map((genre, index) => (
                    <span key={genre.id}>
                      {index !== 0 && " / "}
                      {genre.name}
                    </span>
                  ))}{" "}
                  ・ {original_language}
                </div>
                <div>{runtime}분</div>
              </div>
              <div css={PosterDetailDesc}>{overview}</div>
              <div css={Line} />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div css={PosterCoomonSort}>
              <div css={CommonSubTitleStyle}>코멘트</div>
              <div css={CommonSubMore}>
                <a>더보기</a>
              </div>
            </div>
            <div css={PosterCommentCardPadding}>
              <ul css={PosterCommentSort}>
                <PosterDetailCommentCard commentSubmit={commentSave} />
              </ul>
            </div>
          </div>

          <div css={SimilarPosterPadding}>
            <div css={Line2} />
            <div css={CommonSubTitleStyle}>비슷한 작품</div>
            <div css={SimilarPosterMargin}>
              <ul css={SimilarPosterFlex}>
                {movieDetailSimilar
                  ?.filter((_, index) => index < posterShow)
                  .map((movie) => (
                    <li key={movie.id} css={SimilarPosterSize}>
                      <SimilarPosterCard movieSimilar={movie} />
                    </li>
                  ))}
              </ul>
            </div>
            <div style={{ marginTop: "30px" }}>
              {movieDetailSimilar.length <= posterShow ? null : (
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

const HeartStyle = css`
  color: rgb(255, 47, 110);
  font-size: 18px;
`;

const LikeFontAwesome = css`
  font-size: 18px;
`;

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

const PosterImageStyle = css`
  /* vertical-align: top; */
  width: 100%;
  height: 100%;
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
  overflow-x: hidden;
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
  height: 394px;
  min-height: 209px;
  /* padding-top: 300px; */
  background-color: black;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 209px;
  filter: blur(2px);
  background: linear-gradient(
            to right,
            rgba(20, 20, 20, 0) 10%,
            rgba(20, 20, 20, 0.25) 25%,
            rgba(20, 20, 20, 0.5) 50%,
            rgba(20, 20, 20, 0.75) 75%,
            rgba(20, 20, 20, 1) 100%
          ),
    url(${(props) => props.url});
    background-size: cover;
}
;
`;
const PosterBigImageStyle = css`
  /* width: 50%;
  height: 50%; */
  /* object-fit: contain; */
  width: 60%;
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

const LikeComment = styled.button`
  margin: 0 18px;
  background: none;
  padding: 0px;
  border: none;
  cursor: pointer;
  align-items: center;
  color: ${(props) => (props.toggle ? "rgb(255, 47, 110)" : "rgb(41, 42, 50)")};
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

export default MoviePosterDetail;
