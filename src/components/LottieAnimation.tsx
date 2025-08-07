"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useIsMounted } from "@/lib/hooks";

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
  const isMounted = useIsMounted();

  return (
    <div className={className}>
      {isMounted && (
        <DotLottieReact
          src={src}
          loop={loop}
          autoplay={autoplay}
          speed={speed}
        />
      )}
    </div>
  );
}
