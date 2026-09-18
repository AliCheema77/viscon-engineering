"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyLinks } from "@/content/nav";
import { services } from "@/content/services";

const partnerPlaceholders = [1, 2, 3, 4];

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-brand-deep text-white">
      {isHome ? (
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-8">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The Associate
            </p>
            <div className="flex flex-wrap gap-4">
              {partnerPlaceholders.map((n) => (
                <div
                  key={`associate-${n}`}
                  className="flex h-[110px] w-[200px] items-center justify-center rounded bg-white/10 text-sm text-white/40"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
              The Group
            </p>
            <div className="flex flex-wrap gap-4">
              {partnerPlaceholders.map((n) => (
                <div
                  key={`group-${n}`}
                  className="flex h-[110px] w-[200px] items-center justify-center rounded bg-white/10 text-sm text-white/40"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-6xl gap-10 border-t border-white/10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold uppercase text-white">
            Viscon Engineering
          </p>
          <p className="mt-3 max-w-xs font-sans text-sm text-white/70">
            Beyond construction, turning vision into reality through smart
            technology.
          </p>
          <p className="mt-4 font-sans text-sm text-white/70">
            F-98 First Floor, Gulberg Heights, Gulberg Green, Islamabad
          </p>
          <p className="mt-1 font-sans text-sm text-white/70">
            0345-4696064 · 0331-4380321
          </p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Company
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-sans text-sm text-white/70 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Services
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {services.map((service) => (
              <li
                key={service.slug}
                className="font-sans text-sm text-white/70"
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            Stay Updated
          </p>
          <form className="mt-4 flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="rounded border border-white/20 bg-transparent px-3 py-2 font-sans text-sm text-white placeholder:text-white/40"
            />
            <button
              type="submit"
              className="rounded bg-brand-primary px-3 py-2 font-sans text-sm font-medium text-white hover:bg-brand-mid"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center font-sans text-xs text-white/50">
        © {new Date().getFullYear()} Viscon Engineering. All rights reserved.
      </div>
    </footer>
  );
}
