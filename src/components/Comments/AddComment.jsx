import { StarRating } from "../rating/StarRating";
import { useState } from "react";
import { URL, COMMENTS, SELECT, ADD, USER, PASSWORD } from "../../cong";

export const AddComment = (props) => {
  const AddCommentofPost = (id) => {
    const [rating, setRating] = useState(`0`);
    const [name, setName] = useState(``);
    const [phone, setPhone] = useState(``);
    const [comment, setComment] = useState(``);
    const [product_id] = useState(id);

    const credentials = `${USER}:${PASSWORD}`;
    const handleRatingChange = (newRating) => {
      setRating(newRating);
    };

  const addComment = async (e) => {
    e.preventdefault();
    const formData = new FormData();
    formData.append(`name`, name);
    formData.append(`phone`, phone);
    formData.append(`comment`, comment);
    formData.append(`rating`, rating);
    formData.append(`product_id`,product_id);

      try {
        const response = await fetch(`${URL}${COMMENTS}${SELECT}${ADD}`, {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(credentials)}`,
          },
          body: formData,
        });
        if (!response.ok) {
          return new Error(
            `Response not ok - ${URL}${COMMENTS}${SELECT}${ADD}`
          );
        }
      } catch (e) {
        console.error(e);
      }
    };
    return (
      <div className="container">
        <div className="row">
          <div className="addComment">
            <>
              <StarRating onChange={handleRatingChange} />
            </>
            <form className="addComment_form" onSubmit={AddCommentofPost}>
              <div className="addCommentBox">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Як Вас звати?"
                  className="addCommentBox_input"
                />
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Ваш мобильний номер?"
                  className="addCommentBox_input"
                />
                <textarea
                  type="text"
                  name="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
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
};
