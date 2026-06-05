import { socialLinks } from '../data/socialLinks';

export function ContactFooter() {
  return (
    <footer
      className="py-12 px-4 border-t relative z-10"
      style={{
        borderColor: 'var(--card-border)',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            Let's Connect
          </h3>
          <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            const isExternal = !link.url.startsWith('mailto:');

            return (
              <a
                key={link.id}
                href={link.url}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="card-hover flex items-center gap-3 px-5 py-3 rounded-full transition-all"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                }}
              >
                <Icon size={20} style={{ color: link.color }} />
                <span className="text-sm font-medium">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            An2knee &copy; 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
