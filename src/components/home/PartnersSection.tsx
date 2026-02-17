import { useTranslations } from "next-intl";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { partners } from "@/data/partners";

export default function PartnersSection() {
  const t = useTranslations("partners");

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              className="group flex h-24 items-center justify-center rounded-xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              title={partner.name}
            >
              <span className="text-center text-xs font-semibold text-gray transition-colors group-hover:text-primary">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
