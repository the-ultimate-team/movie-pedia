import React from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";

const Detail = () => {
  return (
    <div>
      <section css={BigImage}>
        <div>대형 이미지</div>
        <div>
          <div>
            <div>소형 포스터 이미지</div>
            <div>
              <h1>타이틀</h1>
              <div>2021 ・ 전기/드라마 ・ 영국/독일/미국</div>
              <div>
                <div>
                  <div>평가하기</div>
                  <div>별표</div>
                </div>
                <div>중간 선</div>
                <div>
                  <div>좋아요</div>
                  <div>코멘트</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const BigImage = css`
  position: absolute;
  top: 0px;
  left: 0px;
  justify-content: center;
  background: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default Detail;
