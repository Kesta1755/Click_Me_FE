import React from 'react';

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#363a4a" stroke="#fff" strokeWidth="2" />
    <rect x="8" y="8" width="8" height="8" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/>
    <rect x="4" y="4" width="8" height="8" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);

export default CopyIcon;
