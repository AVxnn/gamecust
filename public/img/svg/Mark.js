import React from "react";

const Mark = ({ type }) => {
  return type ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
    >
      <path
        d="M0 2C0 0.895431 0.895431 0 2 0H14C15.1046 0 16 0.895431 16 2V15.5925C16 17.3108 13.9762 18.2291 12.683 17.0976L9.31701 14.1524C8.56296 13.4926 7.43704 13.4926 6.68299 14.1524L3.31701 17.0976C2.02384 18.2291 0 17.3108 0 15.5925V2Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17 4H7C5.89543 4 5 4.89543 5 6V17.8271C5 19.5062 6.94396 20.4379 8.25278 19.3862L10.7472 17.3817C11.4789 16.7937 12.5211 16.7937 13.2528 17.3817L15.7472 19.3862C17.056 20.4379 19 19.5062 19 17.8271V6C19 4.89543 18.1046 4 17 4Z"
        stroke="#24292E"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Mark;
