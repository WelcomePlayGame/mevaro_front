    import { StarRating } from "../rating/StarRating";
    import { useState } from "react";
    import {Comment} from '../Comments/Comment'
    import { URL, COMMENTS, SELECT, ADD, USER, PASSWORD } from "../../cong";
import { useParams } from "react-router-dom";



    export const AddComment = (props) => {
      const {id} = useParams();
        const [rating, setRating] = useState(`0`);
        const [name, setName] = useState(``);
        const [phone, setPhone] = useState(``);
        const [comment, setComment] = useState(``);
        const [product_id] = useState(id)

        const credentials = `${USER}:${PASSWORD}`;
        const handleRatingChange = (newRating) => {
          console.log(`Ratng - ${newRating}`)
          setRating(newRating);
        };


        const addCommentProduct = async (e) => {
          e.preventDefault();
         
          const formData = new FormData();
          formData.append("name", name);
          formData.append('phone', phone);
          formData.append('comment', comment);
          formData.append("rating", rating)
          formData.append("product_id", product_id)

  
          const response = await fetch(`${URL}${COMMENTS}${SELECT}${ADD}`, {
              method: 'POST',
              headers: {
                  'Authorization': `Basic ${btoa(credentials)}`
              },
              body: formData,
          })
          console.log(product_id)
          console.log(id)
          if (response.ok) {
              window.location.reload(true);
          } else {
              console.error(`Server responded with ${response.status} ${response.statusText}`);
          }
      }
  


        return (
    <>
    <div className="container">
            <div className="row">
              <div className="addComment">
                <>
                  <StarRating onChange={handleRatingChange} />
                </>
                <form className="addComment_form" onSubmit={addCommentProduct}>
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
                      onClick={()=>(console.log('Написал Комментарий'))}
                    />
                  </div>
                  <button type="submit" className="addCommentBox_btn">Залишити Відгук</button>
                </form>
                <hr className="addComment_hr"/>
                <Comment/>
              </div>
            </div>
          </div>
    </>
        );
      };

