import React from "react";
import Button from "../../../shared/Button";
import { CANCEL_BUTTON } from "../../../constants";
import "./Footer.css";

const Footer = ({ footerComponent, setIsOpen }) => {
  return (
    <div className={"modalActions"}>
      <div className={"actionsContainer"}>
        {footerComponent ? (
          footerComponent
        ) : (
          <Button
            className={"deleteBtn"}
            onClick={() => setIsOpen(false)}
            name={CANCEL_BUTTON}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
