import { CANCEL_BUTTON, CONFIRM, FixMeLater } from "../../../constants";
import Button from "../../../shared/Button";
import "./Footer.css";

export type FooterDefaultProps = {
  firstFooterButtonName: string;
  secondFooterButtonName: string;
  showFirstFooterButton: boolean;
  showSecondFooterButton: boolean;
  firstCallback: (params?: FixMeLater) => FixMeLater | void;
  secondCallback: (params?: FixMeLater) => FixMeLater | void;
};

const Footer = ({
  firstFooterButtonName = CONFIRM,
  secondFooterButtonName = CANCEL_BUTTON,
  showFirstFooterButton,
  showSecondFooterButton,
  firstCallback,
  secondCallback,
}: FooterDefaultProps) => {
  const handleFirstCallback = () => {
    if (firstCallback) firstCallback();
  };

  const handleSecondCallback = () => {
    if (secondCallback) secondCallback();
  };

  return (
    <div className={"modalActions"}>
      <div className={"actionsContainer"}>
        {showFirstFooterButton && (
          <Button
            className={"deleteBtn"}
            onClick={handleFirstCallback}
            name={firstFooterButtonName}
          />
        )}
        {showSecondFooterButton && (
          <Button
            className={"deleteBtn"}
            onClick={handleSecondCallback}
            name={secondFooterButtonName}
          />
        )}
      </div>
    </div>
  );
};

export default Footer;
