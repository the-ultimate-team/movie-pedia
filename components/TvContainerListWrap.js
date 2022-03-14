import TvPopular from "./tvHome/popular/TvPopular";
import AiringToday from "./tvHome/airingToday/AiringToday";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Container from "./responsiveLayout/Container";
import OnTheAir from "./tvHome/onTheAir/OnTheAir";
import TvTopRated from "./tvHome/tvTopRated/TvTopRated";

const TvContainerListWrap = () => {
  return (
    <div style={{ marginTop: "82px" }}>
      <Navbar />
      <Container>
        <TvPopular />
        <OnTheAir />
        <AiringToday />
        <TvTopRated />
      </Container>
      <Footer />
    </div>
  );
};

export default TvContainerListWrap;
