import React, { useEffect, useState } from 'react';
import API from './../../../config';
import ReviewPostArea from './ReviewPostArea/ReviewPostArea';
import ReviewRow from './ReviewRow/ReviewRow';
import './Review.scss';

const Review = ({ product_id }) => {
  const [reviews, setReviews] = useState([]);
  const token = localStorage.getItem('token');

  const [clickedIndex, setClickedIndex] = useState('');
  const [isReviewClicked, setIsReviewClicked] = useState(false);

  const [isPostButtonClicked, setIsPostButtonClicked] = useState(false);

  const [newReviewValue, setNewReviewValue] = useState({
    title: '제목을 입력하세요',
    content: '',
  });

  const openReviewContent = index => {
    setClickedIndex(index);
    if (!isReviewClicked) {
      setIsReviewClicked(true);
    } else {
      setIsReviewClicked(false);
    }
  };

  const changeReviewTextarea = e => {
    const { name, value } = e.target;
    setNewReviewValue({ ...newReviewValue, [name]: value });
  };

  const fetchReviews = () =>
    fetch(`${API.submitReview}`)
      .then(res => res.json())
      .then(reviewArray => setReviews(reviewArray.data[0].review.reverse()));

  const submitReview = event => {
    event.preventDefault();
    fetch(`${API.submitReview}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        title: newReviewValue.title,
        contents: newReviewValue.content,
        productId: product_id,
      }),
    }).then(res => res.json());
    fetchReviews();
    setIsPostButtonClicked(false);
  };

  useEffect(() => fetchReviews(), []);

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
              {REVIEW_KEY.map(titles => (
                <div key={titles.id} className={titles.className}>
                  {titles.title}
                </div>
              ))}
            </div>
            {reviews &&
              reviews.map((review, index) => (
                <ReviewRow
                  key={index}
                  id={index}
                  reviewData={review}
                  openReviewContent={openReviewContent}
                  clickedIndex={clickedIndex}
                  isReviewClicked={isReviewClicked}
                />
              ))}
          </div>
        </div>
      </div>
      {isPostButtonClicked ? (
        <ReviewPostArea
          changeReviewTextarea={changeReviewTextarea}
          isPostButtonClicked={isPostButtonClicked}
          submitReview={submitReview}
        />
      ) : (
        <button
          className="reviewPostButton"
          onClick={() => setIsPostButtonClicked(true)}
          type="button"
        >
          후기 쓰기
        </button>
      )}
    </div>
  );
};

export default Review;

const REVIEW_KEY = [
  { id: 1, title: '번호', className: 'reviewPadding' },
  { id: 2, title: '제목', className: 'tableTitle' },
  { id: 3, title: '작성자', className: 'reviewPadding' },
  { id: 4, title: '도움', className: 'reviewPadding' },
];
