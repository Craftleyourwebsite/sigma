import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

export default function AboutUsPage() {
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
                About Us
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Building technology-driven solutions that strengthen systems, enable growth, and
                deliver sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#060606] py-16 sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="grid gap-8 rounded-[30px] bg-black p-5 shadow-[0_28px_70px_rgba(0,0,0,0.28)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-[#ee89df]">
                <span className="inline-block h-2 w-2 rounded-sm bg-[#ee89df]" />
                About
              </p>

              <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-5xl">
                Who We Are
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-white/75">
                A Solutions development group delivering secure, scalable digital solutions for
                real-world challenges.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/67">
                Sigma Group is an ICT holding company providing end-to-end digital solutions across
                healthcare, consulting, artificial intelligence, and innovation ventures. We bring
                together multidisciplinary expertise to design, build, and support systems that
                improve service delivery, strengthen institutions, and enable sustainable growth.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/67">
                Our structure allows each business unit to operate with sector-specific focus while
                benefiting from shared governance, quality assurance, and security standards. This
                enables Sigma Group to deliver complex, mission-critical systems with reliability,
                accountability, and long-term support.
              </p>

              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full border border-white/12 bg-white px-7 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[22px] bg-[#080808] sm:h-[520px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_65%)]" />
              <Image
                src="/sigmalogo.png"
                alt="Sigma Group logo"
                width={260}
                height={340}
                sizes="(min-width: 1024px) 260px, 40vw"
                className="relative z-10 h-40 w-auto sm:h-52"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#060606] pb-16 sm:pb-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="grid gap-8 rounded-[30px] bg-[#090909] p-5 shadow-[0_26px_60px_rgba(0,0,0,0.3)] sm:p-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:p-10">
            <div>
              <p className="inline-flex items-center gap-2 text-sm text-[#b794f6]">
                <span className="inline-block h-2 w-2 rounded-sm bg-[#b794f6]" />
                Team
              </p>

              <h3 className="mt-6 text-4xl font-semibold leading-[0.98] tracking-[-0.03em] text-white sm:text-5xl">
                The People Behind Sigma Group
              </h3>
              <p className="mt-3 text-xl font-medium tracking-[-0.01em] text-white/92">Meet The Team</p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/67">
                Behind Sigma Group is a multidisciplinary team of engineers, ICT architects, data
                professionals, and implementation specialists working across sectors to deliver
                secure and dependable digital systems.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/67">
                Our teams combine technical depth with field experience, allowing us to translate
                complex operational needs into practical solutions that scale, perform, and create
                measurable impact.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#team"
                  className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Meet The Team
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
                >
                  Let&apos;s Talk
                </Link>
              </div>
            </div>

            <div className="relative h-[380px] overflow-hidden rounded-[22px] bg-black sm:h-[500px]">
              <Image
                src="/flag-malawi.svg"
                alt="Flag of Malawi"
                width={1500}
                height={1000}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
