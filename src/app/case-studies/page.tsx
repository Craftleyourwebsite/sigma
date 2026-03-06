import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

export default function CaseStudiesPage() {
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
                Our Case Studies
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Explore how Sigma Group designs, deploys, and scales secure digital systems that
                deliver measurable impact across sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#efefef] via-[#e7e8eb] to-[#dfe2e7] py-20 text-[#130a2f] sm:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-white/55 blur-3xl" />
          <div className="absolute -right-16 top-24 h-72 w-72 rounded-full bg-white/38 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/8 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-[1400px] flex-col items-center justify-center px-4 text-center">
          <h2
            className="bg-gradient-to-b from-[#8f53ff] via-[#6e2fff] to-[#4f11d6] bg-clip-text text-center text-[26vw] font-black uppercase leading-[0.84] tracking-[0.09em] text-transparent [text-shadow:0_14px_30px_rgba(79,17,214,0.18)] sm:text-[22vw] lg:text-[15.5rem]"
            style={{
              fontFamily:
                '"Impact","Anton","Haettenschweiler","Arial Narrow Bold","Franklin Gothic Heavy",sans-serif',
            }}
          >
            Coming
            <br />
            Soon
          </h2>

          <Link
            href="/"
            className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#1b1f25] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.24)] transition hover:bg-[#0f1319]"
          >
            Back Home
          </Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
