 import "./about.css";

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-left">
          <span className="about-tag">About Memora</span>

          <h2>
            We Turn Your Beautiful Moments
            Into Premium Lasting Memories
          </h2>

          <p>
            At Memora, we believe every memory deserves more than just a
            place in your phone gallery. We transform your precious moments
            into beautifully crafted premium photobooks that you can hold,
            feel, and cherish forever.
          </p>

          <p>
            From weddings and birthdays to anniversaries, travel stories,
            and baby memories — every album is designed with elegance,
            emotion, and exceptional print quality.
          </p>

          <div className="about-features">
            <div className="feature-box">
              <h3>10K+</h3>
              <p>Happy Customers</p>
            </div>

            <div className="feature-box">
              <h3>5000+</h3>
              <p>Premium Albums Delivered</p>
            </div>

            <div className="feature-box">
              <h3>100%</h3>
              <p>Customer Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-image-card main-img">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552"
              alt="Photobook Memory"
            />
          </div>

          <div className="about-image-card small-img">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486"
              alt="Premium Album"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutSection;