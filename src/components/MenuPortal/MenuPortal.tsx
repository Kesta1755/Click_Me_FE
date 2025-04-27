'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IconMenu2, IconX, IconChevronDown } from '@tabler/icons-react';

const MenuPortal: React.FC = () => {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [headerEl, setHeaderEl] = useState<HTMLElement | null>(null);
  const [clickMeContainer, setClickMeContainer] = useState<HTMLElement | null>(null);
  
  useEffect(() => {
    setIsClient(true);
    
    // Find the header and click-me container
    const header = document.querySelector('header');
    if (header instanceof HTMLElement) {
      setHeaderEl(header);
      
      // Find the click-me container
      const container = document.getElementById('click-me-container');
      if (container instanceof HTMLElement) {
        setClickMeContainer(container);
      }
    }
    
    // Check if mobile
    const checkMobile = () => {
      const isMobileView = window.innerWidth < 768;
      setIsMobile(isMobileView);
      
      // Adjust container margins based on viewport
      if (clickMeContainer) {
        if (isMobileView) {
          clickMeContainer.style.marginLeft = '0';
        } else {
          clickMeContainer.style.marginLeft = '4rem';
        }
      }
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [clickMeContainer]);

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(prevState => !prevState);
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Cliques', href: '/cliques' },
    { name: 'Docs', href: 'https://click-me.gitbook.io/click-me-docs' },
  ];

  if (!isClient) return null;

  // Desktop hamburger button
  const desktopButton = !isMobile && (
    <div style={{ 
      position: 'absolute',
      left: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 200, // ensure above all header layers
      pointerEvents: 'auto',
      display: isDesktopMenuOpen ? 'none' : 'block'
    }}>
      <button
        onClick={toggleDesktopMenu}
        aria-label="Toggle menu"
        style={{ 
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          color: 'white',
          padding: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto'
        }}
      >
        <IconMenu2 size={24} />
      </button>
    </div>
  );

  // Mobile chevron button - centered in header
  const mobileButton = isMobile && (
    <div style={{ 
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 200, // ensure above all header layers
      pointerEvents: 'auto'
    }}>
      <button
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        style={{ 
          cursor: 'pointer',
          background: 'transparent',
          border: 'none',
          color: 'white',
          padding: '8px',
          pointerEvents: 'auto'
        }}
      >
        <IconChevronDown 
          size={24}
          style={{ 
            transform: isMobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
            transition: 'transform 0.3s ease'
          }}
        />
      </button>
    </div>
  );

  // Menu content
  const menuContent = (
    <>
      {/* Desktop side menu */}
      <div 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '280px',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          borderRight: '1px solid rgba(255, 255, 255, 0.1)',
          transform: isDesktopMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'transform 0.3s ease',
          zIndex: 90,
          paddingTop: '100px',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          boxShadow: '4px 0 15px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Close button at the top */}
        <div style={{
          padding: '0.5rem 0 1.5rem 0',
          display: 'flex',
          justifyContent: 'flex-end'
        }}>
          <button
            onClick={toggleDesktopMenu}
            aria-label="Close menu"
            style={{ 
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'white',
              padding: '8px'
            }}
          >
            <IconX size={24} />
          </button>
        </div>
        
        <nav style={{ marginTop: '1rem' }}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '1rem',
                color: 'white',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                borderRadius: '0.5rem',
                marginBottom: '0.75rem',
                fontSize: '1rem',
                fontWeight: 500,
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
              }}
            >
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown menu - center aligned text */}
      {isMobile && (
        <div 
          style={{ 
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '0 0 0.75rem 0.75rem',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'all 0.3s ease',
            zIndex: 90,
            padding: '1rem',
            transform: `translateY(${isMobileMenuOpen ? '0' : '-10px'})`,
          }}
        >
          <nav style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            width: '100%',
            margin: '0 auto'
          }}>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center', // Center the text horizontally
                  padding: '1rem',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  textAlign: 'center' // Ensure text is centered
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <span style={{ width: '100%', textAlign: 'center' }}>{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );

  return (
    <>
      {headerEl && (
        <>
          {createPortal(desktopButton, headerEl)}
          {createPortal(mobileButton, headerEl)}
        </>
      )}
      {/* Ensure coin animation container never blocks pointer events */}
      <style>{`
        .button-coin-animation { pointer-events: none !important; }
      `}</style>
      {menuContent}
    </>
  );
};

export default MenuPortal;