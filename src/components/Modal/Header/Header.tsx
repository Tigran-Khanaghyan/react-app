import Delete from "../../../asserts/Icons/Delete";
import Button from "../../../shared/Button";
import { MODAL_TITLE } from "../../../constants";
import "./Header.css";

const headerDefaultProps = {
  showClose: true,
};

export type HeaderProps = {
  title?: string;
  setIsOpen?: (param: boolean) => void;
  showClose?: boolean;
} & typeof headerDefaultProps;

const Header = ({ title, setIsOpen, showClose }: HeaderProps) => {
  return (
    <div className={"modalHeader"}>
      {
        <>
          {showClose && (
            <Button className={"closeBtn"} onClick={() => setIsOpen?.(false)}>
              <Delete height={25} width={25} />
            </Button>
          )}
          <h5 className={"heading"}>{title ? title : MODAL_TITLE}</h5>
        </>
      }
    </div>
  );
};

export default Header;
