import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Button from "../../shared/Button";
import { OPEN_MODAL } from "../../constants.js";
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
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </main>
  );
};

export default ModalWindow;
