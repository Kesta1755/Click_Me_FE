import React from 'react';

const TwitterIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} width="20" height="20" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#363a4a" stroke="#fff" strokeWidth="2" />
    <path d="M8.29 15.71c6.18 0 9.56-5.12 9.56-9.56 0-.15 0-.29-.01-.44A6.85 6.85 0 0020 4.35a6.64 6.64 0 01-1.89.52 3.3 3.3 0 001.44-1.82 6.56 6.56 0 01-2.08.8A3.28 3.28 0 0012 6.09c0 .26.03.52.08.76A9.32 9.32 0 015.09 4.58a3.28 3.28 0 001.01 4.37A3.23 3.23 0 014.8 8.1v.04c0 1.6 1.14 2.94 2.66 3.24-.28.08-.58.12-.88.12-.22 0-.43-.02-.64-.06.43 1.34 1.68 2.32 3.16 2.35A6.58 6.58 0 014 17.29a9.29 9.29 0 005.03 1.47" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default TwitterIcon;
