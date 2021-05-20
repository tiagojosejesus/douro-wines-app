import React from "react";
import { Link } from "react-router-dom";

export default function MainMenu() {
  return (
    <div>
      <Link to="/">Douro Wine</Link>
      <Link to="/twitter">Twitter Feed</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/reservations">Reservations</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/about">About Us</Link>
    </div>
  );
}
