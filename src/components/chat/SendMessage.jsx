import React from "react";
import PropTypes from "prop-types";

const SendMessage = ({ isRaised, handleSend }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    handleSend();
  };
  return (
    <>
      <button
        className={`input-line-btn raise-hand-btn${
          isRaised ? " raise-hand-btn--raised" : "raise-hand-btn--raised"
        }`}
        onClick={handleButtonClick}
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M20 4L3 11L10 14L13 21L20 4Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </button>
    </>
  );
};

SendMessage.props = {
  handleSend: PropTypes.func,
};

export default SendMessage;
