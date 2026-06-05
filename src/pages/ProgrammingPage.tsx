import { ChevronRight, Code2, ExternalLink } from 'lucide-react';

import { projects } from '../data/projects';
import type { Page } from '../types';

interface ProgrammingPageProps {
  onNavigate: (page: Page) => void;
}

export function ProgrammingPage({ onNavigate }: ProgrammingPageProps) {
  return (
    <div className="min-h-screen py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 entrance-fade">
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
            className="terminal-decoration inline-block text-sm mb-4"
            style={{
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-body)',
            }}
          >
            // Featured Projects
          </div>
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 entrance-fade entrance-delay-1"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Programming
          </h1>
          <p
            className="text-lg entrance-fade entrance-delay-2"
            style={{ color: 'var(--text-secondary)', maxWidth: '900px' }}
          >
            From systems programming to full-stack applications, here are some
            projects that challenged me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-hover rounded-xl p-6"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${project.color}20` }}
              >
                <Code2 size={24} style={{ color: project.color }} />
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {project.name}
              </h3>

              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--code-bg)',
                      color: 'var(--code-text)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                className="flex items-center gap-2 text-sm font-medium transition-colors hover:underline"
                style={{ color: 'var(--accent)' }}
              >
                View Project <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
