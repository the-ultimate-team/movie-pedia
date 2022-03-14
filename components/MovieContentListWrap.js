import Container from "./responsiveLayout/Container";
import Popular from "./movieHome/popular/Popular";
import NowPlaying from "./movieHome/nowPlaying/NowPlaying";
import UpComing from "./movieHome/upComing/UpComing";
import TopRated from "./movieHome/topRated/TopRated";

const MovieContentListWrap = () => {
  return (
    <Container>
      <Popular />
      <NowPlaying />
      <UpComing />
      <TopRated />
    </Container>
  );
};

export default MovieContentListWrap;
