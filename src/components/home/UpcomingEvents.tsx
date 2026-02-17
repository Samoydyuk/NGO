import { useTranslations } from "next-intl";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import EventCard from "../events/EventCard";
import Button from "../ui/Button";
import { events } from "@/data/events";

export default function UpcomingEvents() {
  const t = useTranslations("eventsSection");
  const upcomingEvents = events.slice(0, 3);

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map((item) => (
            <EventCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/events" variant="outline">
            {t("allEvents")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
