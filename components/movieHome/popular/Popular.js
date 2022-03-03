import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Popular = () => {
  const [moviesPopular, setMoviesPopular] = useState();
  const [rightArrowToggle, setRightArrowToggle] = useState(true);
  const [leftArrowToggle, setLeftArrowToggle] = useState(false);

  useEffect(() => {
    async function getMoviePopular() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((res) => {
          setMoviesPopular(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    getMoviePopular();
  }, []);

  const contentListSlideWrap = useRef();
  let arrowButtonHidden = 0;
  let scrollXWidth = 1320;

  const RightArrowSlide = () => {
    arrowButtonHidden = contentListSlideWrap.current.scrollLeft += scrollXWidth;
    if (arrowButtonHidden > scrollXWidth * 2) {
      setRightArrowToggle(false);
    }
    if (arrowButtonHidden > 0) {
      setLeftArrowToggle(true);
    }
  };

  const LeftArrowSlide = () => {
    arrowButtonHidden = contentListSlideWrap.current.scrollLeft -= scrollXWidth;
    if (arrowButtonHidden === 0) {
      setLeftArrowToggle(false);
    }
    if (arrowButtonHidden <= scrollXWidth * 2) {
      setRightArrowToggle(true);
    }
  };

  return (
    <>
      <div css={WrapStyle}>
        <Label categoryTheme="현재인기작" />
        <div css={SlideContainer}>
          {/* {leftArrowToggle ? ( */}
          <div leftArrowToggle={leftArrowToggle} css={LeftArrowPosition}>
            <div onClick={LeftArrowSlide} css={LeftArrow}>
              <FontAwesomeIcon icon={faAngleLeft} layout="fill" />
            </div>
          </div>
          {/* ) : null} */}

          <ul css={ContentListUl} ref={contentListSlideWrap}>
            {moviesPopular?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
          {rightArrowToggle ? (
            <div css={RightArrowPosition}>
              <div onClick={RightArrowSlide} css={RightArrow}>
                <FontAwesomeIcon icon={faAngleRight} layout="fill" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

const WrapStyle = css`
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const SlideContainer = css`
  position: relative;
`;

const LeftArrow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
  background-size: 12px;
  width: 34px;
  height: 34px;
  cursor: pointer;

  &:hover {
    color: rgb(255, 47, 110);
  }
}
`;

const LeftArrowPosition = (props) => css`
  display: flex;
  position: absolute;
  top: 35%;
  left: -15px;
  z-index: 2;
  align-items: center;
  opacity: ${props.leftArrowToggle ? 1 : 0};
  transition: all 2s ease-in-out;
`;

const RightArrow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  border: 1px solid rgb(249, 249, 249);
  border-radius: 50%;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;
  background-size: 12px;
  width: 34px;
  height: 34px;
  cursor: pointer;

  &:hover {
    color: rgb(255, 47, 110);
  }
`;

const RightArrowPosition = css`
  display: flex;
  position: absolute;
  top: 35%;
  right: 0;
  z-index: 2;
  align-items: center;
`;

export default Popular;
