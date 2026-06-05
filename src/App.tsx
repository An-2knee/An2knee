import { useCallback, useState } from 'react';

import { ContactFooter } from './components/ContactFooter';
import { DesignWorkModal } from './components/DesignWorkModal';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { gundamKits } from './data/gundamKits';
import { useGundamCarousel } from './hooks/useGundamCarousel';
import { useLoadingState } from './hooks/useLoadingState';
import { useTheme } from './hooks/useTheme';
import { DesignPage } from './pages/DesignPage';
import { GundamPage } from './pages/GundamPage';
import { HeroPage } from './pages/HeroPage';
import { ProgrammingPage } from './pages/ProgrammingPage';
import type { DesignWork, Page } from './types';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isLoaded, showLoader } = useLoadingState();
  const [currentPage, setCurrentPage] = useState<Page>('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<DesignWork | null>(null);
  const gundamCarousel = useGundamCarousel(
    currentPage === 'gundam',
    gundamKits.length,
  );

  const navigateTo = useCallback(
    (page: Page) => {
      if (isTransitioning || page === currentPage) {
        return;
      }

      setIsTransitioning(true);

      window.setTimeout(() => {
        setCurrentPage(page);
        setIsNavOpen(false);

        window.setTimeout(() => {
          setIsTransitioning(false);
        }, 600);
      }, 400);
    },
    [currentPage, isTransitioning],
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'programming':
        return <ProgrammingPage onNavigate={navigateTo} />;
      case 'design':
        return (
          <DesignPage
            onNavigate={navigateTo}
            onSelectWork={setSelectedWork}
          />
        );
      case 'gundam':
        return (
          <GundamPage
            currentIndex={gundamCarousel.currentIndex}
            onGoTo={gundamCarousel.goTo}
            onNavigate={navigateTo}
            onNext={gundamCarousel.next}
            onPrevious={gundamCarousel.previous}
          />
        );
      case 'hero':
      default:
        return <HeroPage onNavigate={navigateTo} />;
    }
  };

  return (
    <>
      {showLoader && <LoadingScreen isLoaded={isLoaded} />}

      <div
        className={`min-h-screen relative transition-all duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundColor:
            currentPage === 'design'
              ? 'var(--bg-secondary)'
              : 'var(--bg-primary)',
        }}
      >
        <div className="bg-mesh" />

        <Navigation
          currentPage={currentPage}
          isLoaded={isLoaded}
          isNavOpen={isNavOpen}
          theme={theme}
          onNavigate={navigateTo}
          onToggleMenu={() => setIsNavOpen((isOpen) => !isOpen)}
          onToggleTheme={toggleTheme}
        />

        <div
          className={`relative transition-all duration-500 ${
            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
          }`}
          style={{
            transform: isTransitioning
              ? 'translateY(20px) scale(0.98)'
              : 'translateY(0) scale(1)',
          }}
        >
          {renderPage()}
        </div>

        {currentPage === 'hero' && <ContactFooter />}

        {selectedWork && (
          <DesignWorkModal
            work={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </div>
    </>
  );
}

export default App;
