import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, variant, to = "#" }) => {
  return (
    <Link
      to={to}
      className={
        variant === "filled"
          ? "inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
          : "inline-block border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-600 hover:text-white transition"
      }
    >
      {text}
    </Link>
  );
};

export default Button;