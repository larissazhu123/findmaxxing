import { useState, useEffect } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
  delay?: number;
}

export function AnimatedCounter({
  end,
  duration = 2,
  suffix = "",
  className = "",
  delay = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const startAnimation = () => {
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

        // floor during animation, snap to exact end at the end
        if (progress < 1) {
          setCount(Math.floor(progress * end));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      // use window.setTimeout to force browser return type (number) if you prefer
      timeoutId = setTimeout(startAnimation, delay * 1000);
    } else {
      startAnimation();
    }

    return () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [end, duration, delay]);

  return <span className={className}>{count}{suffix}</span>;
}
