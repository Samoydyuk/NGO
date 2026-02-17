import { useLocale } from "next-intl";
import { Calendar, MapPin, Globe, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import type { EventItem } from "@/data/events";
import { formatDate } from "@/lib/utils";

export default function EventCard({ item }: { item: EventItem }) {
  const locale = useLocale() as "uk" | "en";

  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gold/20 to-primary/20">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {item.isOnline && (
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-green-500/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Globe className="h-3 w-3" />
            Online
          </div>
        )}
        <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-center backdrop-blur-sm">
          <div className="text-lg font-bold leading-tight text-primary">
            {new Date(item.date).getDate()}
          </div>
          <div className="text-[10px] font-medium uppercase text-gray">
            {new Date(item.date).toLocaleString(locale === "uk" ? "uk-UA" : "en-US", {
              month: "short",
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-gray">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-primary" />
            {formatDate(item.date, locale)}
            {item.endDate && ` — ${formatDate(item.endDate, locale)}`}
          </span>
          <span className="flex items-center gap-1.5">
            {item.isOnline ? (
              <Globe className="h-3.5 w-3.5 text-primary" />
            ) : (
              <MapPin className="h-3.5 w-3.5 text-primary" />
            )}
            {item.location[locale]}
          </span>
        </div>
        <h3 className="mb-3 text-lg font-semibold leading-snug text-dark">
          <Link
            href={`/events/${item.slug}`}
            className="transition-colors hover:text-primary"
          >
            {item.title[locale]}
          </Link>
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-gray">
          {item.description[locale]}
        </p>
        <Link
          href={`/events/${item.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
        >
          {locale === "uk" ? "Детальніше" : "Learn more"}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
