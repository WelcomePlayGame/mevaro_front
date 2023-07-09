import { StarRating } from "../rating/StarRating";
import { useState } from "react";
export const AddComment = (props) => {
  const [rating, setRating] = useState(`0`);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="addComment">
          <>
            <StarRating rating={rating} onChange={handleRatingChange} />
          </>
          <form className="addComment_form">
            <div className="addCommentBox">
              <input
                type="text"
                name="name"
                placeholder="Як Вас звати?"
                className="addCommentBox_input"
              />
              <input
                type="text"
                name="phone"
                placeholder="Ваш мобильний номер?"
                className="addCommentBox_input"
              />
              <textarea
                type="text"
                name="comment"
                placeholder="Що написати?"
                className="addCommentBox_input centeredPlaceholder"
              />
            </div>
            <button className="addCommentBox_btn">Залишити Відгук</button>
          </form>
          <hr className="addComment_hr" />
        </div>
      </div>
    </div>
  );
};
