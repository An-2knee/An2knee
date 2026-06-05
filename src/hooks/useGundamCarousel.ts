import { useCallback, useEffect, useRef, useState } from 'react';

const autoSlideIntervalMs = 5000;

export function useGundamCarousel(isActive: boolean, totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (totalItems <= 0) {
      return;
    }

    stopTimer();
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((current) => (current + 1) % totalItems);
    }, autoSlideIntervalMs);
  }, [stopTimer, totalItems]);

  const restartTimer = useCallback(() => {
    if (isActive) {
      startTimer();
    }
  }, [isActive, startTimer]);

  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(0);
      stopTimer();
      return;
    }

    startTimer();
    return stopTimer;
  }, [isActive, startTimer, stopTimer]);

  const next = useCallback(() => {
    setCurrentIndex((current) => (current + 1) % totalItems);
    restartTimer();
  }, [restartTimer, totalItems]);

  const previous = useCallback(() => {
    setCurrentIndex((current) => (current - 1 + totalItems) % totalItems);
    restartTimer();
  }, [restartTimer, totalItems]);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      restartTimer();
    },
    [restartTimer],
  );

  return {
    currentIndex,
    goTo,
    next,
    previous,
  };
}
