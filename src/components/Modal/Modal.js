import React from "react";
import Delete from "../../asserts/Icons/Delete";
import Button from "../../shared/Button";
import { CANCEL_BUTTON, DELETE_BUTTON } from "../../constants";
import "./Modal.css";

const Modal = ({ setIsOpen, message, title }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal-window">
          <div className={"modalHeader"}>
            <h5 className={"heading"}>{title}</h5>
          </div>
          <Button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <Delete height={25} width={25} />
          </Button>
          <div className={"modalContent"}>{message}</div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <Button
                className={"deleteBtn"}
                onClick={() => setIsOpen(false)}
                name={DELETE_BUTTON}
              />
              <Button
                className={"cancelBtn"}
                onClick={() => setIsOpen(false)}
                name={CANCEL_BUTTON}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
