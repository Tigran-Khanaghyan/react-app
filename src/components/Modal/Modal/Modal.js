import React from "react";
import Header from "../Header/Header";
import ModalBody from "../ModalBody/ModalBody";
import Footer from "../Footer/Footer";
import "./Modal.css";

const Modal = ({
  showHeader = true,
  showFooter = true,
  setIsOpen,
  open,
  showClose,
  children,
  isDialog = true,
  firstFooterButtonName,
  secondFooterButtonName,
  showFirstFooterButton = true,
  showSecondFooterButton,
  firstCallback,
  secondCallback,
}) => {
  return (
    <>
      {open && (
        <>
          {isDialog && <div className="dialogBg" />}
          {!isDialog && (
            <div className="darkBG" onClick={() => setIsOpen(false)}></div>
          )}
          <div className="centered">
            <div className="modal-window">
              {showHeader && (
                <Header setIsOpen={setIsOpen} showClose={showClose} />
              )}
              <ModalBody>{children}</ModalBody>
              {showFooter && (
                <Footer
                  setIsOpen={setIsOpen}
                  firstFooterButtonName={firstFooterButtonName}
                  secondFooterButtonName={secondFooterButtonName}
                  showFirstFooterButton={showFirstFooterButton}
                  showSecondFooterButton={showSecondFooterButton}
                  firstCallback={firstCallback}
                  secondCallback={secondCallback}
                />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Modal;
