import React, { useEffect, useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const UpComing = () => {
  const [moviesUpComing, setMoviesUpcoming] = useState();
  const [rightArrowToggle, setRightArrowToggle] = useState(true);
  const [leftArrowToggle, setLeftArrowToggle] = useState(false);
  const [scrollXWidth, setScrollXWidth] = useState(0);

  useEffect(() => {
    async function getUpComing() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`)
        .then((res) => {
          setMoviesUpcoming(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    getUpComing();
  }, []);

  const contentListSlideWrap = useRef();
  let arrowButtonHidden = 0;

  useEffect(() => {
    setScrollXWidth((prev) => contentListSlideWrap.current.clientWidth);
  }, []);

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
    if (arrowButtonHidden <= 10) {
      setLeftArrowToggle(false);
    }
    if (arrowButtonHidden <= scrollXWidth * 2) {
      setRightArrowToggle(true);
    }
  };

  return (
    <div css={WrapStyle}>
      <Label categoryTheme="상영예정작" />
      <div css={SlideContainer}>
        <LeftArrowPosition leftArrowToggle={leftArrowToggle}>
          <div onClick={LeftArrowSlide} css={LeftArrow}>
            <FontAwesomeIcon icon={faAngleLeft} layout="fill" />
          </div>
        </LeftArrowPosition>

        <ul css={ContentListUl} ref={contentListSlideWrap}>
          {moviesUpComing?.map((movie) => (
            <Card key={movie.id} movieItem={movie} />
          ))}
        </ul>

        <RightArrowPosition rightArrowToggle={rightArrowToggle}>
          <div onClick={RightArrowSlide} css={RightArrow}>
            <FontAwesomeIcon icon={faAngleRight} layout="fill" />
          </div>
        </RightArrowPosition>
      </div>
    </div>
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

const LeftArrowPosition = styled.div`
  display: flex;
  position: absolute;
  top: 35%;
  left: -15px;
  z-index: 2;
  align-items: center;
  opacity: ${(props) => (props.leftArrowToggle ? 1 : 0)};
  transition: all 0.5s ease;
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

const RightArrowPosition = styled.div`
  display: flex;
  position: absolute;
  top: 35%;
  right: 0;
  /* z-index: 1; */
  align-items: center;
  opacity: ${(props) => (props.rightArrowToggle ? 1 : 0)};
  transition: all 0.5s ease;
`;

export default UpComing;
