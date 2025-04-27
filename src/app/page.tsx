'use client';

import React from 'react';
import ButtonGame from '@/components/button-game';
import { ButtonGameProvider } from '@/hooks/useButtonGame';
import StakingInterface from '@/components/StakingInterface';
import GameMechanicsPopup from '@/components/GameMechanicsPopup';
import { Toaster } from 'react-hot-toast';

// Header, MenuPortal, and Footer provided by RootLayout

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Header and menu provided by layout */}

      {/* Main content with flex-grow to push footer to bottom */}
      <main className="site-content container mx-auto py-8 px-4 space-y-10 flex-grow">
        <ButtonGameProvider>
          <ButtonGame />
        </ButtonGameProvider>
        <StakingInterface />
        
        {/* This empty div ensures proper spacing at the bottom */}
        <div className="pb-16 md:pb-24"></div>
      </main>
      
      {/* Footer provided by layout */}
      
      {/* Game Mechanics Popup */}
      <GameMechanicsPopup />
      
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          success: {
            style: { background: '#4F46E5', color: 'white' },
            iconTheme: { primary: 'white', secondary: '#4F46E5' },
          },
          error: {
            style: { background: '#EF4444', color: 'white' },
            iconTheme: { primary: 'white', secondary: '#EF4444' },
          },
          loading: {
            style: { background: '#4F46E5', color: 'white' },
            iconTheme: { primary: 'white', secondary: '#4F46E5' },
          },
        }}
      />
    </div>
  );
}