import { ChevronRight, Heart } from 'lucide-react';

import { designWorks } from '../data/designWorks';
import type { DesignWork, Page } from '../types';

interface DesignPageProps {
  onNavigate: (page: Page) => void;
  onSelectWork: (work: DesignWork) => void;
}

export function DesignPage({ onNavigate, onSelectWork }: DesignPageProps) {
  return (
    <div
      className="min-h-screen py-24 px-4 relative z-10"
      style={{ backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-full mx-auto">
        <div className="mb-12 entrance-fade px-4 md:px-8 lg:px-12">
          <button
            onClick={() => onNavigate('hero')}
            className="flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            <ChevronRight size={14} className="rotate-180" />
            Back to Home
          </button>
          <div
            className="bracket-left bracket-right inline-block text-sm mb-4"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Creative Works
          </div>
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 entrance-fade entrance-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Graphic Design
          </h1>
          <p
            className="text-lg entrance-fade entrance-delay-2"
            style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}
          >
            Visual storytelling through branding, typography, and digital
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4 stagger-children mt-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {designWorks.map((work) => (
            <button
              key={work.id}
              onClick={() => onSelectWork(work)}
              className="relative aspect-square overflow-hidden group md:rounded-xl cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: work.color }}
              />

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(0,0,0,0.4))',
                }}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              >
                <Heart
                  className="text-white mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"
                  size={28}
                />
                <h3
                  className="text-white font-bold text-lg md:text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {work.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
