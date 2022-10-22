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
      />
      <textarea
        className="reviewPostTextarea"
        onChange={changeReviewTextarea}
        name="content"
      ></textarea>
      <button
        className="reviewSubmitButton"
        onClick={submitReview}
        type="submit"
      >
        {isPostButtonClicked}
      </button>
    </form>
  );
};

export default ReviewPostArea;
