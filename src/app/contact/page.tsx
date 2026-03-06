import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import styles from "../hero-section.module.css";

const menu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts"];

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

export default function ContactPage() {
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
                Contact Us
              </h1>

              <p className="mt-10 max-w-3xl text-left text-base leading-relaxed text-white/80 sm:text-lg">
                Whether you are a government institution, healthcare provider, NGO, donor, or
                private organization, Sigma Group is ready to collaborate on secure, scalable, and
                impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] py-14 text-[#111111] sm:py-20">
        <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
          <div className="mx-auto w-full max-w-[980px] rounded-[16px] bg-[#efefef] p-6 shadow-[0_22px_48px_rgba(8,10,15,0.2)] sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#111111] sm:text-4xl">
                  Get In Touch
                </h2>

                <form className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-black/75">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full border-b border-black/22 bg-transparent pb-2 text-base text-[#1a1a1a] placeholder:text-black/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-black/75">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      className="w-full border-b border-black/22 bg-transparent pb-2 text-base text-[#1a1a1a] placeholder:text-black/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1 block text-sm font-medium text-black/75">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      className="w-full border-b border-black/22 bg-transparent pb-2 text-base text-[#1a1a1a] placeholder:text-black/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="mb-1 block text-sm font-medium text-black/75">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full border-b border-black/22 bg-transparent pb-2 text-base text-[#1a1a1a] placeholder:text-black/45 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-1 block text-sm font-medium text-black/75">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      rows={3}
                      className="w-full resize-none border-b border-black/22 bg-transparent pb-2 text-base text-[#1a1a1a] placeholder:text-black/45 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-base font-semibold text-white transition hover:bg-[#111111]"
                  >
                    Contact US
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white text-black">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-4 w-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m13 6 6 6-6 6" />
                      </svg>
                    </span>
                  </button>
                </form>
              </div>

              <div className="rounded-[14px] border border-black/10 bg-white/60 p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-black/55">Contact US</p>
                <h3 className="mt-3 text-3xl font-semibold leading-tight text-[#111111] sm:text-4xl">
                  Let&apos;s Talk!
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-black/62 sm:text-base">
                  Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts
                </p>

                <div className="mt-7 space-y-4 text-sm leading-relaxed text-[#111111] sm:text-base">
                  <a href="mailto:info@sigmagroupmw.com" className="block transition hover:text-black/65">
                    info@sigmagroupmw.com
                  </a>
                  <a href="tel:+265998006237" className="block transition hover:text-black/65">
                    +265-998-006-237
                  </a>
                  <p>Ground Floor, Tama House, P.O. Box 2543, City Center, Lilongwe, Malawi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] py-16 text-white sm:py-20">
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

      <section className="bg-[#f1f1f1]">
        <div className="h-[380px] w-full overflow-hidden sm:h-[430px]">
          <iframe
            title="TAMA House Map"
            src="https://maps.google.com/maps?width=100%25&height=430&hl=en&q=2QGV%2BMHH%2C%20Lilongwe%2C%20Malawi&t=&z=15&ie=UTF8&iwloc=B&output=embed"
            className="h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      <SiteFooter compact />
    </main>
  );
}
