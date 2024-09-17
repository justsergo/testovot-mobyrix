import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string,
  isLoading?: boolean
}

const Button = ({...props}: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`
        px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
        ${props.isLoading ? "animate-pulse" : ""}
      `}
    >
      {props.title ?? 'Convert'}
    </button>
  );
};

export default Button;