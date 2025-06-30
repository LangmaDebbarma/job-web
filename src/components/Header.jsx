<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        backgroundColor: "#007BFF", // Blue
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-around",
        color: "white",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/about">About Us</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact Us</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/candidate-list">List Candidate</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/faqs">FAQs</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/register">Register</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/terms">Terms</Link>
    </nav>
  );
};

=======
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav
      style={{
        backgroundColor: "#007BFF", // Blue
        padding: "10px 20px",
        display: "flex",
        justifyContent: "space-around",
        color: "white",
      }}
    >
      <Link style={{ color: "white", textDecoration: "none" }} to="/">Home</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/about">About Us</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/contact">Contact Us</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/candidate-list">List Candidate</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/faqs">FAQs</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/login">Login</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/register">Register</Link>
      <Link style={{ color: "white", textDecoration: "none" }} to="/terms">Terms</Link>
    </nav>
  );
};

>>>>>>> 0f86b92ae9347c45592366f4625eaa1681b18747
export default Header;