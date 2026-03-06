"use client";

import AnimatedText from "@/components/animated-text";
import { useEffect, useState } from "react";

type LoopingWordProps = {
  words?: string[];
  intervalMs?: number;
  className?: string;
};

const DEFAULT_WORDS = ["Growth", "Development"];

export default function LoopingWord({
  words = DEFAULT_WORDS,
  intervalMs = 2200,
  className,
}: LoopingWordProps) {
  const safeWords = words.length > 0 ? words : DEFAULT_WORDS;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeWords.length <= 1) return;

    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % safeWords.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, safeWords.length]);

  const activeWord = safeWords[index % safeWords.length];
  const activeWordLower = activeWord.toLowerCase();
  const colorClass =
    activeWordLower === "growth"
      ? "text-violet-400"
      : activeWordLower === "development"
        ? "text-sky-400"
        : "text-white";

  return (
    <span className={`relative inline-flex min-w-[13ch] ${className ?? ""}`}>
      <AnimatedText
        text={activeWord}
        animationType="letters"
        duration={0.48}
        staggerDelay={0.035}
        initialY={14}
        className={`inline-block ${colorClass}`}
      />
    </span>
  );
}
