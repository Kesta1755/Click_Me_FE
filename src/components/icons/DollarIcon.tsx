import React from 'react';

const DollarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="#23263a" stroke="#393c4d" strokeWidth="2" />
    <text x="50%" y="55%" textAnchor="middle" fill="#4ade80" fontSize="12" fontWeight="bold" dy=".3em">$</text>
  </svg>
);

export default DollarIcon;
