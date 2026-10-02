import React from 'react';
import { Screen } from '../App';
import svgPaths from '../imports/svg-nlbcikv62d';
import { BookOpen, Beaker, Sparkles } from 'lucide-react';

interface BottomNavigationProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export function BottomNavigation({ currentScreen, onNavigate }: BottomNavigationProps) {
  const navItems = [
    { 
      screen: 'skin-coach' as Screen, 
      label: 'Skin Coach',
      icon: (isActive: boolean) => (
        <Sparkles 
          className="h-[20.5px] w-[20.5px]" 
          color={isActive ? "#FE8F7F" : "#99A1AF"}
          strokeWidth={2}
        />
      )
    },
    { 
      screen: 'journal' as Screen, 
      label: 'Skin Journal',
      icon: (isActive: boolean) => (
        <BookOpen 
          className="h-[20.5px] w-[20.5px]" 
          color={isActive ? "#FE8F7F" : "#99A1AF"}
          strokeWidth={2}
        />
      )
    },
    { 
      screen: 'routine-builder' as Screen, 
      label: 'Routines',
      icon: (isActive: boolean) => (
        <div className="h-[20.5px] w-[19.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
            <g>
              <path d={svgPaths.p2b9fe700} fill={isActive ? "#FE8F7F" : "#99A1AF"} />
              <path d={svgPaths.p3d62ce00} fill={isActive ? "#FE8F7F" : "#99A1AF"} />
            </g>
          </svg>
        </div>
      )
    },
    { 
      screen: 'ingredient-explorer' as Screen, 
      label: 'Ingredient Explorer',
      icon: (isActive: boolean) => (
        <Beaker 
          className="h-[20.5px] w-[20.5px]" 
          color={isActive ? "#FE8F7F" : "#99A1AF"}
          strokeWidth={2}
        />
      )
    },
  ];

  return (
    <div className="relative w-full shrink-0 p-[0px]">
      {/* Navigation Bar */}
      <div className={`bg-white content-stretch flex h-[90px] items-center justify-between px-6 relative shrink-0 w-full border-t border-gray-200`}>
        {navItems.map((item) => {
          const isActive = currentScreen === item.screen;
          
          return (
            <button
              key={item.screen}
              onClick={() => onNavigate(item.screen)}
              className="flex flex-col items-center justify-center gap-1.5 min-w-0 relative flex-1"
            >
              {isActive && (
                <div className="absolute -top-[24px] left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#FE8F7F]" />
              )}
              <div className="flex items-center justify-center">
                {item.icon(isActive)}
              </div>
              <p className={`text-[11px] font-['Inter:Regular',sans-serif] whitespace-nowrap ${
                isActive ? 'text-black' : 'text-[#99A1AF]'
              }`}>
                {item.label}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}