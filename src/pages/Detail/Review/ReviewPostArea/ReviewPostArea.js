import React from 'react';
import './ReviewPostArea.scss';

const ReviewPostArea = ({
  changeReviewTextarea,
  isPostButtonClicked,
  submitReview,
}) => {
  return (
    <form className="reviewForm">
      <input
        className="reviewPostTitle"
        onChange={changeReviewTextarea}
        name="title"
        placeholder="제목을 입력해주세요"
      />
      <textarea
        className="reviewPostTextarea"
        onChange={changeReviewTextarea}
        name="content"
        placeholder={`자세한 후기는 다른 고객의 구매에 많은 도움이 되며,
일반식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시 검토 후 비공개 조치될 수 있습니다. 
반품/환불 문의는 1:1문의로 가능합니다.`}
      ></textarea>
      <button
        className="reviewSubmitButton"
        onClick={submitReview}
        type="submit"
      >
        작성 완료
      </button>
    </form>
  );
};

export default ReviewPostArea;
