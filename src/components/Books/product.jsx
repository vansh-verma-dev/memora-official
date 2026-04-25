import { useState } from "react";
import "./Product.css";
import { FaRegHeart } from "react-icons/fa";

const templates = [
  {
    id: 1,
    title: "Classic Memory Book",
    sub: "Simple elegant photo album",
    rating: 4.8,
    reviews: 120,
    img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
  },
  {
    id: 2,
    title: "Wedding Premium Album",
    sub: "Luxury wedding style book",
    rating: 4.9,
    reviews: 340,
    img: "https://images.unsplash.com/photo-1529634897454-5c4b3c2c1c2a"
  },
  {
    id: 3,
    title: "Travel Memories",
    sub: "Adventure photo collection",
    rating: 4.7,
    reviews: 210,
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
  }
];

function AlbumSelector() {
  const [wishlist, setWishlist] = useState([]);
  const [msg, setMsg] = useState("");

  const toggleWishlist = (id) => {
    const exists = wishlist.includes(id);

    if (exists) {
      setWishlist(wishlist.filter((x) => x !== id));
      setMsg("Removed from wishlist");
    } else {
      setWishlist([...wishlist, id]);
      setMsg("Added to wishlist ");
    }

    setTimeout(() => setMsg(""), 2000);
  };

  return (
    <section className="album-section">

      {/* MESSAGE */}
      {msg && <div className="toast">{msg}</div>}

      <h1>Choose Your Memory Album</h1>
      <p>Select your perfect template</p>

      <div className="album-grid">

        {templates.map((t) => (
          <div className="album-card" key={t.id}>

            {/* IMAGE */}
            <div className="img-box">
              <img src={t.img} alt={t.title} />
            </div>

            {/* CONTENT */}
            <div className="card-body">

              <h3>{t.title}</h3>
              <p>{t.sub}</p>

              {/* ⭐ RATING + REVIEWS SAME LINE */}
              <div className="rating-row">
                <span className="rating">⭐ {t.rating}</span>
                <span className="reviews">({t.reviews} reviews)</span>
              </div>

              {/* BUTTONS */}
              <div className="btn-row">

                <button className="checkout-btn">
                  Checkout
                </button>

                <button
                  className={`wish-btn ${wishlist.includes(t.id) ? "active" : ""}`}
                  onClick={() => toggleWishlist(t.id)}
                >
                <FaRegHeart />

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AlbumSelector;