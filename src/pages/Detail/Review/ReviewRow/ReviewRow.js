import './ReviewRow.scss';

const ReviewRow = ({
  reviewData,
  openReviewContent,
  clickedIndex,
  isReviewClicked,
}) => {
  const { reviewId, reviewTitle, reviewContent, userName, reviewHelpCount } =
    reviewData;

  const anonymizeUserId = userName => {
    return userName.replace(userName[1], '*');
  };

  return (
    <div>
      <div
        className="reviewRow list"
        onClick={() => openReviewContent(reviewId)}
      >
        <div className="reviewPadding">{reviewId}</div>
        <div>
          <button className="reviewTextboxButton">{reviewTitle}</button>
        </div>
        <div className="reviewPadding">{anonymizeUserId(userName)}</div>
        <div className="reviewPadding">{reviewHelpCount}</div>
      </div>
      {clickedIndex === reviewId && !isReviewClicked ? (
        <div className="reviewContent">
          <div className="reviewContentWrapper">{reviewContent}</div>
        </div>
      ) : null}
    </div>
  );
};

export default ReviewRow;
