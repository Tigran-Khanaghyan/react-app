import React from "react";
import { MODAL_DEMO_MESSAGE } from "../../../constants";
import "./ModalBody.css";

const ModalBody = ({ contentComponent, message }) => {
  return (
    <div className={"modalContent"}>
      {contentComponent ? (
        contentComponent
      ) : (
        <p>{message ? message : MODAL_DEMO_MESSAGE}</p>
      )}
    </div>
  );
};

export default ModalBody;
