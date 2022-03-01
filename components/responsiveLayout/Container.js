import MediaQuery from "../../styles/MediaQuery";

const Container = ({ children }) => {
  return (
    <MediaQuery
      style={{
        maxWidth: "1320px",
        margin: ["", "0 20px", "0 3.5%", "0 60px", "0 auto"],
      }}
    >
      {children}
    </MediaQuery>
  );
};

export default Container;
