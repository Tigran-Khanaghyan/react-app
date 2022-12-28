import React from "react";
import Header from "../Header/Header";
import ModalBody from "../ModalBody/ModalBody";
import Footer from "../Footer/Footer";
import "./Modal.css";

const Modal = ({ header, modalBody, footer, setIsOpen }) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal-window">
          {header ? header : <Header setIsOpen={setIsOpen} />}
          {modalBody ? modalBody : <ModalBody />}
          {footer ? footer : <Footer setIsOpen={setIsOpen} />}
        </div>
      </div>
    </>
  );
};

export default Modal;
