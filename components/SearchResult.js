import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const SearchResult = () => {
  return (
    <div css={SearchResultFont}>
      검색 결과가 없어요. 다른 검색어를 입력해보세요.
    </div>
  );
};

const SearchResultFont = css`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(160, 160, 160);
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  white-space: pre-wrap;
  height: 50vh;
`;

export default SearchResult;
