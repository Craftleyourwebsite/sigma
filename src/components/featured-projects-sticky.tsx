"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

type FeaturedProject = {
  id: string;
  category: string;
  heading: string;
  title: string;
  description: string;
  highlightsIntro: string;
  highlights: string[];
  closing: string;
  image: string;
};

type FeaturedProjectsStickyProps = {
  projects: FeaturedProject[];
};

type StickyLayerProps = {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
};

function ArrowUpRightIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function ProjectCard({
  project,
  theme,
}: {
  project: FeaturedProject;
  theme: string;
}) {
  return (
    <div
      className={`rounded-[30px] border border-white/15 bg-gradient-to-br ${theme} p-4 shadow-[0_20px_48px_rgba(3,8,26,0.45)] sm:p-6 lg:min-h-[700px] lg:p-8`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-10">
        <div className="flex flex-col text-[#121525]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#575f87]">
            {project.heading}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-[1.05] tracking-[-0.02em] text-[#111322] sm:text-3xl lg:text-[2.1rem]">
            {project.title}
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-[#2b3152] sm:text-base">
            {project.description}
          </p>
          <p className="mt-6 text-sm font-semibold text-[#1a2140] sm:text-base">
            {project.highlightsIntro}
          </p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#2b3152] sm:text-base">
            {project.highlights.map((item) => (
              <li key={`${project.id}-${item}`} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4f46e5]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-[#2b3152] sm:text-base">{project.closing}</p>
          <a
            href="#"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#101320] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1d233b]"
          >
            Read More
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="relative min-h-[340px] overflow-hidden rounded-[22px] border border-white/40 bg-black/10 sm:min-h-[480px] lg:min-h-[620px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}

function StickyLayer({ index, total, progress, children }: StickyLayerProps) {
  const segment = 1 / total;
  const startAt = index * segment;
  const endAt = (index + 1) * segment;

  // Each card slides down to reveal the one under it
  const y = useTransform(
    progress,
    [startAt, endAt],
    index === total - 1 ? ["0%", "0%"] : ["0%", "100%"]
  );

  return (
    <motion.article
      className="absolute inset-0 will-change-transform"
      style={{
        y,
        zIndex: 30 + (total - index),
      }}
    >
      {children}
    </motion.article>
  );
}

export default function FeaturedProjectsSticky({ projects }: FeaturedProjectsStickyProps) {
  const stickyTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stickyTrackRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  const cardThemes = [
    "from-[#ece9ff] via-[#e5e1ff] to-[#dcd5ff]",
    "from-[#d9f0ff] via-[#cfebff] to-[#c6e5ff]",
    "from-[#ece2ff] via-[#e4d7ff] to-[#dacbff]",
  ];

  return (
    <section className="relative z-[5] bg-[#070810] py-16 text-white sm:py-24">
      <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
        <div className="max-w-5xl">
          <h2 className="mt-5 text-4xl font-semibold leading-[0.92] tracking-[-0.03em] text-white sm:text-6xl">
            Our Featured Projects
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/68 sm:text-lg">
            Sigma Group is delivering Technology with Real-World Impact.
          </p>
        </div>

        <div className="mt-10 hidden lg:block lg:mt-16">
          <div
            ref={stickyTrackRef}
            className="relative"
            // Shorter track height to remove the massive gap
            style={{ height: `calc(${projects.length * 80}vh + 100vh)` }}
          >
            {/* Using a local container with overflow-hidden for the reveal effect */}
            <div className="sticky top-28 h-[80vh] min-h-[720px] overflow-hidden rounded-[30px]">
              <div className="relative h-full">
                {projects.map((project, index) => (
                  <StickyLayer
                    key={`desktop-wrap-${project.id}`}
                    index={index}
                    total={projects.length}
                    progress={smoothProgress}
                  >
                    <ProjectCard project={project} theme={cardThemes[index % cardThemes.length]} />
                  </StickyLayer>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-6 lg:hidden">
          {projects.map((project, index) => (
            <article key={`mobile-${project.id}`}>
              <ProjectCard project={project} theme={cardThemes[index % cardThemes.length]} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
