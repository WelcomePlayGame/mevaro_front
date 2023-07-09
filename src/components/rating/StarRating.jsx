import { useState } from "react";
import { FaStar } from "react-icons/fa";

export const StarRating = ({onChange}) => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (newRating) => {
    setSelectedRating(newRating);
    onChange(newRating);
  };

  return (
    <>
      <FaStar
        className={`star_rating ${selectedRating >= 1 ? "selected" : ""}`}
        onClick={() => handleRatingClick(1)}
      />
      <FaStar
        className={`star_rating ${selectedRating >= 2 ? "selected" : ""}`}
        onClick={() => handleRatingClick(2)}
      />
      <FaStar
        className={`star_rating ${selectedRating >= 3 ? "selected" : ""}`}
        onClick={() => handleRatingClick(3)}
      />
      <FaStar
        className={`star_rating ${selectedRating >= 4 ? "selected" : ""}`}
        onClick={() => handleRatingClick(4)}
      />
      <FaStar
        className={`star_rating ${selectedRating >= 5 ? "selected" : ""}`}
        onClick={() => handleRatingClick(5)}
      />
    </>
  );
};
