import { useEffect, useState } from 'react';

const loadingDelayMs = 1200;
const fadeOutDelayMs = 700;

export function useLoadingState() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    let hideTimer: number | undefined;

    const loadTimer = window.setTimeout(() => {
      setIsLoaded(true);
      hideTimer = window.setTimeout(() => setShowLoader(false), fadeOutDelayMs);
    }, loadingDelayMs);

    return () => {
      window.clearTimeout(loadTimer);

      if (hideTimer !== undefined) {
        window.clearTimeout(hideTimer);
      }
    };
  }, []);

  return { isLoaded, showLoader };
}
