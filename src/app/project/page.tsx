"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

type ProjectContent = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string[];
  delivered: string[];
  highlights?: string[];
  useCases?: string[];
  sector?: string;
  projectType: string;
  background: string;
  textMode: "light" | "dark";
};

type IconProps = {
  className?: string;
};

function ArrowUpRightIcon({ className = "h-4 w-4" }: IconProps) {
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

const featuredProjects: ProjectContent[] = [
  {
    id: "sigma-health-hmis",
    title: "Sigma Health HMIS",
    subtitle: "Digital Health Systems at Scale",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    description: [
      "Sigma Health’s proprietary Health Management Information System (HMIS) is deployed across multiple clinics in Malawi, supporting secure patient data management and improved service delivery.",
    ],
    delivered: [
      "Centralized patient record management",
      "Cross-facility data sharing",
      "Laboratory and diagnostic machine integration",
      "Reduced manual data entry and errors",
      "Improved reporting and clinical decision support",
    ],
    sector: "Healthcare",
    projectType: "Platform Development & Deployment",
    background: "linear-gradient(145deg, #5f8ec8 0%, #4976af 45%, #365f93 100%)",
    textMode: "light",
  },
  {
    id: "dispatch-mobility",
    title: "Dispatch & Mobility Coordination Platform",
    subtitle: "Real-Time Operations and Field Coordination",
    image:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80",
    description: [
      "Sigma Group designed a modular dispatch and mobility coordination platform to support organizations managing vehicles, field teams, or time-sensitive services.",
      "Originally deployed in an emergency response context, the platform is built as a sector-agnostic technology adaptable to multiple operational models.",
    ],
    delivered: [
      "User mobile application",
      "Field operator / driver application",
      "Centralized dispatch and operations dashboard",
      "Advanced mapping and routing engine optimized for local conditions",
    ],
    highlights: [
      "Enhanced local landmark-based navigation",
      "Low bandwidth and low device resource dependency",
      "Fast route calculation and clear visual guidance",
      "Scalable, API-driven architecture",
    ],
    useCases: [
      "Emergency response and ambulance dispatch",
      "Logistics and delivery coordination",
      "Field service management",
      "NGO outreach and mobile services",
    ],
    projectType: "Platform Engineering & Applied Geospatial Technology",
    background: "linear-gradient(145deg, #1e2230 0%, #141824 46%, #0a0d16 100%)",
    textMode: "light",
  },
  {
    id: "lab-machine-integration",
    title: "Laboratory Machine Integration",
    subtitle: "Bridging Diagnostic Equipment and Digital Systems",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80",
    description: [
      "Sigma Group developed a reusable Laboratory Machine Integration Toolkit that enables automated transmission of diagnostic results into HMIS and other health information platforms.",
    ],
    delivered: [
      "Standardized machine-to-system integration",
      "Automated result capture",
      "Reduced data inconsistency and loss",
      "Faster turnaround time for diagnostics",
      "Reliable operation in low-resource settings",
    ],
    sector: "Healthcare",
    projectType: "Interoperability & Systems Integration",
    background: "linear-gradient(145deg, #ddd9ff 0%, #c6c0f4 44%, #a69cde 100%)",
    textMode: "dark",
  },
];

export default function ProjectPage() {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#0a0807] text-white">
      <section className="relative min-h-screen overflow-hidden md:h-screen">
        <div className="absolute inset-0 bg-[#070707]" />
        <div className={`${styles.ambient} absolute inset-0`} />
        <div className="absolute -left-20 top-28 h-56 w-56 rounded-full bg-[#ff9854]/16 blur-3xl" />
        <div className="absolute right-10 top-36 h-64 w-64 rounded-full bg-[#f8cfaa]/12 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1380px] flex-col px-4 pb-8 pt-6 sm:px-7 lg:px-12">
          <header
            className={`${styles.fadeUp} grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]`}
          >
            <Link href="/" className="flex items-center justify-self-center md:justify-self-start">
              <Image
                src="/sigmalogo.png"
                alt="Sigma Logo"
                width={108}
                height={139}
                className="h-16 w-auto"
                priority
              />
            </Link>

            <nav className="w-full md:w-auto md:justify-self-center">
              <ul className="mx-auto flex flex-wrap items-center justify-center gap-7 px-1 text-sm text-white/90">
                {menu.map((item) => {
                  const href =
                    item === "Home"
                      ? "/"
                      : item === "About Us"
                        ? "/aboutus"
                        : item === "Divisions"
                          ? "/division"
                          : item === "Projects"
                            ? "/project"
                            : item === "Case Studies"
                              ? "/case-studies"
                              : item === "Contacts"
                                ? "/contact"
                          : "#";
                  const isInternal = href.startsWith("/");

                  return (
                    <li key={item}>
                      {isInternal ? (
                        <Link
                          href={href}
                          className="relative pb-1 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform hover:after:scale-x-100"
                        >
                          {item}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="relative pb-1 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform hover:after:scale-x-100"
                        >
                          {item}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <a
              href="#support"
              className="justify-self-end rounded-full bg-white px-8 py-2.5 text-sm font-semibold text-[#8b5cf6] shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:bg-[#f5faff]"
            >
              Support
            </a>
          </header>

          <div className="mt-4 flex flex-1 items-center">
            <div
              className={`${styles.fadeUp} ${styles.delay1} flex w-full max-w-4xl flex-col items-start pt-8 text-left md:pt-12 lg:pt-16`}
            >
              <h1 className="text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[6.1rem]">
                Our Projects
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Sigma Group designs and delivers digital systems that operate reliably in complex,
                resource-constrained, and mission-critical environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d9d9d9] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-12">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#121212] sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#2a2a2a] sm:text-base">
              Our projects demonstrate practical innovation, strong governance, and measurable
              operational impact across sectors.
            </p>
          </div>

          <div className="grid items-start gap-3 md:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => {
              const isDarkText = project.textMode === "dark";
              const isExpanded = openProjectId === project.id;
              const leadDescription = project.description[0];
              const extraDescriptions = project.description.slice(1);
              const previewDelivered = project.delivered.slice(0, 2);
              const remainingDelivered = project.delivered.slice(2);

              return (
                <article
                  key={project.id}
                  className="relative self-start overflow-hidden rounded-[2px] border border-white/70 shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
                  style={{ background: project.background }}
                >
                  <div className="relative h-44 overflow-hidden sm:h-52">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent" />
                  </div>

                  <div
                    className={`absolute inset-x-0 bottom-0 top-40 sm:top-48 ${
                      isDarkText
                        ? "bg-gradient-to-b from-white/14 via-white/6 to-white/12"
                        : "bg-gradient-to-b from-black/8 via-black/16 to-black/62"
                    }`}
                  />

                  <div className="relative z-10 flex min-h-[390px] flex-col p-5 sm:p-6">
                    <div>
                      <h2
                        className={`text-3xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-4xl ${
                          isDarkText ? "text-[#111827]" : "text-white"
                        }`}
                      >
                        {project.title}
                      </h2>
                      <p
                        className={`mt-3 text-sm font-semibold uppercase tracking-[0.12em] sm:text-[13px] ${
                          isDarkText ? "text-black/72" : "text-white/88"
                        }`}
                      >
                        {project.subtitle}
                      </p>

                      <p
                        className={`mt-4 text-sm leading-relaxed sm:text-base ${
                          isDarkText ? "text-black/90" : "text-white/95"
                        }`}
                      >
                        {leadDescription}
                      </p>
                    </div>

                    <div className="mt-5">
                      <p
                        className={`text-sm font-semibold uppercase tracking-[0.1em] ${
                          isDarkText ? "text-black/78" : "text-white/90"
                        }`}
                      >
                        What We Delivered
                      </p>
                      <ul
                        className={`mt-3 space-y-2 text-sm leading-relaxed sm:text-base ${
                          isDarkText ? "text-black/88" : "text-white/90"
                        }`}
                      >
                        {previewDelivered.map((item) => (
                          <li key={`${project.id}-${item}`} className="flex items-start gap-2">
                            <span
                              className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                isDarkText ? "bg-black/70" : "bg-white/85"
                              }`}
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenProjectId((current) =>
                            current === project.id ? null : project.id,
                          )
                        }
                        className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                          isDarkText
                            ? "border border-black/85 bg-black text-white hover:bg-[#0b0b0b]"
                            : "border border-white/85 bg-white/94 text-black hover:bg-white"
                        }`}
                      >
                        {isExpanded ? "Show Less" : "Know More"}
                      </button>
                    </div>

                    {isExpanded ? (
                      <div
                        className={`mt-5 space-y-5 border-t pt-5 ${
                          isDarkText ? "border-black/25" : "border-white/30"
                        }`}
                      >
                        {extraDescriptions.map((paragraph) => (
                          <p
                            key={`${project.id}-${paragraph}`}
                            className={`text-sm leading-relaxed sm:text-base ${
                              isDarkText ? "text-black/90" : "text-white/95"
                            }`}
                          >
                            {paragraph}
                          </p>
                        ))}

                        {remainingDelivered.length > 0 ? (
                          <>
                            <p
                              className={`text-sm font-semibold uppercase tracking-[0.1em] ${
                                isDarkText ? "text-black/78" : "text-white/90"
                              }`}
                            >
                              More Deliverables
                            </p>
                            <ul
                              className={`space-y-2 text-sm leading-relaxed sm:text-base ${
                                isDarkText ? "text-black/88" : "text-white/90"
                              }`}
                            >
                              {remainingDelivered.map((item) => (
                                <li key={`${project.id}-more-${item}`} className="flex items-start gap-2">
                                  <span
                                    className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                      isDarkText ? "bg-black/70" : "bg-white/85"
                                    }`}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}

                        {project.highlights ? (
                          <>
                            <p
                              className={`text-sm font-semibold uppercase tracking-[0.1em] ${
                                isDarkText ? "text-black/78" : "text-white/90"
                              }`}
                            >
                              Key Technology Highlights
                            </p>
                            <ul
                              className={`space-y-2 text-sm leading-relaxed sm:text-base ${
                                isDarkText ? "text-black/88" : "text-white/90"
                              }`}
                            >
                              {project.highlights.map((item) => (
                                <li key={`${project.id}-highlight-${item}`} className="flex items-start gap-2">
                                  <span
                                    className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                      isDarkText ? "bg-black/70" : "bg-white/85"
                                    }`}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}

                        {project.useCases ? (
                          <>
                            <p
                              className={`text-sm font-semibold uppercase tracking-[0.1em] ${
                                isDarkText ? "text-black/78" : "text-white/90"
                              }`}
                            >
                              Applicable Use Cases
                            </p>
                            <ul
                              className={`space-y-2 text-sm leading-relaxed sm:text-base ${
                                isDarkText ? "text-black/88" : "text-white/90"
                              }`}
                            >
                              {project.useCases.map((item) => (
                                <li key={`${project.id}-use-case-${item}`} className="flex items-start gap-2">
                                  <span
                                    className={`mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full ${
                                      isDarkText ? "bg-black/70" : "bg-white/85"
                                    }`}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : null}

                        <div className="grid gap-4 sm:grid-cols-2">
                          {project.sector ? (
                            <div>
                              <p
                                className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                                  isDarkText ? "text-black/65" : "text-white/80"
                                }`}
                              >
                                Sector
                              </p>
                              <p
                                className={`mt-1 text-sm font-semibold sm:text-base ${
                                  isDarkText ? "text-black/90" : "text-white"
                                }`}
                              >
                                {project.sector}
                              </p>
                            </div>
                          ) : null}

                          <div>
                            <p
                              className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                                isDarkText ? "text-black/65" : "text-white/80"
                              }`}
                            >
                              Project Type
                            </p>
                            <p
                              className={`mt-1 text-sm font-semibold sm:text-base ${
                                isDarkText ? "text-black/90" : "text-white"
                              }`}
                            >
                              {project.projectType}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#d9d9d9] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="relative overflow-hidden rounded-[34px] border border-[#8ea3ff]/45 bg-gradient-to-br from-[#6069ff] via-[#505df2] to-[#4553dc] px-6 py-10 shadow-[0_24px_56px_rgba(33,40,122,0.5)] sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute inset-0 opacity-45">
              <div className="absolute -left-12 top-6 h-32 w-32 rounded-[24px] bg-white/14" />
              <div className="absolute left-1/3 -top-12 h-32 w-32 rounded-full border border-white/20" />
              <div className="absolute right-6 top-5 h-24 w-24 rounded-[18px] bg-white/10" />
              <div className="absolute bottom-0 left-1/2 h-32 w-44 -translate-x-1/2 rounded-t-full border border-white/14" />
            </div>

            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
              <h3 className="text-3xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
                Technology That Delivers Results
              </h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/88 sm:text-lg">
                From health systems to income-generating mobility, Sigma Group builds solutions that
                work in real environments.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-base font-semibold text-[#1c278c] shadow-[0_10px_24px_rgba(7,10,50,0.2)] transition hover:bg-[#ecf2ff]"
                >
                  Contact us
                  <ArrowUpRightIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/92 transition hover:text-white"
                >
                  know more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
