import React from "react";

const Button = ({ onClick, className, children, name }) => {
  return (
    <button onClick={onClick} className={className}>
      {name ? name : children}
    </button>
  );
};

export default Button;
