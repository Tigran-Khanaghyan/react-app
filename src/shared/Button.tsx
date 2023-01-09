import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  onClick: MouseEventHandler,
  className: string,
  children?: ReactNode,
  name?: string
}

const Button = ({ onClick, className, children, name }: ButtonProps) => {
  return (
    <button onClick={onClick} className={className}>
      {name ? name : children}
    </button>
  );
};

export default Button;
