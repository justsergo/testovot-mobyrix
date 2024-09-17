import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const IconButton = ({...props}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300 
        ${props.isLoading ? "animate-pulse" : ""}
      `}
    >
      {props.children}
    </button>
  );
};

export default IconButton;