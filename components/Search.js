import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchResult from "./SearchResult";
import { useRouter } from "next/router";
import Label from "./Label";
import Container from "./responsiveLayout/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const router = useRouter();
  const { search } = router.query;
  const [movieFilter, setMovieFilter] = useState();
  const [tvFilter, setTvFilter] = useState();
  const [searchValueNothing, setSearchValueNothing] = useState(false);
  const [posterShow, setPosterShow] = useState(10);
  const [tvShow, setTvShow] = useState(10);

  const API_KEY = "10923b261ba94d897ac6b81148314a3f";
  const SEARCH_API_URL = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${search}`;

  useEffect(() => {
    async function getSearchData() {
      await axios
        .get(SEARCH_API_URL)
        .then((res) => {
          setMovieFilter(
            res.data.results.filter((movie) => movie.media_type === "movie")
          );
          setTvFilter(res.data.results.filter((tv) => tv.media_type === "tv"));
        })
        .catch((err) => console.log(err));
    }
    getSearchData();
  }, [search]);

  useEffect(() => {
    setPosterShow((prev) => 10);
    setTvShow((prev) => 10);
  }, [search]);

  const NumberOfShowMore = () => {
    setPosterShow((prev) => prev + 5);
  };

  const NumberOfTvShowMore = () => {
    setTvShow((prev) => prev + 5);
  };

  return (
    <>
      <Navbar />
      <div css={SearchResultWrap}></div>
      <Container>
        <p css={SearchResultFont}>{`"${search}" 의 검색결과`}</p>
        <div style={{ marginTop: "22px" }}>
          <Label categoryTheme="Movie" />
          {movieFilter?.length === 0 ? (
            <SearchResult />
          ) : (
            <>
              <div css={SearchWrapper}>
                {movieFilter
                  ?.filter((_, index) => index < posterShow)
                  .map((searchItem) => (
                    <>
                      <div css={PosterSize}>
                        <div>
                          <img
                            css={ImageSize}
                            src={`https://image.tmdb.org/t/p/w500/${searchItem.poster_path}`}
                            alt="image"
                          />
                        </div>
                        <div css={TitleStyle}>{searchItem.title}</div>
                        <div css={CountryLanguage}>
                          <div css={CountryStyle}>
                            {searchItem.release_date}
                          </div>{" "}
                          ・
                          <div css={CountryStyle}>
                            {searchItem.original_language}
                          </div>
                        </div>

                        <div css={CountryStyle}>{searchItem.media_type}</div>
                      </div>
                    </>
                  ))}
              </div>
              <div style={{ marginTop: "30px" }}>
                {movieFilter?.length <= posterShow ? null : (
                  <button onClick={NumberOfShowMore} css={SimilarPosterMore}>
                    더보기&nbsp;
                    <FontAwesomeIcon icon={faAngleDown} layout="fill" />
                  </button>
                )}
              </div>
            </>
          )}

          <div css={Line} />

          <Label categoryTheme="TV프로그램" />
          {tvFilter?.length === 0 ? (
            <SearchResult />
          ) : (
            <>
              <div css={SearchWrapper}>
                {tvFilter
                  ?.filter((_, index) => index < tvShow)
                  .map((searchItem) => (
                    <>
                      <div css={PosterSize}>
                        <div>
                          <img
                            css={ImageSize}
                            src={`https://image.tmdb.org/t/p/w500/${searchItem.poster_path}`}
                            alt="image"
                          />
                        </div>
                        <div css={TitleStyle}>{searchItem.name}</div>
                        <div css={CountryLanguage}>
                          <div css={CountryStyle}>
                            {searchItem.first_air_date
                              ? searchItem.first_air_date
                              : "upcoming"}
                          </div>
                          ・
                          <div css={CountryStyle}>
                            {searchItem.original_language}
                          </div>
                        </div>

                        <div css={CountryStyle}>{searchItem.media_type}</div>
                      </div>
                    </>
                  ))}
              </div>
              <div style={{ marginTop: "30px" }}>
                {tvFilter?.length <= tvShow ? null : (
                  <button onClick={NumberOfTvShowMore} css={SimilarPosterMore}>
                    더보기&nbsp;
                    <FontAwesomeIcon icon={faAngleDown} layout="fill" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

const Line = css`
  border-bottom: 1px solid #f0f0f0;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SearchResultFont = css`
  display: flex;
  align-items: center;
  color: rgb(116, 116, 123);
  font-size: 15px;
  letter-spacing: -0.3px;
  line-height: 26px;
  position: absolute;
  font-weight: bold;
  top: 70px;
`;

const SearchResultWrap = css`
  background: rgb(247, 247, 247);
  width: 100%;
  height: 43px;
  margin-top: 62px;
`;

const SimilarPosterMore = css`
  cursor: pointer;
  border-radius: 6px;
  box-sizing: border-box;
  min-width: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 18px;
  text-align: center;
  width: calc(100% - 30px);
  max-width: 172px;
  height: 34px;
  padding: 0px 0px 0px 8px;
  border: 1px solid rgb(227, 227, 227);
  margin: 0px auto !important;
`;

const CountryLanguage = css`
  display: flex;
`;

const PosterSize = css`
  width: 20%;
  padding-right: 10px;
  margin-bottom: 20px;
`;

const CountryStyle = css`
  color: rgb(160, 160, 160);
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 18px;
  text-overflow: ellipsis;
`;

const TitleStyle = css`
  color: rgb(31, 31, 31);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  text-overflow: ellipsis;
`;

const ImageSize = css`
  width: 100%;
  height: 100%;
`;

const SearchWrapper = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export default Search;
