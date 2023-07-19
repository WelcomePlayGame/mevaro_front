
import { FaStar } from "react-icons/fa";
export const StarComment = (props) => {
    const { rating } = props;
  
    const filledStars = Array.from({ length: rating }).map((_, index) => (
      <FaStar key={index} className="star_rating_comment" />
    ));
  
    return <>{filledStars}</>;
  };
  