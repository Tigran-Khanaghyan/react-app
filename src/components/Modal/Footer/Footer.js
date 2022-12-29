import React from "react";
import { CANCEL_BUTTON, CONFIRM } from "../../../constants";
import Button from "../../../shared/Button";
import "./Footer.css";

const Footer = ({
  setIsOpen,
  firstFooterButtonName = CONFIRM,
  secondFooterButtonName = CANCEL_BUTTON,
  showFirstFooterButton,
  showSecondFooterButton,
  firstCallback,
  secondCallback,
}) => {
  const handleFirstCallback = () => {
    if (firstCallback) firstCallback();
    setIsOpen(false);
  };

  const handleSecondCallback = () => {
    if (secondCallback) secondCallback();
    setIsOpen(false);
  };

  return (
    <div className={"modalActions"}>
      <div className={"actionsContainer"}>
        {showFirstFooterButton && (
          <Button
            className={"deleteBtn"}
            onClick={handleFirstCallback}
            name={firstFooterButtonName}
          />
        )}
        {showSecondFooterButton && (
          <Button
            className={"deleteBtn"}
            onClick={handleSecondCallback}
            name={secondFooterButtonName}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
