import React from "react";

const Testimonial = ({ text, author }) => {
  return (
    <div className="bg-pink-200  p-4 rounded-lg shadow-md">
      <p className="text-lg mb-2">{text}</p>
      <p className="text-sm font-semibold text-button">{author}</p>
    </div>
  );
};

export default Testimonial;
