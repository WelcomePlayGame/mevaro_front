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
        <div >
          <div>
            {Array.isArray(comments) &&
              comments.map((props) => (
                <div key={props.id}>
                  <h4>{props.name}</h4>
                  <span>{props.rating}</span>
                  <h5>{props.comment}</h5>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  };
  

