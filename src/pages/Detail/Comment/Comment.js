import React, { useEffect, useState } from 'react';
import './Comment.scss';

const Comment = () => {
  const [reviews, setReviews] = useState([]);
  const [clickedIndex, setClickedIndex] = useState('');
  const [isReviewClicked, setIsReviewClicked] = useState(false);
  const [isPostButtonClicked, setIsPostButtonClicked] = useState('');
  const [newReviewValue, setNewReviewValue] = useState('');

  const openReviewContent = index => {
    setClickedIndex(index);
    if (!isReviewClicked) {
      setIsReviewClicked(true);
    } else {
      setIsReviewClicked(false);
    }
  };

  const clickPostButton = () => {
    setIsPostButtonClicked(true);
  };

  useEffect(
    () =>
      fetch('/data/REVIEW.json')
        .then(res => res.json())
        .then(reviewArray => setReviews(reviewArray)),
    []
  );

  return (
    <div className="review">
      <div className="reviewBottom">
        <div className="titleContainer">
          <div className="titleText">
            <h2 className="title">PRODUCT REVIEW</h2>
            <ul>
              <li className="reviewDescription">
                상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른
                글은 사전동의 없이 담당 게시판으로 이동될 수 있습니다.
              </li>
              <li className="reviewDescription">
                배송관련, 주문(취소/교환/환불) 관련 문의 및 요청사항은 마이컬리
                내<b> 1:1 문의</b>에 남겨주세요.
              </li>
            </ul>
          </div>
          <div className="reviewTableContainer">
            <div className="reviewRow">
              <div className="reviewPadding">번호</div>
              <div className="tableTitle">
                제목
                {/* <div>{contant}</div> */}
              </div>
              <div className="reviewPadding">작성자</div>

              <div className="reviewPadding">도움</div>
            </div>
            {reviews.map((review, index) => {
              return (
                <ReviewRow
                  key={index}
                  id={index}
                  reviewData={review}
                  openReviewContent={openReviewContent}
                  clickedIndex={clickedIndex}
                  isReviewClicked={isReviewClicked}
                />
              );
            })}
          </div>
        </div>
      </div>
      <button className="reviewPostButton" onClick={clickPostButton}>
        후기 쓰기
      </button>
      {isPostButtonClicked ? (
        <div>
          <textarea className="reviewPostTextarea"></textarea>
        </div>
      ) : null}
    </div>
  );
};

export default Comment;

const ReviewRow = ({
  reviewData,
  openReviewContent,
  clickedIndex,
  isReviewClicked,
}) => {
  const { id, title, contant, user_id, help_count } = reviewData;
  return (
    <div>
      <div
        className="reviewRow list"
        onClick={() => openReviewContent(id)}
        isReviewClicked={isReviewClicked}
      >
        <div className="reviewPadding">{id}</div>
        <div>
          <button className="reviewTextboxButton">{title}</button>
        </div>
        <div className="reviewPadding">{user_id}</div>
        <div className="reviewPadding">{help_count}</div>
      </div>
      {clickedIndex === id && !isReviewClicked ? (
        <div className="reviewContent">
          <div className="reviewContentWrapper">{contant}</div>
        </div>
      ) : null}
    </div>
  );
};

// const ReviewPostArea = ({ newReviewValue, setNewReviewValue }) => {
//   const setReviewValue=()=> {
//     setNewReviewValue()
//   }
//   return (
//     <div>
//       <textarea
//         className="reviewPostTextarea"
//         onChange={setNewReviewValue}
//       ></textarea>
//     </div>
//   );
// };
