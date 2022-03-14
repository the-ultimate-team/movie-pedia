import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MoviePosterDetail from "../../../components/movieHome/MoviePosterDetail";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [moiveDetailData, setMovieDetailData] = useState({});
  const [movieSimilarData, setMovieSimilarData] = useState([]);

  const API_KEY = "10923b261ba94d897ac6b81148314a3f";
  const DETAIL_API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  const SIMILAAR_API_URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}`;

  function getMovieDetailData() {
    axios.get(DETAIL_API_URL).then((res) => setMovieDetailData(res.data));
  }

  function getMovieSimilarData() {
    axios
      .get(SIMILAAR_API_URL)
      .then((res) => setMovieSimilarData(res.data.results));
  }

  useEffect(() => {
    getMovieSimilarData();
  }, [id]);

  useEffect(() => {
    getMovieDetailData();
  }, [id]);

  return (
    <MoviePosterDetail
      moiveDetailDataProps={moiveDetailData}
      movieDetailSimilar={movieSimilarData}
    />
  );
};

export default Post;
