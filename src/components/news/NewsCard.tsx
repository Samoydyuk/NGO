import { useLocale } from "next-intl";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { NewsItem } from "@/data/news";
import { formatDate } from "@/lib/utils";

export default function NewsCard({ item }: { item: NewsItem }) {
  const locale = useLocale() as "uk" | "en";

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-light to-primary/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-dark backdrop-blur-sm">
          <Calendar className="h-3 w-3" />
          {formatDate(item.date, locale)}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg font-semibold leading-snug text-dark">
          <Link
            href={`/news/${item.slug}`}
            className="transition-colors hover:text-primary"
          >
            {item.title[locale]}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-gray">
          {item.excerpt[locale]}
        </p>
        <Link
          href={`/news/${item.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {locale === "uk" ? "Читати далі" : "Read more"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
