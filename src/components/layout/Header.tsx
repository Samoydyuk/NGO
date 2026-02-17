"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import Container from "../ui/Container";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [aboutOpen, setAboutOpen] = useState(false);

  const aboutLinks = [
    { href: "/about" as const, label: t("aboutHistory") },
    { href: "/about/leadership" as const, label: t("leadership") },
    { href: "/about/statute" as const, label: t("statute") },
    { href: "/about/contacts" as const, label: t("contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white">
              М
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight text-dark">
                МАПУ
              </div>
              <div className="text-xs text-gray">
                {locale === "uk"
                  ? "Асоціація підприємців"
                  : "Entrepreneurs Association"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary"
            >
              {t("home")}
            </Link>

            {/* About dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary cursor-pointer">
                {t("about")}
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full w-56 rounded-lg border border-gray-100 bg-white py-2 shadow-lg">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-gray-dark transition-colors hover:bg-primary-light hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/news"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary"
            >
              {t("news")}
            </Link>
            <Link
              href="/events"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary"
            >
              {t("events")}
            </Link>
            <Link
              href="/membership"
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary"
            >
              {t("membership")}
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              href="/membership"
              className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-dark hover:shadow-lg lg:inline-flex"
            >
              {t("joinUs")}
            </Link>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}
