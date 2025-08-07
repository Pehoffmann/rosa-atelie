"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LottieAnimationProps {
  src: string;
  speed?: number;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
}

export function LottieAnimation({
  src,
  speed = 1,
  loop = true,
  autoplay = true,
  className = "",
}: LottieAnimationProps) {
  return (
    <div className={className}>
      <DotLottieReact src={src} loop={loop} autoplay={autoplay} speed={speed} />
    </div>
  );
}
