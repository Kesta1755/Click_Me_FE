import React from 'react';

const ArrowIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#363a4a" stroke="#fff" strokeWidth="2" />
    <path
      d={expanded ? "M8 14l4-4 4 4" : "M10 8l4 4-4 4"}
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default ArrowIcon;
