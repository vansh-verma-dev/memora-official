import HTMLFlipBook from "react-pageflip";
import { BiPhotoAlbum } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { GiStarsStack } from "react-icons/gi";
import "./book.css";

const images = [
  "https://i.pinimg.com/736x/c0/84/c0/c084c067fabc72d9db21713800c8dd3b.jpg",
  "https://i.pinimg.com/1200x/8c/c8/8a/8cc88aafcebb504632ba2d142ea9378d.jpg",
  "https://i.pinimg.com/1200x/92/e7/b2/92e7b23edc39483ad63696472519547c.jpg",
  "https://i.pinimg.com/736x/d5/31/ca/d531ca1bf7116718fe609031510a0c72.jpg",
  "https://i.pinimg.com/736x/87/1b/d1/871bd1f1976b1f2e20ffd4de66faa7c4.jpg",
  "https://i.pinimg.com/736x/80/93/06/809306b48a4efdced1a88266b2e9c7ec.jpg",
  "https://i.pinimg.com/736x/d7/6d/f2/d76df2ceac6e937e8606053f4bb97bbc.jpg"
];

function BookShowcase() {
  return (
    <section className="book-section">

      {/* BOOK */}
      <div className="book-left">

        <HTMLFlipBook
          width={420}
          height={520}
          size="stretch"
          minWidth={300}
          maxWidth={600}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.5}
          showCover={true}
          mobileScrollSupport={true}
          usePortrait={false}
          drawShadow={true}
          className="flip-book"
        >

          {/*  COVER PAGE (IMPORTANT FIX) */}
          <div className="page cover">
            <h2>My Photo Album</h2>
            <p>Memories Collection</p>
          </div>

          {/* PAGES */}
          {images.map((img, i) => (
            <div className="page" key={i}>
              <img src={img} alt={`page-${i}`} />
            </div>
          ))}

        </HTMLFlipBook>

      </div>

      {/* RIGHT SIDE */}
      <div className="book-right">

        <h1>Discover the Memora Advantage</h1>

        <div className="feature">
          <span className="icon">
              <BiPhotoAlbum />
          </span>
          <div>
          
            <h3>Emotional Keepsakes</h3>
            <p>Transform your cherished memories into lasting photobooks.</p>
          </div>
        </div>

        <div className="feature">
          <span className="icon">
<BsBookHalf />
          </span>
          <div>
            <h3>Meticulous Craftsmanship</h3>
            <p>Designed like a premium real-world album experience.</p>
          </div>
        </div>

        <div className="feature">
          <span className="icon">

            <GiStarsStack />
          </span>
          <div>
            <h3>Trusted Quality</h3>
            <p>Over 10,000+ happy customers worldwide.</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default BookShowcase;