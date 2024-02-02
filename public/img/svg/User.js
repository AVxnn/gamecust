import React from "react";

const User = ({ type = 0 }) => {
  return type ? (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="person">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
          <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
        </g>
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="person">
          <rect width="24" height="24" opacity="0" />
          <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
          <path d="M18 21a1 1 0 0 0 1-1 7 7 0 0 0-14 0 1 1 0 0 0 1 1z" />
        </g>
      </g>
    </svg>
  );
};

export default User;
