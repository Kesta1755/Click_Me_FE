'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Coins } from 'lucide-react';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import DollarIcon from '@/components/icons/DollarIcon';
import ClockIcon from '@/components/icons/ClockIcon';
import { Globe, Twitter, Send } from 'lucide-react';
import Link from 'next/link';
import { IconCoin } from '@tabler/icons-react';

// Header, MenuPortal, and Footer are provided by the RootLayout

// Types for token mock data
interface TokenStats {
  status: string;
  timeRemaining: string;
  clickCost: string;
  potSize: string;
  totalClicks: number;
  winner: string;
  gameNumber: number;
  userClicks: number;
  stakingReward: string;
}
interface TokenDetails {
  price: string;
  change: string;
  marketCap: string;
  totalPlayers: string;
}
interface TokenLink {
  icon: string;
  url: string;
}
interface Token {
  rank: number;
  symbol: string;
  name: string;
  quickPlay: boolean;
  time: string;
  amount: string;
  stats: TokenStats;
  details: TokenDetails;
  links: TokenLink[];
}

const MOCK_TOKENS: Token[] = [
  {
    rank: 1,
    symbol: 'BONK',
    name: 'BONK',
    quickPlay: true,
    time: '2m10s',
    amount: '24.8m BONK',
    stats: {
      status: 'In Game',
      clickCost: '0.14 SOL',
      potSize: '3.02 SOL',
      totalClicks: 187,
      winner: '0x8f39...e4b2',
      gameNumber: 42,
      userClicks: 12,
      stakingReward: '4,200 BONK / day',
      timeRemaining: '2:34',
    },
    details: {
      price: '$0.00001234',
      change: '+15.4%',
      marketCap: '$1.2M',
      totalPlayers: '12,345',
    },
    links: [
      { icon: 'globe', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'telegram', url: '#' },
    ],
  },
  {
    rank: 2,
    symbol: 'P',
    name: 'Popcat',
    quickPlay: true,
    time: '1m01s',
    amount: '124.8m POPCAT',
    stats: {
      status: 'In Game',
      timeRemaining: '0:59',
      clickCost: '0.09 SOL',
      potSize: '1.02 SOL',
      totalClicks: 99,
      winner: '0x3b1c...a1b2',
      gameNumber: 35,
      userClicks: 3,
      stakingReward: '1,800 POPCAT / day',
    },
    details: {
      price: '$0.00000456',
      change: '+6.2%',
      marketCap: '$0.8M',
      totalPlayers: '7,890',
    },
    links: [
      { icon: 'globe', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'telegram', url: '#' },
    ],
  },
  {
    rank: 3,
    symbol: 'M',
    name: 'cat in a dogs world',
    quickPlay: true,
    time: '2m10s',
    amount: '24.8m MEW',
    stats: {
      status: 'In Game',
      timeRemaining: '1:15',
      clickCost: '0.11 SOL',
      potSize: '2.02 SOL',
      totalClicks: 120,
      winner: '0x7e2a...d5c3',
      gameNumber: 29,
      userClicks: 7,
      stakingReward: '2,900 MEW / day',
    },
    details: {
      price: '$0.00000789',
      change: '+2.5%',
      marketCap: '$0.5M',
      totalPlayers: '4,321',
    },
    links: [
      { icon: 'globe', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'telegram', url: '#' },
    ],
  },
  {
    rank: 4,
    symbol: 'F',
    name: 'Fartcoin',
    quickPlay: true,
    time: '2m10s',
    amount: '24.8m FART',
    stats: {
      status: 'In Game',
      timeRemaining: '2:00',
      clickCost: '0.08 SOL',
      potSize: '1.25 SOL',
      totalClicks: 77,
      winner: '0x6f1b...c2d4',
      gameNumber: 18,
      userClicks: 2,
      stakingReward: '900 FART / day',
    },
    details: {
      price: '$0.00000123',
      change: '-1.2%',
      marketCap: '$0.2M',
      totalPlayers: '2,100',
    },
    links: [
      { icon: 'globe', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'telegram', url: '#' },
    ],
  },
  {
    rank: 5,
    symbol: 'A',
    name: 'Act I The AI Prophecy',
    quickPlay: true,
    time: '2m10s',
    amount: '24.8m ACT',
    stats: {
      status: 'In Game',
      timeRemaining: '0:44',
      clickCost: '0.10 SOL',
      potSize: '1.92 SOL',
      totalClicks: 55,
      winner: '0x5c9e...b8a7',
      gameNumber: 12,
      userClicks: 1,
      stakingReward: '1,100 ACT / day',
    },
    details: {
      price: '$0.00000234',
      change: '+0.8%',
      marketCap: '$0.3M',
      totalPlayers: '1,500',
    },
    links: [
      { icon: 'globe', url: '#' },
      { icon: 'twitter', url: '#' },
      { icon: 'telegram', url: '#' },
    ],
  },
];

const CliquesPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Toggle expanded state for a token
  const handleExpand = (rank: number) => {
    setExpanded(expanded === rank ? null : rank);
  };

  // Create animation effect similar to main page
  const triggerCascade = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1500);
  }, []);

  useEffect(() => {
    triggerCascade();
    const intervalId = setInterval(triggerCascade, 7000);
    return () => clearInterval(intervalId);
  }, [triggerCascade]);

  // Simulate quick play action (replace with real logic as needed)
  const handleQuickPlay = (token: Token) => {
    // Here you would integrate with actual game logic
    // For demo, just show an alert
    console.log(`Quick Play: You are now the next click for ${token.name}!`);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
        <main className="site-content container mx-auto py-8 px-4 space-y-10 flex-grow">
          {/* Cliques Animated Header - EXACT MATCH with homepage */}
          <div className="relative flex flex-col justify-center items-center mb-8 sm:mb-12 md:mb-16 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6">
            {/* Background glow effect - scaled for different screens */}
            <div className="absolute w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-pink-900/40 rounded-full blur-xl"></div>
            
            {/* Floating coins - exact positions as homepage */}
            <div className="absolute w-full h-full pointer-events-none" style={{ zIndex: 15 }}>
              <div
                className="absolute left-1/4 top-5 text-yellow-500 animate-[float_4s_ease-in-out_infinite]"
                style={{ animationDelay: "-0.5s" }}
              >
                <IconCoin size={24} />
              </div>
              <div
                className="absolute right-1/4 top-1/3 text-yellow-400 animate-[float_3.5s_ease-in-out_infinite]"
                style={{ animationDelay: "-1.5s" }}
              >
                <IconCoin size={18} />
              </div>
              <div
                className="absolute left-1/3 bottom-0 text-yellow-300 animate-[float_5s_ease-in-out_infinite]"
                style={{ animationDelay: "-2.5s" }}
              >
                <IconCoin size={22} />
              </div>
            </div>
            
            {/* Responsive animated letters - exact animation as homepage */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-center relative z-10 mb-2 sm:mb-3 md:mb-4 tracking-tighter max-w-full px-2">
              <div className={`cascade-container ${isAnimating ? "animating" : ""}`}>
                <span className="click-me-letter" style={{ animationDelay: "0s" }}>C</span>
                <span className="click-me-letter" style={{ animationDelay: "0.1s" }}>l</span>
                <span className="click-me-letter" style={{ animationDelay: "0.2s" }}>i</span>
                <span className="click-me-letter" style={{ animationDelay: "0.3s" }}>q</span>
                <span className="click-me-letter" style={{ animationDelay: "0.4s" }}>u</span>
                <span className="click-me-letter" style={{ animationDelay: "0.5s" }}>e</span>
                <span className="click-me-letter" style={{ animationDelay: "0.6s" }}>s</span>
              </div>
            </h2>
            
            {/* Responsive subtitle - exact match with homepage */}
            <div className="text-base sm:text-lg md:text-xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 px-2 sm:px-3 md:px-4 w-full">
              Compete for your Clique's pot!
            </div>
            
            {/* Responsive gradient underline - exact match with homepage */}
            <div className="relative mt-2 w-64 sm:w-72 md:w-80 max-w-[90%] h-1">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 w-2/3 sm:w-3/4 h-16 sm:h-20 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>
          </div>
          
          {/* Responsive Search & Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
            <div className="flex-1 flex items-center bg-[#18122b] rounded-lg px-3 sm:px-4 py-2 border border-gray-700">
              <input
                type="text"
                placeholder="Search tokens..."
                className="bg-transparent outline-none text-gray-100 flex-1 placeholder-gray-400 text-sm sm:text-base w-full"
              />
            </div>
            <div className="flex items-center space-x-2 mt-2 sm:mt-0 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
              <button className="bg-purple-700 px-3 sm:px-4 py-2 rounded-md font-semibold text-white text-sm sm:text-base whitespace-nowrap min-w-[70px]">Rank</button>
              <button className="bg-[#18122b] px-3 sm:px-4 py-2 rounded-md font-semibold text-white border border-gray-700 text-sm sm:text-base whitespace-nowrap min-w-[70px]">Amount</button>
              <button className="bg-[#18122b] px-3 sm:px-4 py-2 rounded-md font-semibold text-white border border-gray-700 text-sm sm:text-base whitespace-nowrap min-w-[70px]">Time</button>
            </div>
          </div>
          {/* Token List */}
          <div className="space-y-4">
            {MOCK_TOKENS.map((token) => (
              <div
                key={token.rank}
                className={`rounded-xl bg-[#18122b] border border-gray-700 shadow-lg transition-all duration-300 ${expanded === token.rank ? 'p-3 sm:p-4 md:p-6' : 'p-3 sm:p-4 flex flex-wrap sm:flex-nowrap items-center justify-between hover:border-purple-700'}`}
              >
                {expanded === token.rank ? (
                  <div className="flex flex-col bg-[#23263a] rounded-2xl shadow-lg border border-[#393c4d] p-3 sm:p-4 md:p-6 mt-2">
                    <div className="flex items-center mb-4">
                      {/* Rank */}
                      <span className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-base mr-4 bg-[#181a2a] text-gray-200 border border-[#393c4d]">#{token.rank}</span>
                      {/* Token colored icon */}
                      <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl mr-4 ${token.symbol === 'BONK' ? 'bg-yellow-400 text-gray-900' : token.symbol === 'P' ? 'bg-pink-400 text-white' : token.symbol === 'M' ? 'bg-orange-400 text-white' : token.symbol === 'F' ? 'bg-gray-700 text-white' : 'bg-purple-700 text-white'}`}>{token.symbol[0]}</span>
                      <span className="font-bold text-xl flex-1 truncate text-white">{token.name}</span>
                      {token.quickPlay && (
                        <button
                          className="ml-2 bg-purple-600 text-sm text-white font-semibold rounded px-3 py-1 focus:outline-none hover:bg-purple-700 transition"
                          aria-label={`Quick Play ${token.name}`}
                          onClick={(e) => { e.stopPropagation(); handleQuickPlay(token); }}
                          tabIndex={0}
                        >
                          Quick Play
                        </button>
                      )}
                      <span className="flex items-center text-gray-200 text-base w-24 justify-end ml-4"><ClockIcon className="mr-1" /> {token.time}</span>
                      <span className="flex items-center text-green-300 font-bold w-40 justify-end ml-4"><DollarIcon className="mr-1" /> {token.amount}</span>
                      <button
                        className="ml-4 focus:outline-none"
                        aria-label={expanded === token.rank ? 'Collapse card' : 'Expand card'}
                        onClick={(e) => { e.stopPropagation(); handleExpand(token.rank); }}
                        tabIndex={0}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        <ChevronDownIcon expanded={expanded === token.rank} />
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-8">
                      {/* Game Stats Section */}
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="text-base font-bold text-gray-100 mb-2">Game Stats</div>
                        <div className="grid grid-cols-2 gap-2 text-base">
                          <div className="flex justify-between"><span className="text-gray-400">Status</span><span className="text-green-400 font-bold">{token.stats.status}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Time Remaining</span><span className="text-white">{token.stats.timeRemaining}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Current Click Cost</span><span className="text-green-300 font-semibold">{token.stats.clickCost}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Pot Size</span><span className="text-green-200 font-semibold">{token.stats.potSize}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Total Clicks</span><span className="text-white">{token.stats.totalClicks}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Current Winner</span><span className="text-purple-200">{token.stats.winner}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Game #</span><span className="text-white">#{token.stats.gameNumber}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Your Clicks</span><span className="text-white">{token.stats.userClicks}</span></div>
                        </div>
                        {/* Staking Reward Section */}
                        <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-indigo-900/60 to-purple-900/60 border border-indigo-700">
                          <div className="font-bold text-indigo-200 mb-1">Staking Reward</div>
                          <div className="text-base text-gray-100">Earn <span className="font-semibold text-green-300">{token.stats.stakingReward}</span> by staking this token.</div>
                          <div className="mt-2 flex items-center space-x-2">
                            <Link href="/staking" className="bg-indigo-700 hover:bg-indigo-800 text-white px-3 py-1 rounded-md text-xs font-semibold">Stake Now</Link>
                            <span className="text-xs text-gray-400">(Demo only)</span>
                          </div>
                        </div>
                      </div>
                      {/* Token Details Section */}
                      <div className="flex-1">
                        <div className="text-base font-bold text-gray-100 mb-2">Token Details</div>
                        <div className="space-y-1 text-base">
                          <div className="flex justify-between"><span className="text-gray-400">Current Price</span><span className="text-green-200 font-bold">{token.details.price}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">24h Change</span><span className="text-green-400 font-bold">{token.details.change}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Market Cap</span><span className="text-white">{token.details.marketCap}</span></div>
                          <div className="flex justify-between"><span className="text-gray-400">Total Players</span><span className="text-white">{token.details.totalPlayers}</span></div>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                          <Link href="/game" className="bg-purple-700 px-4 py-2 rounded-md text-white font-semibold shadow hover:bg-purple-800 transition">Play Now</Link>
                          {/* Socials */}
                          <div className="flex items-center space-x-2">
                            <a href={token.links.find((l) => l.icon === 'globe')?.url || '#'} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white" aria-label="Website" tabIndex={0}><Globe size={18} /></a>
                            <a href={token.links.find((l) => l.icon === 'twitter')?.url || '#'} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white" aria-label="Twitter" tabIndex={0}><Twitter size={18} /></a>
                            <a href={token.links.find((l) => l.icon === 'telegram')?.url || '#'} className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-white" aria-label="Telegram" tabIndex={0}><Send size={18} /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Collapsed Card
                  <div className="flex items-center w-full justify-between">
                    <div className="flex items-center">
                      <span className="w-8 h-8 flex items-center justify-center rounded-full font-bold text-base mr-4 bg-[#181a2a] text-gray-200 border border-[#393c4d]">#{token.rank}</span>
                      <span className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4 ${token.symbol === 'BONK' ? 'bg-yellow-400 text-gray-900' : token.symbol === 'P' ? 'bg-pink-400 text-white' : token.symbol === 'M' ? 'bg-orange-400 text-white' : token.symbol === 'F' ? 'bg-gray-700 text-white' : 'bg-purple-700 text-white'}`}>{token.symbol[0]}</span>
                      <span className="font-bold text-lg flex-1 truncate text-white">{token.name}</span>
                      {token.quickPlay && (
                        <button
                          className="ml-2 sm:ml-3 bg-purple-600 text-xs text-white font-semibold rounded px-2 py-1 focus:outline-none hover:bg-purple-700 transition touch-manipulation"
                          aria-label={`Quick Play ${token.name}`}
                          onClick={(e) => { e.stopPropagation(); handleQuickPlay(token); }}
                          tabIndex={0}
                        >
                          Quick Play
                        </button>
                      )}
                      <span className="flex items-center text-gray-200 text-base ml-4"><ClockIcon className="mr-1" /> {token.time}</span>
                      <span className="flex items-center text-green-300 font-bold ml-4"><DollarIcon className="mr-1" /> {token.amount}</span>
                      <button
                        className="ml-4 focus:outline-none"
                        aria-label={expanded === token.rank ? 'Collapse card' : 'Expand card'}
                        onClick={(e) => { e.stopPropagation(); handleExpand(token.rank); }}
                        tabIndex={0}
                        style={{ background: 'none', border: 'none', padding: 0 }}
                      >
                        <ChevronDownIcon expanded={expanded === token.rank} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default CliquesPage;
