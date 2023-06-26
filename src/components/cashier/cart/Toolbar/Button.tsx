import React from "react";

interface Props {
  children: String;
  className?: String;
  id?: string;
  onClick: () => void;
}
const button = ({ children, onClick, className, id }: Props) => {
  return (
    <button
      className={"btn btn-primary" + " " + className}
      id={id}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default button;
