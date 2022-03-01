import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Label from "../../Label";
import Card from "../../Card";
import axios from "axios";

const API_KEY = "10923b261ba94d897ac6b81148314a3f";

const UpComing = () => {
  const [moviesUpComing, setMoviesUpcoming] = useState();

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

  return (
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
  );
};

const WrapStyle = css`
  overflow-x: auto;
`;

const ContentListUl = css`
  display: flex;
`;

export default UpComing;
