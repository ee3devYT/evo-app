"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface Game {
  id: string;
  name: string;
  icon: string;
  regions: string[];
}

const games: Game[] = [
  { 
    id: 'lol', 
    name: 'LEAGUE OF LEGENDS',
    icon: '/images/games/lol.webp',
    regions: ['NA', 'EU', 'BR', 'LAN']
  },
  { 
    id: 'valorant', 
    name: 'VALORANT',
    icon: '/images/games/valorant.webp',
    regions: ['NA', 'EU', 'BR']
  },
  { 
    id: 'tft', 
    name: 'TEAM FIGHT TACTICS',
    icon: '/images/games/tft.webp',
    regions: ['NA', 'EU', 'OCE']
  }
];

const GameSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2.5 flex items-center space-x-3 hover:bg-black/50 transition-all duration-300 min-w-[220px]"
      >
        <div className="flex items-center flex-1">
          {selectedGame?.icon && (
            <div className="relative mr-3">
              <Image
                src={selectedGame.icon}
                alt={selectedGame.name}
                width={24}
                height={24}
                className="rounded"
              />
            </div>
          )}
          <span className="text-white text-sm font-medium">
            {selectedGame ? selectedGame.name : 'SELECT YOUR GAME'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-white/70 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      <div className={`absolute left-0 mt-2 w-[280px] bg-[#1A1A1A]/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl transform transition-all duration-300 ${
        isOpen
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="p-2">
          {games.map((game) => (
            <button
              key={game.id}
              onClick={() => {
                setSelectedGame(game);
                setIsOpen(false);
              }}
              className={`w-full flex items-start p-3 rounded-lg transition-colors ${
                selectedGame?.id === game.id
                  ? 'bg-black/60'
                  : 'hover:bg-black/40'
              }`}
            >
              <div className="flex-shrink-0">
                <Image
                  src={game.icon}
                  alt={game.name}
                  width={32}
                  height={32}
                  className="rounded"
                />
              </div>
              <div className="ml-3 flex-1 text-left">
                <span className="text-white font-medium text-sm">{game.name}</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {game.regions.map((region) => (
                    <span
                      key={region}
                      className="inline-flex items-center px-2 py-0.5 text-xs font-medium text-[#C19A6B] bg-[#C19A6B]/10 rounded"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSelector;