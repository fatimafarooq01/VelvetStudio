import React from "react";

const Button = ({ text, variant }) => {
  return (
    <button
      className={
        variant === "filled"
          ? "bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
          : "border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg hover:bg-yellow-600 hover:text-white transition"
      }
    >
      {text}
    </button>
  );
};

export default Button;