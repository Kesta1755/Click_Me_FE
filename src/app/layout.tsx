// src/app/layout.tsx
'use client';

import './globals.css';
import { ReactNode } from 'react';
import SolanaProvider from '@/components/solana/solana-provider';
import { ReactQueryProvider } from './react-query-provider';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import MenuPortal from '@/components/MenuPortal/MenuPortal';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ReactQueryProvider>
          <SolanaProvider>
            <Header />
            <MenuPortal />
            {children}
            <Footer />
            <Toaster position="bottom-right" />
          </SolanaProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}