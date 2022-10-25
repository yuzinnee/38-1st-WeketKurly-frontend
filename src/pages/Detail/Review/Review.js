import React, { useEffect, useState } from 'react';
import './Review.scss';
import ReviewRow from './ReviewRow/ReviewRow';
import ReviewPostArea from './ReviewPostArea/ReviewPostArea';
import { useParams } from 'react-router-dom';

const Review = ({ product_data }) => {
  // 부모로부터 데이터가 어떻게 오고 있지요??>>>>>?????
  const token = localStorage.getItem('token');
  const { product_id } = useParams;

  const [reviews, setReviews] = useState([]);

  const [clickedIndex, setClickedIndex] = useState('');
  const [isReviewClicked, setIsReviewClicked] = useState(false);

  const FIN_POSTING = '작성 완료';
  const START_POSTING = '후기 쓰기';
  const [isPostButtonClicked, setIsPostButtonClicked] = useState(START_POSTING);

  const [newReviewValue, setNewReviewValue] = useState({
    title: '',
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

  const clickPostButton = () => {
    // if (!token) {
    //   alert('상품 후기는 로그인 전용 메뉴입니다.');
    //   return;
    // }
    setIsPostButtonClicked(FIN_POSTING);
  };

  const changeReviewTextarea = e => {
    if (!e.nativeEvent.isComposing)
      setNewReviewValue({ ...newReviewValue, [e.target.name]: e.target.value });
  };

  const fetchReviews = () =>
    fetch('/data/REVIEW.json')
      .then(res => res.json())
      .then(reviewArray => setReviews(reviewArray));

  const submitReview = event => {
    event.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        token: token,
      },
      body: JSON.stringify({
        value: newReviewValue,
        product_id: product_id,
        help_count: 0,
      }),
    }).then(res => res.json());
    fetchReviews();
    setIsPostButtonClicked(START_POSTING);
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
              {REVIEW_KEY.map((titles, index) => (
                <div key={index} className={titles.className}>
                  {titles.title}
                </div>
              ))}
            </div>
            {reviews.map((review, index) => (
              <ReviewRow
                key={index}
                id={index}
                reviewData={review}
                openReviewContent={openReviewContent}
                clickedIndex={clickedIndex}
                isReviewClicked={isReviewClicked}
                fetchReviews={fetchReviews}
                token={token}
              />
            ))}
          </div>
        </div>
      </div>
      {isPostButtonClicked === START_POSTING && (
        <button
          className="reviewPostButton"
          onClick={clickPostButton}
          type="button"
        >
          {isPostButtonClicked}
        </button>
      )}
      {isPostButtonClicked === FIN_POSTING && (
        <ReviewPostArea
          changeReviewTextarea={changeReviewTextarea}
          isPostButtonClicked={isPostButtonClicked}
          submitReview={submitReview}
          token={token}
        />
      )}
    </div>
  );
};

export default Review;

const REVIEW_KEY = [
  { title: '번호', className: 'reviewPadding' },
  { title: '제목', className: 'tableTitle' },
  { title: '작성자', className: 'reviewPadding' },
  { title: '도움', className: 'reviewPadding' },
];
