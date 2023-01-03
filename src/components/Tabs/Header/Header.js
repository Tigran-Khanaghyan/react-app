import React from "react";
import Button from "../../../shared/Button";

const Header = ({ name, onClick, buttonClassName }) => {
  return (
    <>
      <Button name={name} onClick={onClick} className={buttonClassName} />
    </>
  );
};

export default Header;
