import { useState } from "react";
import Modal from "./Modal/Modal";
import Button from "../../shared/Button";
import "./index.css";
import { HELLO_SANTA, OPEN_MODAL } from "../../constants";

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showInnerModal, setShowInnerModal] = useState(false);
  return (
    <main>
      <Button
        className={"primaryBtn"}
        onClick={() => setIsOpen(true)}
        name={OPEN_MODAL}
      />
      <Modal
        open={isOpen}
        setIsOpen={setIsOpen}
        showFirstFooterButton={true}
        showSecondFooterButton={true}
        secondFooterButtonName="Open Modal"
        firstCallback={() => setIsOpen(false)}
        secondCallback={() => setShowInnerModal(true)}
      ></Modal>
      <Modal
        open={showInnerModal}
        setIsOpen={setShowInnerModal}
        showSecondFooterButton={true}
        secondCallback={() => {
          setShowInnerModal(false);
        }}
        firstCallback={() => {
          setIsOpen(false);
          setShowInnerModal(false);
        }}
        isDialog={true}
        showClose={true}
        className="innerModal-window"
      >
        {" "}
        {HELLO_SANTA}
      </Modal>
    </main>
  );
};

export default ModalWindow;
