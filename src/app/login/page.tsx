import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Admin Login | Sigma Group",
  description: "Secure admin access for Sigma Group.",
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#dfe3df] px-4 py-8 text-[#101413] sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto grid w-full max-w-[980px] overflow-hidden rounded-[30px] bg-[#f3f5f3] shadow-[0_26px_70px_rgba(39,45,42,0.18)] md:h-[610px] md:grid-cols-[0.9fr_1.2fr]">
        <section className="flex items-center justify-center p-7 sm:p-8">
          <div className="w-full max-w-[360px]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold tracking-[-0.01em] text-[#121212]">
                Sigma<span className="text-[#8b5cf6]">Admin</span>
              </p>
              <Link href="/" className="text-xs text-black/65 transition hover:text-black">
                Back to site
              </Link>
            </div>

            <h1 className="mt-14 text-5xl font-semibold tracking-[-0.03em] text-[#111111]">Welcome!</h1>
            <p className="mt-4 max-w-[290px] text-sm leading-relaxed text-black/45">
              To log in to your account, enter your email address and your password.
            </p>

            <form className="mt-9 space-y-3.5">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your email address"
                className="h-11 w-full rounded-[10px] border border-[#edf0ed] bg-[#ecefee] px-4 text-sm text-black/80 placeholder:text-black/35 outline-none transition focus:border-[#b7beb8]"
              />

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Your password"
                className="h-11 w-full rounded-[10px] border border-[#edf0ed] bg-[#ecefee] px-4 text-sm text-black/80 placeholder:text-black/35 outline-none transition focus:border-[#b7beb8]"
              />

              <a href="#" className="inline-block text-xs text-[#74b581] transition hover:text-[#4fae66]">
                Forgot password?
              </a>

              <button
                type="submit"
                className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-[10px] bg-black text-sm font-medium text-white transition hover:bg-[#222222]"
              >
                Next step
              </button>
            </form>

            <p className="mt-16 text-center text-xs leading-relaxed text-black/55">
              Feel free to contact us
              <br />
              <a href="mailto:support@sigma.com" className="text-[#74b581] transition hover:text-[#4fae66]">
                support@sigma.com
              </a>
            </p>

            <p className="mt-16 text-center text-[10px] text-black/26">All rights reserved Sigma Technologies 2026</p>
          </div>
        </section>

        <section className="relative flex min-h-[300px] items-center justify-center bg-[#060606] md:min-h-full">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_62%)]" />
          <div className="relative z-10 flex flex-col items-center">
            <Image
              src="/sigmalogo.png"
              alt="Sigma Group logo"
              width={190}
              height={240}
              priority
              className="h-28 w-auto sm:h-36"
            />
            <p className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">Sigma Group</p>
          </div>
        </section>
      </div>
    </main>
  );
}
