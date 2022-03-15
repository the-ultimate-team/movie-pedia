import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CommentForm = (props) => {
  const [comment, setComment] = useState("");

  const CommentText = (e) => {
    setComment(e.target.value);
  };

  const SaveComment = (e) => {
    e.preventDefault();
    alert("저장되었습니다.");
    props.saveComment(comment);
    props.commentSaveButtonClose();
  };

  return (
    <div css={CenterPositioinParent}>
      <form onSubmit={SaveComment}>
        <div css={CommentSize}>
          <div css={TitleXmarkSort}>
            <div css={TitleStyle}>제목</div>
            <div onClick={props.onCommentModal}>
              <FontAwesomeIcon
                css={CircleXmarkStyle}
                icon={faCircleXmark}
                layout="fill"
              />
            </div>
          </div>
          <div>
            <textarea
              css={CommentAreaStyle}
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={CommentText}
            ></textarea>
          </div>
          <div css={ButtonPosition}>
            <button type="submit" css={SaveButton}>
              저장
            </button>
          </div>
        </div>
      </form>

      <div onClick={props.onCommentModal} css={Background}></div>
    </div>
  );
};
const CenterPositioinParent = css`
  position: relative;
`;

const Background = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.56);
`;

const ButtonPosition = css`
  display: flex;
  justify-content: flex-end;
`;

const SaveButton = css`
  background: none rgb(255, 47, 110);
  border: none;
  margin: 0px 0px 0px 12px;
  position: relative;
  z-index: 51;
  color: rgb(255, 255, 255);
  font-size: 15px;
  letter-spacing: -0.3px;
  line-height: 18px;
  height: 38px;
  padding: 0px 40px;
  border-radius: 7px;
  /* opacity: 0.5; */
  /* cursor: not-allowed; */
`;

const CommentAreaStyle = css`
  font-weight: 400;
  font-size: 17px;
  letter-spacing: -0.6px;
  line-height: 21px;
  width: 100%;
  min-height: 360px;
  border: 0px;
  outline: none;
  margin: 1px 0px;
  resize: none;
  overflow: auto;
`;

const CircleXmarkStyle = css`
  font-size: 30px;
  color: #333;

  &:hover {
    color: rgb(255, 47, 110);
  }
`;

const TitleStyle = css`
  color: rgb(41, 42, 50);
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.5px;
  line-height: 22px;
`;

const TitleXmarkSort = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CommentSize = css`
  display: inline-block;
  position: absolute;
  top: calc(50vh - 130px - 82px); //브라우저 절반 - 자기 자신 높이 절반 - 헤더
  left: calc(50% - 240px); //브라우저 절반 - 자신 너비 절반
  width: 480px;
  height: auto;
  min-height: 460px;
  padding: 16px 20px 18px;
  border-radius: 6px;
  overflow: auto;
  background: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px 0px;
  z-index: 101;
`;

export default CommentForm;
