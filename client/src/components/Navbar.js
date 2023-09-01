import { Link } from "react-router-dom";
import "../assets/styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">home</Link>
      <Link to="/info">what is craniosacral?</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">pricing & contact</Link>
      <Link to="/testimonials">testimonials</Link>
    </div>
  );
};

export default Navbar;
