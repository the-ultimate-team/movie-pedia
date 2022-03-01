import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Card from "./Card";
import Label from "./Label";
import axios from "axios";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const ContentListWrap = () => {
  const [moviesPopular, setMoviesPopular] = useState();
  const [moviesNowPlaying, setMoviesNowPlaying] = useState();
  const [moviesUpComing, setMoviesUpcoming] = useState();
  const [moviesTopRated, setMoviesTopRated] = useState();

  useEffect(() => {
    async function getMovieData() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then((res) => {
          setMoviesPopular(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    getMovieData();
  }, []);

  useEffect(() => {
    async function getNowPlaying() {
      await axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
        )
        .then((res) => {
          setMoviesNowPlaying(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    getNowPlaying();
  }, []);

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

  useEffect(() => {
    async function getTopRated() {
      await axios
        .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
        .then((res) => {
          setMoviesTopRated(res.data.results);
        })
        .catch((err) => console.log(err));
    }
    getTopRated();
  }, []);

  return (
    <>
      <div css={WrapStyle}>
        <Label categoryTheme="현재인기작" />
        <div>
          <ul css={ContentListUl}>
            {moviesPopular?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
        </div>
      </div>

      <div css={WrapStyle}>
        <Label categoryTheme="현재상영작" />
        <div>
          <ul css={ContentListUl}>
            {moviesNowPlaying?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
        </div>
      </div>

      <div css={WrapStyle}>
        <Label categoryTheme="상영예정작" />
        <div>
          <ul css={ContentListUl}>
            {moviesUpComing?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
        </div>
      </div>

      <div css={WrapStyle}>
        <Label categoryTheme="평점순" />
        <div>
          <ul css={ContentListUl}>
            {moviesTopRated?.map((movie) => (
              <Card key={movie.id} movieItem={movie} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const WrapStyle = css`
  max-width: 1320px;
  margin: 0 auto;
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
`;

export default ContentListWrap;
