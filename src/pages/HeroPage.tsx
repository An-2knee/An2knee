import { ChevronRight } from 'lucide-react';

import { navItems } from '../constants/navigation';
import type { Page } from '../types';

interface HeroPageProps {
  onNavigate: (page: Page) => void;
}

export function HeroPage({ onNavigate }: HeroPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 entrance-fade tracking-tight leading-tight"
          style={{
            fontFamily: 'var(--font-display)',
            color: 'var(--text-primary)',
          }}
        >
          Pixel
          <span className="gradient-text block">Craftsman</span>
        </h1>

        <p
          className="text-xl sm:text-2xl mb-8 entrance-fade entrance-delay-1 max-w-2xl mx-auto"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
          }}
        >
          Code. Design. Build.
          <span
            className="block mt-2 text-base sm:text-lg"
            style={{ color: 'var(--text-muted)' }}
          >
            Crafting digital experiences from algorithms to aesthetics
          </span>
        </p>

        <div className="flex flex-col items-center gap-4 entrance-fade entrance-delay-2">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Explore My Works
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="group flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all hover:scale-105 entrance-fade"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    animationDelay: `${0.3 + index * 0.1}s`,
                  }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                  <span>{item.label}</span>
                  <ChevronRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                    style={{ color: 'var(--accent)' }}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
