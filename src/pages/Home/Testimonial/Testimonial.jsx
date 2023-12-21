import { useEffect, useState } from "react";
import ReviewCard from "../../../components/Cards/ReviewCard/ReviewCard";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="abc-container">
      <h1 className="abc-section-title">customer feedback</h1>

      <div className="flex justify-center items-center">
        <Marquee>
          {reviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonial;
