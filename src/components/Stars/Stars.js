import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ( rating ) => {
  const maxRating = 10;
  const filledStars = Math.round((rating / maxRating) * 5);
  const hasHalfStar = filledStars % 1 !== 0;
  const emptyStars = 3 - filledStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<FaStar key={`star-${i}`} className="text-yellow-300" />);
  }

  if (hasHalfStar) {
    stars.push(<FaStarHalfAlt key="half-star" className="text-yellow-300" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-star-${i}`} className="text-gray-300" />);
  }

  return stars;
};

export default Stars;
