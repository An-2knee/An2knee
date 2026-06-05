interface LoadingScreenProps {
  isLoaded: boolean;
}

export function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
    <div className={`loading-screen ${isLoaded ? 'fade-out' : ''}`}>
      <div className="loading-logo">
        An2<span>knee</span>
      </div>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}
