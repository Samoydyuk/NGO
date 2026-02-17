import { setRequestLocale, getTranslations } from "next-intl/server";
import Container from "@/components/ui/Container";
import EventCard from "@/components/events/EventCard";
import { events } from "@/data/events";

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("eventsPage");

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-20">
        <Container>
          <h1 className="text-center text-4xl font-bold text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-center text-lg text-blue-100">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item) => (
              <EventCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
