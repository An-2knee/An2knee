import { useState, useEffect, useCallback, useRef } from 'react';
import { Sun, Moon, Menu, X, ExternalLink, Code2, Palette, Sparkles, ChevronRight, ChevronLeft, Mail, Facebook, Linkedin, Github, Instagram, Heart, MessageCircle, Share2 } from 'lucide-react';

type Page = 'hero' | 'programming' | 'design' | 'gundam' | 'contact';

interface SocialLink {
  id: string;
  label: string;
  url: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
}

// PLACEHOLDER: Replace these with your actual social media URLs and email
const socialLinks: SocialLink[] = [
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:jananthonyalejo@gmail.com',
    icon: Mail,
    color: '#ea4335'
  },
  {
    id: 'facebook',
    label: 'Facebook',
    url: 'https://www.facebook.com/jan.an2knee',
    icon: Facebook,
    color: '#1877f2'
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jan-anthony-alejo-2a117936a/',
    icon: Linkedin,
    color: '#0a66c2'
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/An-2knee',
    icon: Github,
    color: '#333'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: 'https://www.instagram.com/jan2knee_/',
    icon: Instagram,
    color: '#e4405f'
  }
];

interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  color: string;
}

interface DesignWork {
  id: number;
  title: string;
  type: string;
  year: string;
  color: string;
  description: string;
}

interface GundamKit {
  id: number;
  designation: string;
  name: string;
  grade: string;
  scale: string;
  series: string;
  description: string;
  accentColor: string;
  status: 'Completed' | 'WIP';
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Neural Style Transfer Engine',
    description: 'Real-time artistic style transfer using deep neural networks. Converts photos into artwork in under 2 seconds.',
    tags: ['Python', 'TensorFlow', 'CUDA'],
    color: '#3b82f6'
  },
  {
    id: 2,
    name: 'Distributed Task Scheduler',
    description: 'Fault-tolerant distributed system for scheduling and executing millions of tasks across node clusters.',
    tags: ['Go', 'Redis', 'Docker'],
    color: '#10b981'
  },
  {
    id: 3,
    name: '3D Visualization Dashboard',
    description: 'Interactive WebGL-powered dashboard for visualizing complex multi-dimensional datasets.',
    tags: ['React', 'Three.js', 'WebGL'],
    color: '#f59e0b'
  },
  {
    id: 4,
    name: 'Smart Contract Auditor',
    description: 'Automated vulnerability scanner for Ethereum smart contracts with pattern-based threat detection.',
    tags: ['Solidity', 'Rust', 'ML'],
    color: '#8b5cf6'
  },
  {
    id: 5,
    name: 'Real-time Collaboration Platform',
    description: 'Multi-user document editing with CRDT-based conflict resolution and presence indicators.',
    tags: ['TypeScript', 'WebSocket', 'Y.js'],
    color: '#4f46e5'
  },
  {
    id: 6,
    name: 'Quantum Circuit Simulator',
    description: 'Browser-based quantum computing simulator with gate visualization and state tracking.',
    tags: ['JavaScript', 'Qiskit', 'WebGL'],
    color: '#06b6d4'
  }
];

const designWorks: DesignWork[] = [
  {
    id: 1,
    title: 'Meridian Brand Identity',
    type: 'Branding',
    year: '2024',
    color: '#4f46e5',
    description: 'Complete visual identity system for a fintech startup, including logo, typography, and comprehensive brand guidelines.'
  },
  {
    id: 2,
    title: 'Cosmos App Interface',
    type: 'UI/UX',
    year: '2024',
    color: '#4ecdc4',
    description: 'Mobile-first design for a space exploration educational app with immersive 3D elements and gamification.'
  },
  {
    id: 3,
    title: 'Nomadic Typeface',
    type: 'Typography',
    year: '2023',
    color: '#ffe66d',
    description: 'Custom display typeface inspired by nomadic symbols, featuring 400+ glyphs and multiple weights.'
  },
  {
    id: 4,
    title: 'Vertex Conference Posters',
    type: 'Print',
    year: '2024',
    color: '#a855f7',
    description: 'Series of 12 posters for an annual design conference, exploring geometric abstraction and kinetic typography.'
  },
  {
    id: 5,
    title: 'Lumina Product Suite',
    type: 'Packaging',
    year: '2023',
    color: '#f97316',
    description: 'Premium packaging system for a sustainable skincare brand with minimalist aesthetics and embossed details.'
  },
  {
    id: 6,
    title: 'Data Dreams Exhibition',
    type: 'Installation',
    year: '2024',
    color: '#22c55e',
    description: 'Interactive data visualization installation converting real-time city data into generative abstract art.'
  },
  {
    id: 7,
    title: 'Aether Motion Graphics',
    type: 'Animation',
    year: '2023',
    color: '#3b82f6',
    description: '60-second animated brand film featuring fluid simulations and particle systems for a biotech company.'
  },
  {
    id: 8,
    title: 'Stratum Editorial Layout',
    type: 'Editorial',
    year: '2024',
    color: '#4f46e5',
    description: 'Magazine layout design for a quarterly architecture publication, featuring custom grid systems and infographics.'
  }
];

const gundamKits: GundamKit[] = [
  {
    id: 1,
    designation: 'RX-0',
    name: 'Unicorn Gundam',
    grade: 'MGEX',
    scale: '1/100',
    series: 'Mobile Suit Gundam Unicorn',
    description: 'Equipped with the revolutionary NT-D System, the Unicorn transforms between Unicorn and Destroy modes. Its psychoframe glows crimson when the pilot\'s psychic potential awakens.',
    accentColor: '#ff4d6d',
    status: 'Completed',
    color: '#f5f5f5'
  },
  {
    id: 2,
    designation: 'MSN-04',
    name: 'Sazabi',
    grade: 'RG',
    scale: '1/144',
    series: 'Char\'s Counterattack',
    description: 'Char Aznable\'s ultimate mobile suit — a towering Newtype-use machine armed with funnels, mega particle cannons, and a presence that commands the battlefield.',
    accentColor: '#e63946',
    status: 'Completed',
    color: '#c0c0c0'
  },
  {
    id: 3,
    designation: 'RX-78-2',
    name: 'Gundam',
    grade: 'RG',
    scale: '1/144',
    series: 'Mobile Suit Gundam',
    description: 'The original White Devil. The RX-78-2 set the standard for all mobile suits that followed. Amuro Ray\'s legendary machine that turned the tide of the One Year War.',
    accentColor: '#3a86ff',
    status: 'Completed',
    color: '#ffffff'
  },
  {
    id: 4,
    designation: 'MD-0064',
    name: 'Schwarzette',
    grade: 'HG',
    scale: '1/144',
    series: 'The Witch from Mercury',
    description: 'A sinister yet elegant mobile suit developed by Jeturk Heavy Machinery, featuring the versatile Guardian multi-purpose offensive and defensive system.',
    accentColor: '#e63946',
    status: 'Completed',
    color: '#2b2b2b'
  },
  {
    id: 5,
    designation: 'GN-001REIV',
    name: 'Exia Repair IV',
    grade: 'RG',
    scale: '1/144',
    series: 'Gundam 00',
    description: 'Piloted by Graham Aker, the Exia Repair IV features a bespoke asymmetrical design and an arsenal of new GN blades optimized for its left-handed pilot.',
    accentColor: '#00d0ff',
    status: 'Completed',
    color: '#e8e8e8'
  },
  {
    id: 6,
    designation: 'SNAA',
    name: 'Tristan',
    grade: 'Third Party',
    scale: '1/144',
    series: 'Round Table Knights',
    description: 'A sharp and highly detailed third-party model kit boasting incredible articulation, aggressive knight-like styling, and a massive arsenal of weapons.',
    accentColor: '#4361ee',
    status: 'Completed',
    color: '#d0d0d0'
  },
  {
    id: 7,
    designation: 'SNAA',
    name: 'Lamorak',
    grade: 'Third Party',
    scale: '1/144',
    series: 'Round Table Knights',
    description: 'Another stunning release from SNAA, featuring striking aesthetics with heavy armor and intricate mechanical details that rival mainstream master grades.',
    accentColor: '#e01e37',
    status: 'Completed',
    color: '#eeeeee'
  },
  {
    id: 8,
    designation: 'XXXG-00W0',
    name: 'Wing Zero EW',
    grade: 'MGSD',
    scale: 'SD',
    series: 'Gundam Wing: Endless Waltz',
    description: 'Heero Yuy\'s angelic war machine in a unique super-deformed proportion with master-grade details. Features spectacular wing articulation and the Twin Buster Rifle.',
    accentColor: '#48cae4',
    status: 'Completed',
    color: '#e2e2e2'
  },
  {
    id: 9,
    designation: 'MNP-XH02',
    name: 'Cao Ren',
    grade: 'Third Party',
    scale: '1/72',
    series: 'Motor Nuclear',
    description: 'An awe-inspiring, dragon-inspired mecha with imposing spiky armor and a metallic finish. Comes with an incredible draconic companion and weapon system.',
    accentColor: '#d4af37',
    status: 'Completed',
    color: '#1a1a1a'
  },
  {
    id: 10,
    designation: 'MNP-XH04',
    name: 'Nezha',
    grade: 'Third Party',
    scale: '1/72',
    series: 'Motor Nuclear',
    description: 'A deity-like mecha inspired by Chinese mythology, featuring flaming wheel accessories, multiple arms, and a spear, presented in stunning metallic red and gold.',
    accentColor: '#ff003c',
    status: 'Completed',
    color: '#f02d3a'
  }
];

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [currentPage, setCurrentPage] = useState<Page>('hero');
  const [previousPage, setPreviousPage] = useState<Page | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [currentGundamIndex, setCurrentGundamIndex] = useState(0);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
    const minLoadTime = new Promise<void>((resolve) => setTimeout(resolve, 1200));
    minLoadTime.then(() => {
      setIsLoaded(true);
      setTimeout(() => setShowLoader(false), 700);
    });
  }, []);

  // Auto-slide timer for Gundam page
  useEffect(() => {
    if (currentPage === 'gundam') {
      // Clear any existing timer
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }

      // Start new timer - auto-advance every 5 seconds
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentGundamIndex((prev) => (prev + 1) % gundamKits.length);
      }, 5000);

      return () => {
        if (autoSlideTimerRef.current) {
          clearInterval(autoSlideTimerRef.current);
        }
      };
    } else {
      // Reset index when leaving Gundam page
      setCurrentGundamIndex(0);
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    }
  }, [currentPage]);

  const nextGundam = useCallback(() => {
    setCurrentGundamIndex((prev) => (prev + 1) % gundamKits.length);
    // Reset timer when manually navigating
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentGundamIndex((prev) => (prev + 1) % gundamKits.length);
      }, 5000);
    }
  }, []);

  const prevGundam = useCallback(() => {
    setCurrentGundamIndex((prev) => (prev - 1 + gundamKits.length) % gundamKits.length);
    // Reset timer when manually navigating
    if (autoSlideTimerRef.current) {
      clearInterval(autoSlideTimerRef.current);
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentGundamIndex((prev) => (prev + 1) % gundamKits.length);
      }, 5000);
    }
  }, []);

  const navigateTo = useCallback((page: Page) => {
    if (isTransitioning || page === currentPage) return;

    setIsTransitioning(true);
    setPreviousPage(currentPage);

    setTimeout(() => {
      setCurrentPage(page);
      setIsNavOpen(false);

      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousPage(null);
      }, 600);
    }, 400);
  }, [currentPage, isTransitioning]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const navItems = [
    { id: 'programming' as Page, label: 'Programming', icon: Code2 },
    { id: 'design' as Page, label: 'Graphic Design', icon: Palette },
    { id: 'gundam' as Page, label: 'Gundam Works', icon: Sparkles }
  ];

  const ContactFooter = () => (
    <footer
      className="py-12 px-4 border-t relative z-10"
      style={{ borderColor: 'var(--card-border)', backgroundColor: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3
            className="text-2xl font-bold mb-2"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Let's Connect
          </h3>
          <p
            className="text-sm mb-6"
            style={{ color: 'var(--text-muted)' }}
          >
            Feel free to reach out through any of these channels
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover flex items-center gap-3 px-5 py-3 rounded-full transition-all"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                color: 'var(--text-primary)'
              }}
            >
              <link.icon size={20} style={{ color: link.color }} />
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p
            className="text-xs"
            style={{ color: 'var(--text-muted)' }}
          >
            An2knee © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );

  const HeroPage = () => (
    <div className="min-h-screen flex items-center justify-center px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 entrance-fade tracking-tight leading-tight"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
        >
          Pixel
          <span className="gradient-text block">Craftsman</span>
        </h1>

        <p
          className="text-xl sm:text-2xl mb-8 entrance-fade entrance-delay-1 max-w-2xl mx-auto"
          style={{
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-body)',
            fontWeight: 300
          }}
        >
          Code. Design. Build.
          <span className="block mt-2 text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            Crafting digital experiences from algorithms to aesthetics
          </span>
        </p>

        <div className="flex flex-col items-center gap-4 entrance-fade entrance-delay-2">
          <p
            className="text-sm uppercase tracking-widest mb-2"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            Explore My Works
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className="group flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all hover:scale-105 entrance-fade"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  animationDelay: `${0.3 + index * 0.1}s`
                }}
              >
                <item.icon size={20} style={{ color: 'var(--accent)' }} />
                <span>{item.label}</span>
                <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent)' }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ProgrammingPage = () => (
    <div className="min-h-screen py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 entrance-fade">
          <button
            onClick={() => navigateTo('hero')}
            className="flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            <ChevronRight size={14} className="rotate-180" />
            Back to Home
          </button>
          <div
            className="terminal-decoration inline-block text-sm mb-4"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            // Featured Projects
          </div>
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 entrance-fade entrance-delay-1"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Programming
          </h1>
          <p
            className="text-lg entrance-fade entrance-delay-2"
            style={{ color: 'var(--text-secondary)', maxWidth: '900px' }}
          >
            From systems programming to full-stack applications, here are some projects that challenged me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children mt-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="card-hover rounded-xl p-6"
              style={{
                backgroundColor: 'var(--card-bg)',
                border: '1px solid var(--card-border)'
              }}
            >
              <div
                className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                style={{ backgroundColor: project.color + '20' }}
              >
                <Code2 size={24} style={{ color: project.color }} />
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {project.name}
              </h3>

              <p
                className="text-sm mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tech-tag px-2 py-1 rounded"
                    style={{
                      backgroundColor: 'var(--code-bg)',
                      color: 'var(--code-text)'
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

  const DesignPage = () => (
    <div className="min-h-screen py-24 px-4 relative z-10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="max-w-full mx-auto">
        <div className="mb-12 entrance-fade px-4 md:px-8 lg:px-12">
          <button
            onClick={() => navigateTo('hero')}
            className="flex items-center gap-2 text-sm mb-6 transition-colors"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            <ChevronRight size={14} className="rotate-180" />
            Back to Home
          </button>
          <div
            className="bracket-left bracket-right inline-block text-sm mb-4"
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
          >
            Creative Works
          </div>
          <h1
            className="text-5xl sm:text-6xl font-extrabold mb-4 entrance-fade entrance-delay-1"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
          >
            Graphic Design
          </h1>
          <p
            className="text-lg entrance-fade entrance-delay-2"
            style={{ color: 'var(--text-secondary)', maxWidth: '700px' }}
          >
            Visual storytelling through branding, typography, and digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-4 stagger-children mt-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
          {designWorks.map((work) => (
            <button
              key={work.id}
              onClick={() => setSelectedWork(work)}
              className="relative aspect-square overflow-hidden group md:rounded-xl cursor-pointer"
            >
              {/* Main Background replacing image */}
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundColor: work.color }}
              />
              
              {/* Subtle inner shadow/gradient */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{ background: 'linear-gradient(to bottom right, rgba(255,255,255,0.4), rgba(0,0,0,0.4))' }}
              />

              {/* Hover Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
              >
                <Heart className="text-white mb-3 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" size={28} />
                <h3 className="text-white font-bold text-lg md:text-xl mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: 'var(--font-display)' }}>
                  {work.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const GundamPage = () => {
    const kit = gundamKits[currentGundamIndex];
    let gradeLabel = kit.grade;
    if (kit.grade === 'PG') gradeLabel = 'Perfect Grade';
    else if (kit.grade === 'MG') gradeLabel = 'Master Grade';
    else if (kit.grade === 'RG') gradeLabel = 'Real Grade';
    else if (kit.grade === 'HG') gradeLabel = 'High Grade';
    else if (kit.grade === 'MGEX') gradeLabel = 'Master Grade Extreme';
    else if (kit.series === 'SNAA') gradeLabel = 'Beyond Exquisite';
    else if (kit.series === 'Motor Nuclear') gradeLabel = 'Master Grade';

    const resetAutoSlide = () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
        autoSlideTimerRef.current = setInterval(() => {
          setCurrentGundamIndex((prev) => (prev + 1) % gundamKits.length);
        }, 5000);
      }
    };

    return (
      <div className="gundam-showcase" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Ambient background glow using the kit's accent color */}
        <div
          className="gundam-ambient-glow"
          style={{
            background: `radial-gradient(ellipse at 30% 50%, ${kit.accentColor}15 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, ${kit.accentColor}0a 0%, transparent 50%)`
          }}
        />

        {/* Large background index number */}
        <div
          className="gundam-bg-number"
          style={{ color: kit.accentColor }}
        >
          {String(currentGundamIndex + 1).padStart(2, '0')}
        </div>

        {/* Back Button */}
        <button
          onClick={() => navigateTo('hero')}
          className="gundam-back-btn entrance-fade"
          style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
        >
          <ChevronRight size={14} className="rotate-180" />
          Back to Home
        </button>

        {/* Navigation Arrows */}
        <button
          onClick={prevGundam}
          className="gundam-nav-arrow gundam-nav-left"
          style={{
            borderColor: `${kit.accentColor}40`,
            color: 'var(--text-primary)'
          }}
          aria-label="Previous Gundam"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextGundam}
          className="gundam-nav-arrow gundam-nav-right"
          style={{
            borderColor: `${kit.accentColor}40`,
            color: 'var(--text-primary)'
          }}
          aria-label="Next Gundam"
        >
          <ChevronRight size={28} />
        </button>

        {/* Main Content */}
        <div className="gundam-content">
          {/* Left: Image placeholder */}
          <div className="gundam-image-section">
            <div className="gundam-image-frame">
              <div
                className="gundam-image-placeholder"
                style={{
                  backgroundColor: kit.color,
                }}
              />
              {/* Status badge on the image */}
              <div
                className="gundam-status-badge"
                style={{
                  backgroundColor: kit.status === 'Completed' ? '#22c55e' : kit.accentColor,
                }}
              >
                {kit.status === 'Completed' ? '✓ BUILT' : '◐ WIP'}
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="gundam-info-section">
            {/* Series label */}
            <div className="gundam-series-label entrance-fade" style={{ color: kit.accentColor }}>
              {kit.series}
            </div>

            {/* Name: 2 lines — designation on top, name below */}
            <div className="gundam-name-block entrance-fade entrance-delay-1">
              <h1
                className="gundam-designation"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)' }}
              >
                {kit.designation}
              </h1>
              <h2
                className="gundam-name"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
              >
                {kit.name}
              </h2>
            </div>

            {/* Grade & Scale pills */}
            <div className="gundam-meta entrance-fade entrance-delay-2">
              <div
                className="gundam-grade-pill"
                style={{ backgroundColor: kit.accentColor, color: '#fff' }}
              >
                {gradeLabel}
              </div>
              <div className="gundam-scale-pill" style={{ borderColor: `${kit.accentColor}50`, color: 'var(--text-muted)' }}>
                Scale {kit.scale}
              </div>
            </div>

            {/* Description */}
            <p
              className="gundam-description entrance-fade entrance-delay-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              {kit.description}
            </p>

            {/* Bottom progress bar & counter */}
            <div className="gundam-progress-section entrance-fade entrance-delay-4">
              <div className="gundam-counter" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                  {String(currentGundamIndex + 1).padStart(2, '0')}
                </span>
                <span style={{ margin: '0 6px', opacity: 0.3 }}>/</span>
                <span>{String(gundamKits.length).padStart(2, '0')}</span>
              </div>
              <div className="gundam-progress-track">
                {gundamKits.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentGundamIndex(index);
                      resetAutoSlide();
                    }}
                    className="gundam-progress-segment"
                    style={{
                      backgroundColor: index === currentGundamIndex
                        ? kit.accentColor
                        : index < currentGundamIndex
                          ? `${kit.accentColor}40`
                          : 'var(--card-border)',
                      transform: index === currentGundamIndex ? 'scaleY(1.5)' : 'scaleY(1)'
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
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'hero':
        return <HeroPage />;
      case 'programming':
        return <ProgrammingPage />;
      case 'design':
        return <DesignPage />;
      case 'gundam':
        return <GundamPage />;
    }
  };

  return (
    <>
      {/* Loading Screen */}
      {showLoader && (
        <div className={`loading-screen ${isLoaded ? 'fade-out' : ''}`}>
          <div className="loading-logo">
            An2<span>knee</span>
          </div>
          <div className="loading-bar-track">
            <div className="loading-bar-fill" />
          </div>
        </div>
      )}

    <div
      className={`min-h-screen relative transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ backgroundColor: currentPage === 'design' ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}
    >
      <div className="bg-mesh" />

      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg"
        style={{
          backgroundColor: 'var(--nav-bg)',
          borderBottom: '1px solid var(--card-border)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigateTo('hero')}
              className="font-bold text-xl tracking-tight transition-colors"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--text-primary)',
                opacity: isLoaded ? 1 : 0,
                animation: isLoaded ? 'fadeIn 0.5s ease-out forwards' : 'none'
              }}
            >
              An2knee
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="nav-link flex items-center gap-2 py-2 text-sm font-medium transition-colors"
                  style={{
                    color: currentPage === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)',
                    opacity: isLoaded ? 1 : 0,
                    animation: isLoaded ? `fadeIn 0.5s ease-out ${0.1 + index * 0.1}s forwards` : 'none'
                  }}
                >
                  <item.icon size={16} />
                  {item.label}
                </button>
              ))}

              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full transition-all hover:scale-110"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  opacity: isLoaded ? 1 : 0,
                  animation: isLoaded ? 'fadeIn 0.5s ease-out 0.4s forwards' : 'none'
                }}
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)'
                }}
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                onClick={() => setIsNavOpen(!isNavOpen)}
                className="p-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {isNavOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isNavOpen && (
            <div
              className="md:hidden py-4 border-t"
              style={{ borderColor: 'var(--card-border)' }}
            >
              <button
                onClick={() => navigateTo('hero')}
                className="flex items-center gap-3 w-full py-3 px-2 text-left"
                style={{
                  color: currentPage === 'hero' ? 'var(--accent)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-body)'
                }}
              >
                Home
              </button>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => navigateTo(item.id)}
                  className="flex items-center gap-3 w-full py-3 px-2 text-left"
                  style={{
                    color: currentPage === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}

              {/* Mobile Contact Section */}
              <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--card-border)' }}>
                <p
                  className="px-2 mb-3 text-xs uppercase tracking-wider"
                  style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-body)' }}
                >
                  Contact Me
                </p>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full py-3 px-2 text-left transition-colors"
                    style={{
                      color: 'var(--text-secondary)',
                      fontFamily: 'var(--font-body)'
                    }}
                  >
                    <link.icon size={18} style={{ color: link.color }} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content with Transition */}
      <div
        className={`relative transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
        style={{
          transform: isTransitioning
            ? 'translateY(20px) scale(0.98)'
            : 'translateY(0) scale(1)'
        }}
      >
        {renderPage()}
      </div>

      {/* Contact Footer - Only on Hero page */}
      {currentPage === 'hero' && <ContactFooter />}

      {/* Previous Page (for crossfade) */}
      {previousPage && isTransitioning && (
        <div
          className="absolute inset-0 transition-opacity duration-400 opacity-0 pointer-events-none"
          style={{
            opacity: 0,
            transform: 'translateY(-20px) scale(1.02)'
          }}
        />
      )}

      {/* Instagram-style Modal */}
      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4 modal-backdrop"
          onClick={() => setSelectedWork(null)}
        >
          {/* Close button top right (mobile mostly) */}
          <button
            onClick={() => setSelectedWork(null)}
            className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors md:hidden"
          >
            <X size={28} />
          </button>

          <div
            className="w-full h-full md:h-auto md:max-w-5xl md:w-full md:rounded-2xl overflow-hidden md:max-h-[85vh] flex flex-col md:flex-row shadow-2xl relative"
            style={{
              backgroundColor: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              animation: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image side - takes up more space */}
            <div
              className="w-full md:w-3/5 h-[50vh] md:h-auto flex items-center justify-center flex-shrink-0 relative"
              style={{ backgroundColor: selectedWork.color }}
            >
              {/* Subtle inner gradient to give the flat color some depth */}
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)' }}
              />
            </div>

            {/* Details side */}
            <div className="w-full md:w-2/5 flex flex-col h-[50vh] md:h-auto bg-[var(--card-bg)] p-6 md:p-8 relative">
              {/* Close button for desktop */}
              <button
                onClick={() => setSelectedWork(null)}
                className="hidden md:block absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                style={{ color: 'var(--text-primary)' }}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col h-full justify-center mt-4 md:mt-0">
                <div className="text-xs mb-3 uppercase tracking-wider font-semibold" style={{ color: 'var(--text-muted)' }}>
                  {selectedWork.type}
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-primary)' }}
                >
                  {selectedWork.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {selectedWork.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
