import React from 'react';

const ChevronDownIcon: React.FC<{ expanded: boolean }> = ({ expanded }) => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
    <circle cx="14" cy="14" r="13" fill="#23263a" stroke="#393c4d" strokeWidth="2" />
    <path d="M9 12l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export default ChevronDownIcon;
