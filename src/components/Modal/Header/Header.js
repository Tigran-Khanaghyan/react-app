import React from "react";
import Delete from "../../../asserts/Icons/Delete";
import Button from "../../../shared/Button";
import { MODAL_TITLE } from "../../../constants";
import "./Header.css";

const Header = ({ headerComponent, title, setIsOpen }) => {
  return (
    <div className={"modalHeader"}>
      {headerComponent ? (
        headerComponent
      ) : (
        <>
          <Button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <Delete height={25} width={25} />
          </Button>
          <h5 className={"heading"}>{title ? title : MODAL_TITLE}</h5>
        </>
      )}
    </div>
  );
};

export default Header;