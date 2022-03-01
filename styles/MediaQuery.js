/** @jsxImportSource @emotion/react */
import facepaint from "facepaint";

const breakpoints = [600, 760, 1100, 1440];

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const MediaQuery = ({ style, children }) => {
  return <div css={mq(style)}>{children}</div>;
};

export default MediaQuery;
