import reviewImg from "../../../assets/images/home/testimonials/review.avif";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ReviewCard = ({ review }) => {
  const { name, details, rating } = review;
  return (
    <div className="review-card">
      <div>
        <img src={reviewImg} alt="profile icon" />
      </div>
      <div>
        <Rating style={{ maxWidth: 180, margin: 20 }} value={rating} readOnly />
        <h3 className="reviewer-name">{name}</h3>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
