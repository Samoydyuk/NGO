import { setRequestLocale, getTranslations } from "next-intl/server";
import { User, Linkedin, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import { leadership } from "@/data/leadership";

export default async function LeadershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);
  const locale = localeParam as "uk" | "en";

  const t = await getTranslations("leadershipPage");

  const board = leadership.slice(0, 3);
  const committee = leadership.slice(3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-blue-100">{t("subtitle")}</p>
            <div className="mx-auto mt-4 h-1 w-20 rounded bg-gold" />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <h2 className="mb-12 text-center text-2xl font-bold text-dark sm:text-3xl">
            {t("boardTitle")}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {board.map((person) => (
              <div
                key={person.name.uk}
                className="group rounded-2xl border border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary/20">
                  <User className="h-14 w-14 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-dark">
                  {person.name[locale]}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">
                  {person.position[locale]}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-gray">
                  {person.bio[locale]}
                </p>
                <div className="mt-6 flex justify-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray transition-colors hover:bg-primary hover:text-white">
                    <Linkedin className="h-4 w-4" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-gray transition-colors hover:bg-primary hover:text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <h2 className="mb-12 text-center text-2xl font-bold text-dark sm:text-3xl">
            {t("committeeTitle")}
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {committee.map((person) => (
              <div
                key={person.name.uk}
                className="flex items-center gap-4 rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-light to-primary/20">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark">
                    {person.name[locale]}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {person.position[locale]}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray">
                    {person.bio[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
