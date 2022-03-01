import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";

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

  return (
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
  );
};

const WrapStyle = css`
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
`;

export default Popular;
