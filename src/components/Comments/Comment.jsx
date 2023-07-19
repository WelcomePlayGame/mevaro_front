import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {getListCommentByProduct} from '../../api'

export const Comment = (props) => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
  
    useEffect(() => {
      getListCommentByProduct(id).then((data) => {
        setComments(data);
        console.log(comments)
      });
    }, []);
  
    return (
      <section>
        {
          comments.map((props)=> (
            <div className="reviews_box">
              <div className="reviews_box_top">
                <div className="reviews_box_name">{props.name}</div>
                <div className="reviews_box_rating">{props.rating}</div>
              </div>
              <div className="reviews_box_des">
                <b>{props.comment}</b>
              </div>
            </div>

          ))
        }
      </section>
    );
  };
  

