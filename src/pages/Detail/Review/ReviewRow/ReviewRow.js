import './ReviewRow.scss';

const ReviewRow = ({
  reviewData,
  openReviewContent,
  clickedIndex,
  isReviewClicked,
}) => {
  const { id, title, contant, user_id, help_count } = reviewData;

  const anonymizeUserId = user_id => {
    return user_id.replace(user_id[1], '*');
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

export default ReviewRow;
