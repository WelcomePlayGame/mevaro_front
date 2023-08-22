import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import {getListCommentByProduct} from '../../api'
import { StarComment } from "../rating/StarComment";
import { FaComment } from "react-icons/fa";
export const Comment = (props) => {
    const [comments, setComments] = useState([]);
    const { id } = useParams();
    const [token, setAuthToken] = useState(localStorage.getItem("authToken"))

    useEffect(() => {
      getListCommentByProduct(id, token).then((data) => {
        setComments(data);
        console.log(comments)
      });
    }, [token]);
  
    return (
      <section>
        {
          comments.map((props)=> (
            <div className="reviews_box" key={props.id}>
              <div className="reviews_box_top">
                <div className="reviews_box_name"><span><FaComment/></span> {props.name}</div>
                <div>
                  {<StarComment rating={props.rating}/>}
                </div>
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
  

