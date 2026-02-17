import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Calendar, MapPin, Globe, ArrowLeft, Users, Clock, Share2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { events } from "@/data/events";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return events.map((item) => ({ slug: item.slug }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  setRequestLocale(localeParam);
  const locale = localeParam as "uk" | "en";
  const t = await getTranslations("eventsSection");
  const event = events.find((e) => e.slug === slug);

  if (!event) notFound();

  const relatedEvents = events.filter((e) => e.slug !== slug).slice(0, 2);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("allEvents")}
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {event.title[locale]}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
                <Calendar className="h-4 w-4" />
                {formatDate(event.date, locale)}
                {event.endDate && ` — ${formatDate(event.endDate, locale)}`}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-sm">
                {event.isOnline ? (
                  <Globe className="h-4 w-4" />
                ) : (
                  <MapPin className="h-4 w-4" />
                )}
                {event.location[locale]}
              </span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 h-64 rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 sm:h-96" />

            {/* Event info cards */}
            <div className="mb-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl bg-gray-light p-4">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs text-gray">{t("date")}</div>
                  <div className="text-sm font-semibold text-dark">
                    {formatDate(event.date, locale)}
                    {event.endDate && ` — ${formatDate(event.endDate, locale)}`}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-gray-light p-4">
                {event.isOnline ? (
                  <Globe className="h-5 w-5 text-primary" />
                ) : (
                  <MapPin className="h-5 w-5 text-primary" />
                )}
                <div>
                  <div className="text-xs text-gray">{t("location")}</div>
                  <div className="text-sm font-semibold text-dark">
                    {event.location[locale]}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-gray-light p-4">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-xs text-gray">
                    {locale === "uk" ? "Формат" : "Format"}
                  </div>
                  <div className="text-sm font-semibold text-dark">
                    {event.isOnline
                      ? locale === "uk"
                        ? "Онлайн"
                        : "Online"
                      : locale === "uk"
                        ? "Офлайн"
                        : "In-person"}
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-gray">
              <p className="text-lg leading-relaxed">{event.content[locale]}</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/membership" variant="primary" className="px-8 py-4 text-base">
                {t("register")}
              </Button>
              <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-3 text-sm font-medium text-gray-dark transition-colors hover:bg-gray-200 cursor-pointer">
                <Share2 className="h-4 w-4" />
                {locale === "uk" ? "Поділитися" : "Share"}
              </button>
            </div>

            {/* Related events */}
            {relatedEvents.length > 0 && (
              <div className="mt-16 border-t border-gray-100 pt-10">
                <h2 className="mb-6 text-xl font-bold text-dark">
                  {locale === "uk" ? "Інші заходи" : "Other Events"}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedEvents.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/events/${item.slug}`}
                      className="group rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-md"
                    >
                      <div className="mb-2 flex items-center gap-2 text-xs text-gray">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(item.date, locale)}
                      </div>
                      <h3 className="font-semibold text-dark transition-colors group-hover:text-primary">
                        {item.title[locale]}
                      </h3>
                      <p className="mt-2 text-sm text-gray">
                        {item.description[locale]}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
