import React from 'react';

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#363a4a" stroke="#fff" strokeWidth="2" />
    <ellipse cx="12" cy="12" rx="7" ry="11" stroke="#fff" strokeWidth="1.5" fill="none"/>
    <ellipse cx="12" cy="12" rx="11" ry="7" stroke="#fff" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="3" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default GlobeIcon;
