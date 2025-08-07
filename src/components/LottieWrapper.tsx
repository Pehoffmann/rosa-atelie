"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useState, useEffect } from "react";

interface LottieWrapperProps {
  src: string;
  width?: number;
  height?: number;
  loop?: boolean;
  autoplay?: boolean;
  speed?: number;
  segment?: [number, number];
  className?: string;
}

export function LottieWrapper({
  src,
  width = 256,
  height = 256,
  loop = true,
  autoplay = true,
  speed = 1,
  segment,
  className = "",
}: LottieWrapperProps) {
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Reset states when src changes
    setHasError(false);
    setRetryCount(0);
    setIsLoaded(false);
  }, [src]);

  useEffect(() => {
    // Load animation with a small delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [src]);

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);

    // Retry once with a longer delay
    if (retryCount < 1) {
      setTimeout(() => {
        setRetryCount((prev) => prev + 1);
        setHasError(false);
        setIsLoaded(true);
      }, 1500);
    }
  };

  // Don't render anything if there's an error and no more retries
  if (hasError && retryCount >= 1) {
    return null;
  }

  // Don't render anything while loading
  if (!isLoaded) {
    return null;
  }

  return (
    <div className={className} style={{ width, height }}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        speed={speed}
        segment={segment}
        onError={handleError}
        style={{ width: "100%", height: "100%" }}
        key={`${src}-${retryCount}`}
      />
    </div>
  );
}
