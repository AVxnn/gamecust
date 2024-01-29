import React from "react";

const Fire = ({ solid = false }) => {
  if (solid) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M8 8.03066C8 6.80206 6.31555 6.47641 5.86866 7.62597C4.78765 10.4067 4 12.8943 4 14.2392C4 18.5254 7.58172 22 12 22C16.4183 22 20 18.5254 20 14.2392C20 12.7943 19.0908 10.0304 17.8855 7.0011C16.3241 3.07693 15.5434 1.11484 14.5797 1.00916C14.2714 0.975343 13.9349 1.03614 13.6598 1.17541C12.8 1.61066 12.8 3.75066 12.8 8.03066C12.8 9.31651 11.7255 10.3589 10.4 10.3589C9.07452 10.3589 8 9.31651 8 8.03066Z"
          fill="#222222"
        />
      </svg>
    );
  }

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 8.00001C16.5 9.50001 16 11.5 13.6 12.3C14.3 10.6 14.4 8.90001 13.9 7.30001C13.2 5.20001 10.9 3.60001 9.3 2.70001C8.9 2.40001 8.2 2.80001 8.3 3.40001C8.3 4.50001 8 6.10001 6.3 7.80001C4.1 10 3 12.3 3 14.5C3 17.4 5 21 9 21C5 17 8 13.5 8 13.5C8.8 19.4 13 21 15 21C16.7 21 20 19.8 20 14.6C20 11.5 18.7 9.10001 17.6 7.70001C17.3 7.20001 16.6 7.50001 16.5 8.00001"
        fill="black"
      />
    </svg>
  );
};

export default Fire;
