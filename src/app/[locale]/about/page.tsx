import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Heart, Lightbulb, Handshake, TrendingUp,
  Users, GraduationCap, Scale, Globe, Cpu, HeartHandshake,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");

  const values = [
    { icon: Heart, key: "integrity" },
    { icon: Lightbulb, key: "innovation" },
    { icon: Handshake, key: "cooperation" },
    { icon: TrendingUp, key: "development" },
  ] as const;

  const stats = [
    { key: "members" },
    { key: "events" },
    { key: "partners" },
    { key: "regions" },
    { key: "countries" },
    { key: "investments" },
  ] as const;

  const directions = [
    { icon: Users, key: "1" },
    { icon: GraduationCap, key: "2" },
    { icon: Scale, key: "3" },
    { icon: Globe, key: "4" },
    { icon: Cpu, key: "5" },
    { icon: HeartHandshake, key: "6" },
  ] as const;

  const timeline = [
    { key: "1" },
    { key: "2" },
    { key: "3" },
    { key: "4" },
    { key: "5" },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {t("pageTitle")}
            </h1>
            <p className="mt-4 text-lg text-blue-100">{t("pageSubtitle")}</p>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
          </div>
        </Container>
      </section>

      {/* History */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionTitle title={t("historyTitle")} />
            <div className="space-y-6 text-lg leading-relaxed text-gray">
              <p>{t("historyText1")}</p>
              <p>{t("historyText2")}</p>
              <p>{t("historyText3")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <SectionTitle title={t("timelineTitle")} />
          <div className="mx-auto max-w-3xl">
            <div className="relative border-l-2 border-primary/20 pl-8">
              {timeline.map((item) => (
                <div key={item.key} className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-primary bg-white">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <div className="rounded-xl bg-white p-6 shadow-sm">
                    <span className="inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary">
                      {t(`year${item.key}`)}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-dark">
                      {t(`year${item.key}Title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray">
                      {t(`year${item.key}Text`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-8 text-white">
              <h2 className="text-2xl font-bold">{t("missionTitle")}</h2>
              <div className="mt-3 h-1 w-16 rounded bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-blue-100">
                {t("missionText")}
              </p>
            </div>
            <div className="rounded-2xl border-2 border-primary/10 bg-primary-light/30 p-8">
              <h2 className="text-2xl font-bold text-dark">{t("visionTitle")}</h2>
              <div className="mt-3 h-1 w-16 rounded bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-gray">
                {t("visionText")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <SectionTitle title={t("valuesTitle")} />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <Card key={v.key} className="group text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                  <v.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-dark">
                  {t(`values.${v.key}`)}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {t(`values.${v.key}Desc`)}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Directions */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionTitle title={t("directionsTitle")} />
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d) => (
              <div
                key={d.key}
                className="group flex items-start gap-4 rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                  <d.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">{t(`dir${d.key}`)}</h3>
                  <p className="mt-1 text-sm text-gray">{t(`dir${d.key}Desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 lg:py-24">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            {t("statsTitle")}
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map((s) => (
              <div key={s.key} className="text-center">
                <div className="text-3xl font-bold text-gold sm:text-4xl">
                  {t(`stats.${s.key}`)}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-blue-200/60">
                  {t(`stats.${s.key}Label`)}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
