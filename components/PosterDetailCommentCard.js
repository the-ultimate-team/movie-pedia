import React, { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faComment } from "@fortawesome/free-solid-svg-icons";

const CommonThumbsUpCommentStyle = css`
  background-size: contain;
  width: 18px;
  height: 18px;
  margin-right: 15px;
  opacity: 0.5;
`;

const GoodandCommentCount = css`
  display: flex;
  padding-top: 15px;
`;

const CommentContent = css`
  height: 120px;
  padding-top: 15px;
  word-break: break-all;
  max-height: 120px;
  margin: 0px;
  overflow: hidden;
  white-space: pre-wrap;
  border-bottom: 1px solid rgb(229, 229, 229);
`;

const UserNickname = css`
  color: rgb(31, 31, 31);
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 30px;
`;

const UserProfile = css`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-color: black;
  margin-right: 8px;
`;

const UserInfo = css`
  display: flex;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(229, 229, 229);
`;

const CommentPadding = css`
  padding: 15px;
  background-color: rgb(242, 242, 242);
  border-radius: 6px;
`;

const CommentSize = css`
  width: 25%;
  padding: 5px;
`;

const PosterDetailCommentCard = ({ commentSubmit }) => {
  const [commentList, setCommentList] = useState([
    {
      id: 1,
      nickname: "탈리아",
      comment: "재밌네요.",
    },
    {
      id: 2,
      nickname: "알리스타",
      comment: "스토리가 탄탄해요.",
    },
  ]);

  useEffect(() => {
    if (commentSubmit)
      setCommentList((prev) => [...commentList, commentSubmit]);
  }, [commentSubmit]);

  return (
    <>
      {commentList.map((comment) => (
        <li css={CommentSize} key={comment.id}>
          <div css={CommentPadding}>
            <div css={UserInfo}>
              <div css={UserProfile}></div>
              <div css={UserNickname}>{comment.nickname}</div>
            </div>
            <div css={CommentContent}>{comment.comment}</div>
            <div css={GoodandCommentCount}>
              <div>
                <FontAwesomeIcon
                  css={CommonThumbsUpCommentStyle}
                  icon={faThumbsUp}
                  layout="fill"
                />
              </div>
              <div>
                <FontAwesomeIcon
                  css={CommonThumbsUpCommentStyle}
                  icon={faComment}
                  layout="fill"
                />
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default PosterDetailCommentCard;
