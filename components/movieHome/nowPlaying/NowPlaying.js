import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const NowPlaying = () => {
  const [moviesNowPlaying, setMoviesNowPlaying] = useState();

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

  return (
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
  );
};

const WrapStyle = css`
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
`;

export default NowPlaying;
