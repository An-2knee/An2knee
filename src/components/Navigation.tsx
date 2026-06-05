import { Menu, Moon, Sun, X } from 'lucide-react';

import { navItems } from '../constants/navigation';
import { socialLinks } from '../data/socialLinks';
import type { Page, Theme } from '../types';

interface NavigationProps {
  currentPage: Page;
  isLoaded: boolean;
  isNavOpen: boolean;
  theme: Theme;
  onNavigate: (page: Page) => void;
  onToggleMenu: () => void;
  onToggleTheme: () => void;
}

export function Navigation({
  currentPage,
  isLoaded,
  isNavOpen,
  theme,
  onNavigate,
  onToggleMenu,
  onToggleTheme,
}: NavigationProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => onNavigate('hero')}
            className="font-bold text-xl tracking-tight transition-colors"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              opacity: isLoaded ? 1 : 0,
              animation: isLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none',
            }}
          >
            An2knee
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="nav-link flex items-center gap-2 py-2 text-sm font-medium transition-colors"
                  style={{
                    color:
                      currentPage === item.id
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    opacity: isLoaded ? 1 : 0,
                    animation: isLoaded
                      ? `fadeIn 0.5s ease-out ${0.1 + index * 0.1}s forwards`
                      : 'none',
                  }}
                >
                  <Icon size={16} />
                  {item.label}
                </button>
              );
            })}

            <button
              onClick={onToggleTheme}
              className="ml-4 p-2 rounded-full transition-all hover:scale-110"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
                opacity: isLoaded ? 1 : 0,
                animation: isLoaded
                  ? 'fadeIn 0.5s ease-out 0.4s forwards'
                  : 'none',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full transition-all"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)',
              }}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={onToggleMenu}
              className="p-2"
              style={{ color: 'var(--text-primary)' }}
              aria-label="Toggle navigation menu"
            >
              {isNavOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isNavOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: 'var(--card-border)' }}
          >
            <button
              onClick={() => onNavigate('hero')}
              className="flex items-center gap-3 w-full py-3 px-2 text-left"
              style={{
                color:
                  currentPage === 'hero'
                    ? 'var(--accent)'
                    : 'var(--text-secondary)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Home
            </button>

            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="flex items-center gap-3 w-full py-3 px-2 text-left"
                  style={{
                    color:
                      currentPage === item.id
                        ? 'var(--accent)'
                        : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}

            <div
              className="mt-4 pt-4 border-t"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <p
                className="px-2 mb-3 text-xs uppercase tracking-wider"
                style={{
                  color: 'var(--text-muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Contact Me
              </p>
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const isExternal = !link.url.startsWith('mailto:');

                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 w-full py-3 px-2 text-left transition-colors"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    <Icon size={18} style={{ color: link.color }} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
