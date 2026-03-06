import Image from "next/image";
import Link from "next/link";

const footerMenu = ["Home", "About Us", "Divisions", "Projects", "Case Studies", "Contacts", "Support"];
const socials = ["LinkedIn", "X / Twitter", "Facebook"];

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

function ArrowRightIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

type SiteFooterProps = {
  compact?: boolean;
};

export default function SiteFooter({ compact = false }: SiteFooterProps) {
  return (
    <section
      className={`bg-[#06060b] pb-8 text-white ${compact ? "pt-8 sm:pt-10" : "pt-16 sm:pt-20"}`}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-7 lg:px-12">
        <div className="rounded-[30px] border border-black/5 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.08)] sm:p-8 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8">
          <div>
            <p className="text-sm font-medium text-[#6b7280]">Become a Partner</p>
            <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#0f172a] sm:text-4xl">
              Join Sigma Affiliate Program
            </h3>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#4b5563]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </p>
            <a
              href="#"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f2937]"
            >
              Become an affiliate
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>

          <div className="relative mt-8 h-[220px] lg:mt-0 lg:h-[260px]">
            <Image
              src="https://cdn.dribbble.com/userupload/24208008/file/original-a44da982edf332731e718a9f8910fe5b.jpg?resize=1024x768&vertical=center"
              alt="Affiliate program visual"
              fill
              sizes="(min-width: 1024px) 36vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <footer className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.9fr_0.75fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/sigmalogo.png" alt="Sigma Logo" width={60} height={78} className="h-12 w-auto" />
              <span className="text-xl font-semibold text-white">Sigma Group</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Secure and sustainable digital ecosystems in healthcare, consulting, AI, and
              innovation ventures.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.11em] text-white/70">Menu</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {footerMenu.map((item) => {
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
                              : item === "Support"
                                ? "/support"
                              : "#";
                const isInternal = href.startsWith("/");

                return (
                  <li key={`footer-${item}`}>
                    {isInternal ? (
                      <Link href={href} className="transition hover:text-[#b794f6]">
                        {item}
                      </Link>
                    ) : (
                      <a href={href} className="transition hover:text-[#b794f6]">
                        {item}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.11em] text-white/70">Socials</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/90">
              {socials.map((social) => (
                <li key={social}>
                  <a href="#" className="inline-flex items-center gap-1 transition hover:text-[#b794f6]">
                    {social}
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.11em] text-white/70">Newsletter</h4>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Subscribe to the Sigma Group newsletter for insights on: Digital health systems and
              HMIS innovation, AI and data-driven decision-making, Mobility, climate, and livelihood
              solutions, Project updates, deployments, and partnerships, Industry trends, policy,
              and technology insights
            </p>
            <form className="mt-5 flex items-center rounded-full border border-white/20 bg-white/5 p-1.5 shadow-sm">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full border-none bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/45 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-lg text-[#111827] transition hover:bg-[#ede9fe]"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            </form>
          </div>
        </footer>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Sigma Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-white/80 transition hover:text-[#b794f6]">
              Admin
            </Link>
            <a href="#" className="text-white/80 transition hover:text-[#b794f6]">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 transition hover:text-[#b794f6]">
              Terms of Service
            </a>
            <p>
              Built by{" "}
              <a
                href="https://creativfolio.com"
                target="_blank"
                rel="noreferrer"
                className="text-white/80 transition hover:text-[#b794f6]"
              >
                Creativfolio
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
