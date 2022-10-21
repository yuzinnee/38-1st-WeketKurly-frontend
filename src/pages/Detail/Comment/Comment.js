import React, { useState } from 'react';
import './Comment.scss';

const Comment = () => {
  const [reviewClicked, setReviewClicked] = useState('');
  const [isReviewClicked, setIsReviewClicked] = useState(false);

  const reviewContentOpen = index => {
    setReviewClicked(index);
    if (!isReviewClicked) {
      setIsReviewClicked(true);
    } else {
      setIsReviewClicked(false);
    }
  };
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
            {REVIEW_MOCK_DATA.map((review, index) => {
              return (
                <ReviewRow
                  key={index}
                  id={index}
                  reviewData={review}
                  reviewContentOpen={reviewContentOpen}
                  reviewClicked={reviewClicked}
                  isReviewClicked={isReviewClicked}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

const ReviewRow = ({
  reviewData,
  reviewContentOpen,
  reviewClicked,
  isReviewClicked,
}) => {
  const { id, title, contant, user_id, help_count } = reviewData;
  return (
    <div
      className="reviewRow list"
      onClick={() => reviewContentOpen(id)}
      isReviewClicked={isReviewClicked}
    >
      <div className="reviewPadding">{id}</div>
      <button className="reviewButton">
        {' '}
        <div>
          {title}{' '}
          {reviewClicked === id && !isReviewClicked ? (
            <div className="reviewContent">
              <div className="reviewContentWrapper">{contant}</div>
            </div>
          ) : null}
        </div>
      </button>
      <div className="reviewPadding">{user_id}</div>
      <div className="reviewPadding">{help_count}</div>
    </div>
  );
};

const REVIEW_MOCK_DATA = [
  {
    id: 1,
    title: '너무 맛있네용',
    contant: '어쩌구저쩌구 맛있습니다',
    user_id: '김재욱',
    product_id: 5688,
    help_count: 1,
  },
  {
    id: 2,
    title: '쭈꾸미 탱글탱글 신선해요',
    contant: '먹어본 쭈꾸미 중 최고',
    user_id: '홍광호',
    product_id: 5688,
    help_count: 1,
  },
  {
    id: 3,
    title: '문어같은데요~?',
    contant:
      '모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. 이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.',
    user_id: '윤수롱',
    product_id: 5688,
    help_count: 1,
  },
  {
    id: 4,
    title: '너무 맛있네용',
    contant:
      '모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 대통령으로 선거될 수 있는 자는 국회의원의 피선거권이 있고 선거일 현재 40세에 달하여야 한다.',
    user_id: '민경아',
    product_id: 5688,
    help_count: 5,
  },
  {
    id: 5,
    title: '신선하지요',
    contant: '세상에 김, 마요네즈 그리고 쭈꾸미 다리 쫀득쫀득 맛있습니다',
    user_id: '박강현',
    product_id: 5688,
    help_count: 7,
  },
  {
    id: 6,
    title: '제육 쭈꾸미 해먹었어요',
    contant:
      '이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다.',
    user_id: '유리아',
    product_id: 5688,
    help_count: 56,
  },
  {
    id: 7,
    title: '라면에 투척',
    contant:
      '대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 원장은 국회의 동의를 얻어 대통령이 임명하고, 그 임기는 4년으로 하며, 1차에 한하여 중임할 수 있다.',
    user_id: '박은태',
    product_id: 5688,
    help_count: 0,
  },
];
