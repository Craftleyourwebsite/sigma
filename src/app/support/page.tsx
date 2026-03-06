import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

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

export default function SupportPage() {
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
                Submit Support Ticket
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Tell us about your issue and our support team will assist you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ececec] py-14 text-[#131a2a] sm:py-20">
        <div className="mx-auto max-w-[980px] px-4 sm:px-7 lg:px-12">
          <div className="mx-auto max-w-[760px] rounded-[20px] border border-[#d5dae5] bg-[#f0f2f7] p-8 text-center shadow-[0_18px_40px_rgba(19,40,77,0.08)] sm:p-10">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#13284d] sm:text-4xl">
              Support Form Content Pending
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#50607a]">
              This section is intentionally left blank for now. We will finalize the support form
              structure and fields after client validation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ececec] py-16 text-white sm:py-20">
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
                  href="/contact"
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

      <SiteFooter compact />
    </main>
  );
}
