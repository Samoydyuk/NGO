"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function MobileMenu() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setAboutOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="rounded-lg p-2 text-gray-dark hover:bg-gray-100 cursor-pointer"
        aria-label="Menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 border-b border-gray-100 bg-white shadow-lg">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              onClick={close}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-dark hover:bg-primary-light hover:text-primary"
            >
              {t("home")}
            </Link>

            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-gray-dark hover:bg-primary-light hover:text-primary cursor-pointer"
            >
              {t("about")}
              <ChevronDown
                className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div className="ml-4 flex flex-col">
                <Link href="/about" onClick={close} className="rounded-lg px-4 py-2.5 text-sm text-gray-dark hover:bg-primary-light hover:text-primary">
                  {t("aboutHistory")}
                </Link>
                <Link href="/about/leadership" onClick={close} className="rounded-lg px-4 py-2.5 text-sm text-gray-dark hover:bg-primary-light hover:text-primary">
                  {t("leadership")}
                </Link>
                <Link href="/about/statute" onClick={close} className="rounded-lg px-4 py-2.5 text-sm text-gray-dark hover:bg-primary-light hover:text-primary">
                  {t("statute")}
                </Link>
                <Link href="/about/contacts" onClick={close} className="rounded-lg px-4 py-2.5 text-sm text-gray-dark hover:bg-primary-light hover:text-primary">
                  {t("contacts")}
                </Link>
              </div>
            )}

            <Link href="/news" onClick={close} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-dark hover:bg-primary-light hover:text-primary">
              {t("news")}
            </Link>
            <Link href="/events" onClick={close} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-dark hover:bg-primary-light hover:text-primary">
              {t("events")}
            </Link>
            <Link href="/membership" onClick={close} className="rounded-lg px-4 py-3 text-sm font-medium text-gray-dark hover:bg-primary-light hover:text-primary">
              {t("membership")}
            </Link>

            <Link
              href="/membership"
              onClick={close}
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white hover:bg-primary-dark"
            >
              {t("joinUs")}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
