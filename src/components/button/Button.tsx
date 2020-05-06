import React from "react";

interface Props {
  isLoading: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  buttonClassName: string;
}

const Button = (props: Props) => {
  return (
    <>
      {props.isLoading ? (
        <button className={`button is-loading ${props.buttonClassName}`}>
          Loading
        </button>
      ) : (
        <button
          style={{ width: "100%", fontWeight: "bold" }}
          className={`button ${props.buttonClassName}`}
          onClick={props.handleClick}
        >
          {props.text}
        </button>
      )}
    </>
  );
};

export default Button;
