import "./Navbar.css";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";

function Navbar() {
    return (
        <section className="Navbar">
            <h1>MEMO<span>RA</span></h1>

            <ul className="Nav_links">
                <li><a href="#">Home</a></li>
                <li><a href="#">Books</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className="Btn_group">
                <button className="CartBtn">
                    Cart <IoCartOutline className="i" />
                </button>

                <button className="whislistBtn">
                    Wishlist <IoHeartOutline className="i" />
                </button>
            </div>
        </section>
    );
}

export default Navbar;


 