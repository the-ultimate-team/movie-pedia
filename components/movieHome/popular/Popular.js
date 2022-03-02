import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const Popular = () => {
  const [moviesPopular, setMoviesPopular] = useState();

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

  const RightArrowSlide = () => {
    console.log("dds");
  };

  return (
    <>
      <div css={WrapStyle}>
        <Label categoryTheme="현재인기작" />
        <div css={SlideContainer}>
          <ul css={ContentListUl}>
            {moviesPopular?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
          <div css={RightArrowPosition}>
            <div onClick={RightArrowSlide} css={RightArrow}>
              <FontAwesomeIcon icon={faAngleRight} layout="fill" />
            </div>
          </div>
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
`;

const SlideContainer = css`
  position: relative;
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
  transition: opacity 300ms ease 0s;
`;

const RightArrowPosition = css`
  display: flex;
  position: absolute;
  top: 35%;
  right: 0;
  z-index: 2;
  align-items: center;
  transition: all 300ms ease 0s;
`;

export default Popular;
