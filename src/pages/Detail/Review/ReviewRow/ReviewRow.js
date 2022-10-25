import { useState } from 'react';
import './ReviewRow.scss';

const ReviewRow = ({
  token,
  reviewData,
  openReviewContent,
  clickedIndex,
  isReviewClicked,
  fetchReviews,
}) => {
  const { id, title, contant, user_id, help_count, product_id } = reviewData;
  const [buttonClicked, setButtonClicked] = useState(0);

  const anonymizeUserId = user_id => {
    return user_id.replace(user_id[1], '*');
  };

  const clickHelpful = e => {
    fetch('', {
      // 도움 전송용 api
      method: 'POST',
      headers: {
        token: token,
      },
      body: JSON.stringify({
        value: help_count + buttonClicked,
        product_id: product_id,
      }),
    }).then(res => res.json());
    fetchReviews();
    const helpfulButton = e.target;
    helpfulButton.classList.toggle('helped');
    buttonClicked ? setButtonClicked(0) : setButtonClicked(1);
  };

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
        <div className="reviewPadding">{anonymizeUserId(user_id)}</div>
        <div className="reviewPadding">{help_count + buttonClicked}</div>
      </div>
      {clickedIndex === id && !isReviewClicked ? (
        <div className="reviewContent">
          <div className="reviewContentWrapper">
            <p className="reviewContent">{contant}</p>
            <button className="helpfulButton" onClick={clickHelpful}>
              도움이 돼요({help_count + buttonClicked})
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewRow;
