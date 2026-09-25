"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logoChico from "@/logos/logo_chico.png";
import { CHATVIONIKO_TRIAL_URL } from "./affiliateConfig";
import { CTAButton } from "./CTAButton";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Ganancias", href: "#ganancias" },
  { label: "Que incluye", href: "#que-incluye" },
  { label: "Afiliados", href: "#afiliados" },
  { label: "Preguntas", href: "#preguntas" },
];

export function AffiliateHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition duration-300 ${
        isScrolled || isOpen
          ? "border-white/10 bg-ink/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="#inicio"
          className="flex min-w-0 items-center gap-3"
          aria-label="ChatVioniko afiliados, volver al inicio"
        >
          <Image
            src={logoChico}
            alt="ChatVioniko"
            priority
            className="h-9 w-9 object-contain sm:h-10 sm:w-10"
            sizes="40px"
          />
          <span className="hidden text-sm font-black uppercase tracking-normal text-white sm:inline">
            ChatVioniko
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-mist transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton href={CHATVIONIKO_TRIAL_URL} className="min-h-10 px-4 py-2">
            Probar gratis
          </CTAButton>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-0.5 rounded bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 rounded bg-current transition ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 rounded bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <nav
          className="border-t border-white/10 bg-ink/95 px-4 py-4 lg:hidden"
          aria-label="Principal movil"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-mist transition hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <CTAButton
              href={CHATVIONIKO_TRIAL_URL}
              className="mt-3 w-full"
              onClick={() => setIsOpen(false)}
            >
              Probar gratis
            </CTAButton>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
