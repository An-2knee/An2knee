import { ChevronLeft, ChevronRight } from 'lucide-react';

import { gundamKits } from '../data/gundamKits';
import type { Page } from '../types';
import { getGundamGradeLabel } from '../utils/gundam';

interface GundamPageProps {
  currentIndex: number;
  onGoTo: (index: number) => void;
  onNavigate: (page: Page) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function GundamPage({
  currentIndex,
  onGoTo,
  onNavigate,
  onNext,
  onPrevious,
}: GundamPageProps) {
  const kit = gundamKits[currentIndex];
  const gradeLabel = getGundamGradeLabel(kit);

  return (
    <div
      className="gundam-showcase"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div
        className="gundam-ambient-glow"
        style={{
          background: `radial-gradient(ellipse at 30% 50%, ${kit.accentColor}15 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, ${kit.accentColor}0a 0%, transparent 50%)`,
        }}
      />

      <div className="gundam-bg-number" style={{ color: kit.accentColor }}>
        {String(currentIndex + 1).padStart(2, '0')}
      </div>

      <button
        onClick={() => onNavigate('hero')}
        className="gundam-back-btn entrance-fade"
        style={{
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-body)',
        }}
      >
        <ChevronRight size={14} className="rotate-180" />
        Back to Home
      </button>

      <button
        onClick={onPrevious}
        className="gundam-nav-arrow gundam-nav-left"
        style={{
          borderColor: `${kit.accentColor}40`,
          color: 'var(--text-primary)',
        }}
        aria-label="Previous Gundam"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={onNext}
        className="gundam-nav-arrow gundam-nav-right"
        style={{
          borderColor: `${kit.accentColor}40`,
          color: 'var(--text-primary)',
        }}
        aria-label="Next Gundam"
      >
        <ChevronRight size={28} />
      </button>

      <div className="gundam-content">
        <div className="gundam-image-section">
          <div className="gundam-image-frame">
            <div
              className="gundam-image-placeholder"
              style={{ backgroundColor: kit.color }}
            />
            <div
              className="gundam-status-badge"
              style={{
                backgroundColor:
                  kit.status === 'Completed' ? '#22c55e' : kit.accentColor,
              }}
            >
              {kit.status === 'Completed' ? 'BUILT' : 'WIP'}
            </div>
          </div>
        </div>

        <div className="gundam-info-section">
          <div
            className="gundam-series-label entrance-fade"
            style={{ color: kit.accentColor }}
          >
            {kit.series}
          </div>

          <div className="gundam-name-block entrance-fade entrance-delay-1">
            <h1
              className="gundam-designation"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-muted)',
              }}
            >
              {kit.designation}
            </h1>
            <h2
              className="gundam-name"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {kit.name}
            </h2>
          </div>

          <div className="gundam-meta entrance-fade entrance-delay-2">
            <div
              className="gundam-grade-pill"
              style={{ backgroundColor: kit.accentColor, color: '#fff' }}
            >
              {gradeLabel}
            </div>
            <div
              className="gundam-scale-pill"
              style={{
                borderColor: `${kit.accentColor}50`,
                color: 'var(--text-muted)',
              }}
            >
              Scale {kit.scale}
            </div>
          </div>

          <p
            className="gundam-description entrance-fade entrance-delay-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            {kit.description}
          </p>

          <div className="gundam-progress-section entrance-fade entrance-delay-4">
            <div
              className="gundam-counter"
              style={{ color: 'var(--text-muted)' }}
            >
              <span
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                }}
              >
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span style={{ margin: '0 6px', opacity: 0.3 }}>/</span>
              <span>{String(gundamKits.length).padStart(2, '0')}</span>
            </div>
            <div className="gundam-progress-track">
              {gundamKits.map((_, index) => (
                <button
                  key={index}
                  onClick={() => onGoTo(index)}
                  className="gundam-progress-segment"
                  style={{
                    backgroundColor:
                      index === currentIndex
                        ? kit.accentColor
                        : index < currentIndex
                          ? `${kit.accentColor}40`
                          : 'var(--card-border)',
                    transform:
                      index === currentIndex ? 'scaleY(1.5)' : 'scaleY(1)',
                  }}
                  aria-label={`Go to Gundam ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
