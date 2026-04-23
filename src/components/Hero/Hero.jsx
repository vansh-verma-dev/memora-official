
import { MdOutlineSecurity } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import { FaAward } from "react-icons/fa6";
import { RiCameraAiFill } from "react-icons/ri";
import "./Hero.css";
import { GiWantedReward } from "react-icons/gi";

function Hero() {
    return (
        <section className="Hero">
            <div className="Hero_left">
                <p className="Hero_tag">Preserve Your Precious Memories</p>
                <h1>
                    Turn Your Photos Into
                    <span> Beautiful Memory Books</span>
                </h1>

                <p className="Hero_desc">
                    Create premium-quality personalized photo albums for weddings,
                    birthdays, travel memories, love stories, and your most special
                    life moments. Crafted beautifully, delivered with love.
                </p>

                <div className="Hero_btns">
                    <button className="ShopBtn">Explore Books</button>
                    <button className="LearnBtn">How It Works</button>
                </div>
            </div>

            <div className="Hero_right">
                <img
                    src="https://i.pinimg.com/736x/12/1e/71/121e7136cbbee1d7a3ed30dcefa86212.jpg"
                    alt="Memory Book"
                />
            </div>
        </section>
    );
}

export default Hero;
 

export const TrustSection = () => {
  return (
    <section className="trust-wrapper">
      <div className="trust-bar">

        <div className="trust-item">
          <MdOutlineSecurity className="i" />
          <p>100% Secure Payment</p>
        </div>

        <div className="trust-item">
          <FaTruck className="i" />
          <p>Express Delivery</p>
        </div>

        <div className="trust-item">
          <FaAward className="i" />
          <p>Premium Quality Paper</p>
        </div>

        <div className="trust-item">
          <RiCameraAiFill className="i" />
          <p>Professional Editing</p>
        </div>

      </div>

      <div className="trust-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};