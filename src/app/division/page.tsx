import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

type DivisionContent = {
  id: string;
  heading: string;
  name: string;
  intro?: string;
  description: string;
  details: string;
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

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

const divisionContent: DivisionContent[] = [
  {
    id: "sigma-health",
    heading: "Strengthening Healthcare Through Digital Systems",
    name: "Sigma Health",
    description:
      "Sigma Health is a specialized digital health division focused on the design, development, deployment, and support of Health Management Information Systems (HMIS) and health-sector software solutions.",
    details:
      "This division was established following extensive experience delivering custom software solutions across banking, engineering, and healthcare sectors, and the growing demand for robust digital health systems.",
    background: "linear-gradient(145deg, #6ca6e1 0%, #5b95d2 42%, #407ec0 100%)",
    textMode: "light",
  },
  {
    id: "sigma-consult",
    heading: "Expert ICT Consulting & Delivery",
    name: "Sigma Consult",
    description:
      "Sigma Consult provides professional ICT consulting and technical delivery services to organizations seeking expert support in digital transformation and technology implementation.",
    details:
      "The consultancy division was formed by leveraging the same multidisciplinary team responsible for building Sigma Health, now offering these skills to external clients across industries.",
    background: "linear-gradient(145deg, #ffffff 0%, #f6f7f9 100%)",
    textMode: "dark",
  },
  {
    id: "sigma-ai",
    heading: "Intelligent Systems. Smarter Decisions.",
    name: "SIGMA AI",
    description:
      "Sigma AI is the research and innovation division of Sigma Group, focused on Artificial Intelligence, data-driven solutions, and intelligent system optimization.",
    details:
      "Initially established to enhance Sigma Health systems, the division now offers AI services to external organizations seeking to improve operational efficiency, decision-making, and automation.",
    background: "linear-gradient(145deg, #060606 0%, #0f0f10 54%, #1a1a1d 100%)",
    textMode: "light",
  },
  {
    id: "sigma-ventures",
    heading: "Innovation & Product Development",
    name: "Sigma Ventures",
    intro: "Coming Soon",
    description:
      "Sigma Ventures is the innovation and investment arm of Sigma Group, focused on developing in-house digital products, incubating high-impact solutions, and exploring strategic partnerships.",
    details:
      "This division provides a structured pathway for experimentation, product scaling, and long-term value creation.",
    background: "linear-gradient(145deg, #8579ff 0%, #6c5de8 48%, #453eb9 100%)",
    textMode: "light",
  },
];

export default function DivisionPage() {
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
              href="/support"
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
                Divisions
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Sigma Group operates through dedicated business units, each focused on a specific
                domain while working under shared governance, quality assurance, and security
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#d9d9d9] py-12 text-white sm:py-16 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-4 sm:px-7 lg:px-12">
          <div className="mb-8 sm:mb-10">
            <h2 className="text-3xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#121212] sm:text-5xl">
              Our Specialized Divisions
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-[#2a2a2a] sm:text-base">
              At Sigma Group, we operates through the following specialized divisions:
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-[#1f2937] sm:text-sm">
              SIGMA HEALTH
              <span className="mx-2 text-black/40">•</span>
              SIGMA CONSULT
              <span className="mx-2 text-black/40">•</span>
              SIGMA AI
              <span className="mx-2 text-black/40">•</span>
              SIGMA VENTURES
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {divisionContent.map((division) => {
              const isDarkText = division.textMode === "dark";

              return (
                <article
                  key={division.id}
                  className="relative overflow-hidden rounded-[2px] border border-white/70 shadow-[0_14px_30px_rgba(0,0,0,0.25)]"
                  style={{ background: division.background }}
                >
                  <div
                    className={`absolute inset-0 ${
                      isDarkText
                        ? "bg-gradient-to-b from-white/14 via-white/6 to-white/12"
                        : "bg-gradient-to-b from-black/8 via-black/16 to-black/62"
                    }`}
                  />

                  <div className="relative z-10 flex h-full min-h-[500px] flex-col p-6 sm:p-7 lg:p-8">
                    <div>
                      <p
                        className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${
                          isDarkText ? "text-black/72" : "text-white/86"
                        }`}
                      >
                        {division.heading}
                      </p>
                      <h2
                        className={`mt-3 text-3xl font-semibold leading-[0.95] tracking-[-0.02em] sm:text-4xl ${
                          isDarkText ? "text-[#111827]" : "text-white"
                        }`}
                      >
                        {division.name}
                      </h2>
                      {division.intro ? (
                        <p
                          className={`mt-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] ${
                            isDarkText
                              ? "border border-black/30 bg-black/8 text-[#111827]"
                              : "border border-white/50 bg-white/20 text-white"
                          }`}
                        >
                          {division.intro}
                        </p>
                      ) : null}
                    </div>

                    <div className="mt-auto">
                      <p className={`text-sm leading-relaxed sm:text-base ${isDarkText ? "text-black/90" : "text-white/96"}`}>
                        {division.description}
                      </p>
                      <p className={`mt-4 text-sm leading-relaxed sm:text-base ${isDarkText ? "text-black/78" : "text-white/88"}`}>
                        {division.details}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                        <a
                          href="#"
                          className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition ${
                            isDarkText
                              ? "border border-black/85 bg-black px-6 py-2.5 text-white hover:bg-[#0b0b0b]"
                              : "border border-white/85 bg-white/94 text-black hover:bg-white"
                          }`}
                        >
                          Expand
                        </a>

                        <span
                          className={`text-xs font-semibold uppercase tracking-[0.15em] ${
                            isDarkText ? "text-black/74" : "text-white/90"
                          }`}
                        >
                          {division.name.toUpperCase()}
                        </span>
                      </div>
                    </div>
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
