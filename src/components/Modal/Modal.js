import React from "react";
import Delete from "../../asserts/Icons/Delete";
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
          <button className={"closeBtn"} onClick={() => setIsOpen(false)}>
            <Delete height={25} width={25} />
          </button>
          <div className={"modalContent"}>
            {message}
          </div>
          <div className={"modalActions"}>
            <div className={"actionsContainer"}>
              <button className={"deleteBtn"} onClick={() => setIsOpen(false)}>
                Delete
              </button>
              <button className={"cancelBtn"} onClick={() => setIsOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
