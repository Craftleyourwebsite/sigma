import LoopingWord from "@/components/looping-word";
import FAQAccordion from "@/components/faq-accordion";
import FeaturedProjectsSticky from "@/components/featured-projects-sticky";
import SiteFooter from "@/components/site-footer";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero-section.module.css";

type Division = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  tone: string;
};

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

export default function Home() {
  const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];
  const techLogos = [
    "OpenMRS",
    "OpenELIS",
    "CI/CD",
    "Docker",
    "Kubernetes",
    "GitHub Actions",
    "PostgreSQL",
    "Redis",
    "NGINX",
    "Terraform",
    "Prometheus",
    "Grafana",
  ];
  const scrollingTechLogos = [...techLogos, ...techLogos];
  const heroRailCards = [
    {
      id: "adapt",
      variant: "light" as const,
      title: "Built to perform.",
      subtitle: "Designed to adapt.",
      badge: "",
    },
    {
      id: "capital",
      variant: "teal" as const,
      title: "AI",
      subtitle: "decision-making, and automation.",
      badge: "",
    },
    {
      id: "software",
      variant: "violet" as const,
      title: "software solutions.",
      subtitle: "",
      badge: "",
    },
    {
      id: "support",
      variant: "outline" as const,
      title: "support in digital transformation",
      subtitle: "",
      badge: "",
    },
  ];
  const scrollingHeroRailCards = [...heroRailCards, ...heroRailCards, ...heroRailCards];
  const divisions: Division[] = [
    {
      id: "health",
      name: "SIGMA HEALTH",
      tagline: "Health Management",
      description:
        "Sigma Health is a specialized digital health division focused on the design, development, deployment, and support of Health Management Information Systems (HMIS) and health-sector software solutions.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      tone: "bg-[#f2f3f5]",
    },
    {
      id: "consult",
      name: "SIGMA CONSULT",
      tagline: "ICT Consulting",
      description:
        "Sigma Consult provides professional ICT consulting and technical delivery services to organizations seeking expert support in digital transformation and technology implementation.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
      tone: "bg-[#f6f7f8]",
    },
    {
      id: "ai",
      name: "SIGMA AI",
      tagline: "AI Services",
      description:
        "Initially established to enhance Sigma Health systems, the division now offers AI services to external organizations seeking to improve operational efficiency, decision-making, and automation.",
      image:
        "https://images.unsplash.com/photo-1677442135136-760c813a743d?auto=format&fit=crop&w=1200&q=80",
      tone: "bg-[#f3f4f6]",
    },
    {
      id: "ventures",
      name: "SIGMA VENTURES",
      tagline: "Innovation Arm",
      description:
        "Sigma Ventures is the innovation and investment arm of Sigma Group. It serves as a platform for all its experimental and high-impact ideas that align with Sigma Group's long-term goals.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
      tone: "bg-[#f7f8fa]",
    },
  ];
  const featuredProjects: FeaturedProject[] = [
    {
      id: "hmis",
      category: "Healthcare",
      heading: "Strengthening Healthcare Through Digital Systems",
      title: "Sigma Health HMIS",
      description:
        "Sigma Health’s proprietary HMIS is deployed in multiple clinics across Malawi.",
      highlightsIntro: "The platform enables:",
      highlights: [
        "Secure patient data management",
        "Cross-facility data sharing",
        "Automated laboratory result integration",
        "Reduced manual data entry and errors",
        "Improved clinical and operational decision-making",
      ],
      closing:
        "Sigma Health also provides laboratory equipment integration for facilities using existing HMIS platforms, reducing clinical risk and improving data integrity.",
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "lab-toolkit",
      category: "Diagnostics",
      heading: "Connecting Diagnostic Equipment to Digital Health Systems",
      title: "Laboratory Machine Integration Toolkit",
      description:
        "Sigma Group has developed a Laboratory Machine Integration Toolkit that enables healthcare facilities to connect diagnostic equipment directly to HMIS platforms.",
      highlightsIntro: "The toolkit:",
      highlights: [
        "Automates transmission of lab results into HMIS",
        "Eliminates manual data entry and transcription errors",
        "Reduces missing or inconsistent patient records",
        "Improves turnaround time and clinical accuracy",
        "Operates reliably in low-resource environments",
      ],
      closing:
        "The toolkit has been successfully deployed across large clinic networks with multiple facilities, significantly reducing operational risk and repeat testing.",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "dispatch",
      category: "Operations",
      heading: "A Flexible Technology Framework for Real-Time Operations",
      title: "Emergency Dispatch & Mobility Coordination Platform",
      description:
        "Sigma Group has developed a modular dispatch and mobility coordination platform designed to support organizations that manage vehicles, field teams, or time-critical services.",
      highlightsIntro: "The platform is built to be customized for diverse operational models, including:",
      highlights: [
        "Emergency and ambulance dispatch",
        "Logistics and delivery coordination",
        "Field service management",
        "Security and patrol operations",
        "NGO outreach and mobile service delivery",
      ],
      closing:
        "At the core of the platform is a customized mapping and routing engine optimized for local operating environments.",
      image:
        "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
    },
  ];
  const faqItems = [
    {
      question: "How does Sigma tailor technology strategy to our organization?",
      answer:
        "We begin with a discovery phase on your workflows, data, and priorities, then build a practical roadmap that combines consulting, product delivery, and measurable outcomes.",
    },
    {
      question: "Can Sigma integrate with our current systems and tools?",
      answer:
        "Yes. Our teams handle API integrations, secure data exchange, and migration planning so HMIS, operations, and reporting tools work together without disrupting daily operations.",
    },
    {
      question: "Which sectors can benefit from Sigma solutions?",
      answer:
        "Sigma supports healthcare providers, NGOs, field operations teams, and enterprises that need dependable digital systems for service delivery, coordination, and decision-making.",
    },
    {
      question: "How do you ensure reliability in low-resource environments?",
      answer:
        "We design for real conditions: resilient infrastructure, offline-friendly workflows where needed, and monitored deployments that stay stable even with limited connectivity.",
    },
    {
      question: "Do you provide support after go-live?",
      answer:
        "Absolutely. We provide training, documentation, maintenance, and iterative improvements so your teams can scale confidently after launch.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0807] text-white">
      <section className="relative min-h-screen overflow-hidden bg-black md:h-screen">
        <div className="absolute inset-0 bg-black" />

        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1380px] flex-col px-4 pb-8 pt-6 sm:px-7 lg:px-12">
          <header className={`${styles.fadeUp} grid grid-cols-1 items-center gap-4 md:grid-cols-[auto_1fr_auto]`}>
            <a href="#" className="flex items-center justify-self-center md:justify-self-start">
              <Image src="/sigmalogo.png" alt="Sigma Logo" width={108} height={139} className="h-16 w-auto" priority />
            </a>

            <nav className="w-full md:w-auto md:justify-self-center">
              <ul className="mx-auto flex flex-wrap items-center justify-center gap-7 px-1 text-sm text-white/90">
                {menu.map((item) => (
                  <li key={item}>
                    {item === "Divisions" ||
                      item === "About Us" ||
                      item === "Projects" ||
                      item === "Case Studies" ||
                      item === "Contacts" ? (
                      <Link
                        href={
                          item === "Divisions"
                            ? "/division"
                            : item === "About Us"
                              ? "/aboutus"
                              : item === "Projects"
                                ? "/project"
                                : item === "Case Studies"
                                  ? "/case-studies"
                                  : "/contact"
                        }
                        className="relative pb-1 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform hover:after:scale-x-100"
                      >
                        {item}
                      </Link>
                    ) : (
                      <a
                        href="#"
                        className="relative pb-1 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-white/80 after:transition-transform hover:after:scale-x-100"
                      >
                        {item}
                      </a>
                    )}
                  </li>
                ))}
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
            <div className={`${styles.fadeUp} ${styles.delay1} flex w-full max-w-4xl flex-col items-start text-left pt-8 md:pt-12 lg:pt-16`}>
              <h1 className="text-[2.85rem] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-[6.1rem]">
                Digital Solutions for
                <br />
                Sustainable{" "}
                <LoopingWord words={["Growth", "Development"]} className="align-baseline" />
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Delivering secure digital solutions across healthcare, consulting, artificial
                intelligence, and innovation ventures.
              </p>
            </div>
          </div>

        </div>

        <div className={`${styles.heroGalleryWrap} ${styles.fadeUp} ${styles.delay2} hidden lg:block z-20`}>
          <div className={styles.heroGalleryTrack}>
            {scrollingHeroRailCards.map((card, index) => (
              <div
                key={`${card.id}-${index}`}
                className={
                  card.variant === "light"
                    ? `${styles.heroGalleryCard} ${styles.heroGalleryCardLight}`
                    : card.variant === "teal"
                      ? `${styles.heroGalleryCard} ${styles.heroGalleryCardTeal}`
                      : card.variant === "violet"
                        ? `${styles.heroGalleryCard} ${styles.heroGalleryCardViolet}`
                        : `${styles.heroGalleryCard} ${styles.heroGalleryCardOutline}`
                }
              >
                <div className={styles.heroGalleryCardInner}>
                  {card.badge && <span className={styles.heroGalleryBadge}>{card.badge}</span>}
                  <p className={styles.heroGalleryTitle}>{card.title}</p>
                  {card.subtitle && <p className={styles.heroGallerySubtitle}>{card.subtitle}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#f5f5f5] py-7 sm:py-9">
        <div className={styles.techMarquee}>
          <div className={styles.techMarqueeTrack}>
            {scrollingTechLogos.map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="inline-flex items-center text-3xl font-semibold tracking-[-0.02em] text-black/65 sm:text-4xl"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6f8] py-16 text-[#111827] sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <h2 className="text-4xl font-semibold leading-[0.92] tracking-[-0.03em] text-[#111827] sm:text-6xl">
              Our Specialized Divisions
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-[#4b5563] sm:text-base">
              At Sigma Group, we operates through the following specialized divisions:
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="grid gap-3">
              {divisions.map((division) => (
                <article key={`${division.id}-summary`} className={`${division.tone} rounded-[18px] p-5`}>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#6b7280]">
                    {division.tagline}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight text-[#111827]">{division.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4b5563]">{division.description}</p>
                </article>
              ))}
            </div>

            <div className="grid auto-rows-[180px] gap-4 sm:grid-cols-2">
              {divisions.map((division, index) => (
                <article
                  key={division.id}
                  className={`group relative overflow-hidden rounded-[24px] ${index === 0 ? "sm:row-span-2" : ""
                    }`}
                >
                  <Image
                    src={division.image}
                    alt={division.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-5 text-white">
                    <span className="mb-2 w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-[0.08em]">
                      {division.tagline}
                    </span>
                    <h4 className="text-2xl font-semibold leading-[1.02] tracking-[-0.02em]">{division.name}</h4>
                    <span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#111827] transition group-hover:translate-x-0.5">
                      <ArrowUpRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-4 rounded-[30px] border border-[#d8dde5] bg-[#e9edf2] p-4 sm:p-6 lg:p-7">
            <div className="grid gap-6 lg:grid-cols-[360px_1fr] lg:items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
                <Image
                  src="https://www.fao.org/images/faoraflibraries/default-album/malawi-photo-3.jpg?sfvrsn=4f457200_1"
                  alt="Sigma innovation"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#111827] sm:text-5xl">
                  Trusted teams across health, consulting, AI, and ventures.
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#4b5563] sm:text-base">
                  We combine strategic consulting, operational delivery, and innovation execution to
                  design resilient digital ecosystems for organizations and communities.
                </p>
                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#f3f4f6]"
                >
                  See More
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#dfe4ea] text-[#111827]">
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProjectsSticky projects={featuredProjects} />

      <section className="bg-[#f3f4f6] py-16 text-[#0f172a] sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-medium text-[#6b7280] sm:text-base">Frequently Asked Questions</p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#111827] sm:text-5xl">
              Everything You Need to Know:
              <br className="hidden sm:block" /> Sigma Group FAQs
            </h2>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#111827] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#030712]"
              >
                Get Started
              </a>
              <Link
                href="/aboutus"
                className="inline-flex items-center justify-center rounded-full border border-[#d1d5db] bg-white px-7 py-3 text-sm font-semibold text-[#1f2937] transition hover:bg-[#f9fafb]"
              >
                Learn More
              </Link>
            </div>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="bg-[#f1f3f8] py-16 text-white sm:py-20">
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
