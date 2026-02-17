import { useTranslations } from "next-intl";
import { Award, Handshake, GraduationCap, TrendingUp } from "lucide-react";
import Container from "../ui/Container";

export default function AchievementsSection() {
  const t = useTranslations("achievements");

  const items = [
    { icon: Award, value: t("item1Value"), label: t("item1") },
    { icon: Handshake, value: t("item2Value"), label: t("item2") },
    { icon: GraduationCap, value: t("item3Value"), label: t("item3") },
    { icon: TrendingUp, value: t("item4Value"), label: t("item4") },
  ];

  return (
    <section className="bg-gray-light py-20 lg:py-28">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-gray">{t("subtitle")}</p>
          <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                <item.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
              </div>
              <div className="text-3xl font-bold text-primary sm:text-4xl">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-gray">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
