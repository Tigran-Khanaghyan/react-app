import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Button from "../../shared/Button";
import { HELLO_SANTA, OPEN_MODAL } from "../../constants.js";
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
      <Modal open={isOpen} setIsOpen={setIsOpen}>
        {" "}
        {HELLO_SANTA}
      </Modal>
    </main>
  );
};

export default ModalWindow;
