import React, { useState } from "react";
import Modal from "./Modal.js";
import "./index.css";

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <button className={"primaryBtn"} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} message='Hello Santa' />}
    </main>
  );
};

export default ModalWindow;
