import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const TopRated = () => {
  const [moviesTopRated, setMoviesTopRated] = useState();

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
  );
};

const WrapStyle = css`
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
`;

export default TopRated;
