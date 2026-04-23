import "./review.css";
import { FaStar, FaQuoteRight } from "react-icons/fa";
 

function ReviewSection() {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Wedding Album Customer",
      review:
        "Memora turned our wedding memories into something truly magical. The print quality, premium pages, and elegant finishing made the album feel luxurious and unforgettable.",
    },
    {
      name: "Rohit Verma",
      role: "Birthday Memory Book",
      review:
        "I gifted a birthday memory book to my sister and she absolutely loved it. The quality was premium, delivery was fast, and the design looked very professional.",
    },
    {
      name: "Anjali Singh",
      role: "Couple Memory Book",
      review:
        "The customization experience was smooth and the final photobook looked beautiful. It felt personal, emotional, and worth every rupee spent.",
    },
  ];

  return (
    <section className="review-section" id="reviews">
      <div className="review-header">
        <h2>Loved by Our Happy Customers</h2>
        <p>
          Real memories. Real emotions. Real premium experiences from people
          who trusted Memora.
        </p>
      </div>

      <div className="review-container">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            <div className="quote-icon">
              <FaQuoteRight />
            </div>

            <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review-text">{item.review}</p>

            <div className="review-user">
              <div className="user-avatar">
                {item.name.charAt(0)}
              </div>

              <div className="user-info">
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewSection;