import React from "react";
import Header from "../Header/Header";
import ModalBody from "../ModalBody/ModalBody";
import Footer from "../Footer/Footer";
import "./Modal.css";

const Modal = ({ header = true, footer = true, setIsOpen, open, children }) => {
  return (
    <>
      {open && (
        <>
          <div className="darkBG" onClick={() => setIsOpen(false)} />
          <div className="centered">
            <div className="modal-window">
              {header && <Header setIsOpen={setIsOpen} />}
              <ModalBody>{children}</ModalBody>
              {footer && <Footer setIsOpen={setIsOpen} />}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
