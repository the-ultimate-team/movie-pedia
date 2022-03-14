import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TvPosterDetail from "../../../components/tvHome/TvPosterDetail";

const TvPost = () => {
  const router = useRouter();
  const { id } = router.query;
  const [tvDetailData, setTvDetailData] = useState({});
  const [tvSimilarData, setTvSimilarData] = useState([]);

  const API_KEY = "10923b261ba94d897ac6b81148314a3f";
  const DETAIL_API_URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`;
  const SIMILAAR_API_URL = `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${API_KEY}`;

  function getTvDetailData() {
    axios.get(DETAIL_API_URL).then((res) => setTvDetailData(res.data));
  }

  function getTvSimilarData() {
    axios
      .get(SIMILAAR_API_URL)
      .then((res) => setTvSimilarData(res.data.results));
  }

  useEffect(() => {
    getTvDetailData();
  }, [id]);

  useEffect(() => {
    getTvSimilarData();
  }, [id]);

  return (
    <TvPosterDetail
      tvDetailDataProps={tvDetailData}
      tvDetailSimilar={tvSimilarData}
    />
  );
};

export default TvPost;
