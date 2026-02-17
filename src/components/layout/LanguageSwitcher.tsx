"use client";

import { useLocale } from "next-intl";
import { Globe } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = () => {
    const newLocale = locale === "uk" ? "en" : "uk";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-primary-light hover:text-primary cursor-pointer"
      title={locale === "uk" ? "Switch to English" : "Перемкнути на українську"}
    >
      <Globe className="h-4 w-4" />
      <span>{locale === "uk" ? "EN" : "UA"}</span>
    </button>
  );
}
