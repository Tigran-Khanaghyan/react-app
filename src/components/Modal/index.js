import React, { useState } from "react";
import Modal from "./Modal.js";
import Button from "../../shared/Button";
import { OPEN_MODAL, SANTAS_MODAL } from "../../constants.js";
import "./index.css";

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Button
        className={"primaryBtn"}
        onClick={() => setIsOpen(true)}
        name={OPEN_MODAL}
      />
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          message="Hello Santa"
          title={SANTAS_MODAL}
        />
      )}
    </main>
  );
};

export default ModalWindow;
