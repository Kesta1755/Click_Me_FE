'use client';

import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useCliqueStaking } from '@/hooks/useCliqueStaking';
import { IconLoader2 } from '@tabler/icons-react';

interface CliqueStakeButtonProps {
  cliqueId: string;
  symbol: string;
}

const CliqueStakeButton: React.FC<CliqueStakeButtonProps> = ({ cliqueId, symbol }) => {
  const { connected } = useWallet();
  const { 
    isStaked, 
    isLoading, 
    hasClaimableRewards, 
    pendingRewards,
    tokenSymbol,
    stakeTokens, 
    claimRewards 
  } = useCliqueStaking(cliqueId);

  if (!connected) {
    return null; // Don't show stake buttons if wallet not connected
  }

  if (isLoading) {
    return (
      <button 
        className="bg-purple-600 text-xs text-white font-semibold rounded px-3 py-1.5 min-w-[90px] flex items-center justify-center"
        disabled
      >
        <IconLoader2 size={14} className="animate-spin mr-1" />
        <span>Loading...</span>
      </button>
    );
  }
  
  if (isStaked) {
    return (
      <button
        className={`${hasClaimableRewards ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-xs text-white font-semibold rounded px-3 py-1.5 focus:outline-none transition min-w-[90px]`}
        onClick={claimRewards}
        disabled={!hasClaimableRewards}
      >
        {hasClaimableRewards ? `Claim ${pendingRewards}` : 'Staked'}
      </button>
    );
  }
  
  return (
    <button
      className="bg-purple-600 hover:bg-purple-700 text-xs text-white font-semibold rounded px-3 py-1.5 focus:outline-none transition min-w-[90px]"
      onClick={stakeTokens}
    >
      Stake {symbol}
    </button>
  );
};

export default CliqueStakeButton;
