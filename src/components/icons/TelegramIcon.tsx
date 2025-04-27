import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="9" fill="#23263a" stroke="#393c4d" strokeWidth="2" />
    <path d="M6 10.5l3.2 1.2c.2.1.4.1.5-.1l3.6-4.2c.2-.3-.1-.7-.5-.6l-7.2 2.2c-.4.1-.4.6 0 .7z" fill="#fff"/>
    <path d="M8.5 13.5l1-2.1" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default TelegramIcon;
