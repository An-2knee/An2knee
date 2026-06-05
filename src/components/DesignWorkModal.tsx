import { X } from 'lucide-react';

import type { DesignWork } from '../types';

interface DesignWorkModalProps {
  work: DesignWork;
  onClose: () => void;
}

export function DesignWorkModal({ work, onClose }: DesignWorkModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 modal-backdrop"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors md:hidden"
        aria-label="Close design work details"
      >
        <X size={28} />
      </button>

      <div
        className="w-full h-full md:h-auto md:max-w-5xl md:w-full md:rounded-2xl overflow-hidden md:max-h-[85vh] flex flex-col md:flex-row shadow-2xl relative"
        style={{
          backgroundColor: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className="w-full md:w-3/5 h-[50vh] md:h-auto flex items-center justify-center flex-shrink-0 relative"
          style={{ backgroundColor: work.color }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)',
            }}
          />
        </div>

        <div className="w-full md:w-2/5 flex flex-col h-[50vh] md:h-auto bg-[var(--card-bg)] p-6 md:p-8 relative">
          <button
            onClick={onClose}
            className="hidden md:block absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            style={{ color: 'var(--text-primary)' }}
            aria-label="Close design work details"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col h-full justify-center mt-4 md:mt-0">
            <div
              className="text-xs mb-3 uppercase tracking-wider font-semibold"
              style={{ color: 'var(--text-muted)' }}
            >
              {work.type}
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {work.title}
            </h3>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              {work.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
