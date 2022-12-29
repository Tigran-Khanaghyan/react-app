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
  showInnerModal,
  showClose,
  children,
  isDialog = false,
  firstFooterButtonName,
  secondFooterButtonName,
  showFirstFooterButton = true,
  showSecondFooterButton,
  firstCallback,
  secondCallback,
  className,
}) => {
  return (
    <>
      {open && (
        <>
          <div
            className="darkBG"
            onClick={() => (!isDialog ? setIsOpen(false) : false)}
          />
          <div className="centered">
            <div className={className ? className : "modal-window"}>
              {showHeader && (
                <Header
                  setIsOpen={setIsOpen}
                  showClose={showClose && !isDialog}
                />
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
                  showInnerModal={showInnerModal}
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
