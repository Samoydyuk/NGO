"use client";

import { useTranslations } from "next-intl";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "../ui/Container";

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-dark text-white">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <Container className="py-12">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold">{t("footer.newsletter")}</h3>
              <p className="mt-1 text-sm text-gray-400">
                {t("footer.newsletterDesc")}
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t("footer.yourEmail")}
                className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:bg-white/15"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-lg bg-gold px-5 py-3 text-sm font-semibold text-dark transition-colors hover:bg-gold-dark cursor-pointer"
              >
                <Send className="h-4 w-4" />
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white">
                M
              </div>
              <span className="text-lg font-bold">MAPU</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {t("footer.quickLinks")}
            </h3>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/about"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t("nav.about")}
              </Link>
              <Link
                href="/about/leadership"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t("nav.leadership")}
              </Link>
              <Link
                href="/news"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t("nav.news")}
              </Link>
              <Link
                href="/events"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t("nav.events")}
              </Link>
              <Link
                href="/membership"
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {t("nav.membership")}
              </Link>
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {t("footer.contacts")}
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {t("footer.address")}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {t("footer.phone")}
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                {t("footer.email")}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              {t("footer.followUs")}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold transition-colors hover:bg-primary"
              >
                f
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold transition-colors hover:bg-primary"
              >
                in
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold transition-colors hover:bg-primary"
              >
                tg
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-sm font-bold transition-colors hover:bg-primary"
              >
                yt
              </a>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MAPU. {t("footer.rights")}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
