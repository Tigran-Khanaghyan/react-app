import { ReactNode } from "react";
import { FixMeLater } from "../../../constants";
import Header from "../Header/Header";
import ModalBody from "../ModalBody/ModalBody";
import Footer from "../Footer/Footer";
import "./Modal.css";

// const defaultProps = {
//   showHeader: true,
//   showFooter: true,
//   isDialog: false,
//   showFirstFooterButton: true,
// };

export type ModalProps = {
  showHeader?: boolean;
  showFooter?: boolean;
  setIsOpen?: (param: boolean) => void;
  open?: boolean;
  showInnerModal?: (param: boolean) => void;
  showClose?: boolean;
  children?: ReactNode;
  isDialog?: boolean;
  firstFooterButtonName?: string;
  secondFooterButtonName?: string;
  showFirstFooterButton?: boolean;
  showSecondFooterButton?: boolean;
  firstCallback?: (params?: FixMeLater) => FixMeLater | void;
  secondCallback?: (params?: FixMeLater) => FixMeLater | void;
  className?: string;
};

const Modal = ({
  showHeader = true,
  showFooter = true,
  setIsOpen,
  open,
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
}: ModalProps) => {
  return (
    <>
      {open && (
        <>
          <div
            className="darkBG"
            onClick={() => (!isDialog ? setIsOpen?.(false) : false)}
          />
          <div className="centered">
            <div className={className ? className : "modal-window"}>
              {showHeader && (
                <Header
                  setIsOpen={setIsOpen}
                  showClose={showClose! && !isDialog}
                />
              )}
              <ModalBody>{children}</ModalBody>
              {showFooter && (
                <Footer
                  firstFooterButtonName={firstFooterButtonName!}
                  secondFooterButtonName={secondFooterButtonName!}
                  showFirstFooterButton={showFirstFooterButton!}
                  showSecondFooterButton={showSecondFooterButton!}
                  firstCallback={firstCallback!}
                  secondCallback={secondCallback!}
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
