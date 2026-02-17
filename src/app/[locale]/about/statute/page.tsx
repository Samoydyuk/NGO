import { setRequestLocale, getTranslations } from "next-intl/server";
import { FileText, Download } from "lucide-react";
import Container from "@/components/ui/Container";

export default async function StatutePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("statutePage");

  const sectionKeys = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-16 sm:py-24">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <FileText className="h-8 w-8 text-gold" />
            </div>
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
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 flex items-center justify-between rounded-xl bg-primary-light/50 p-4">
              <div className="flex items-center gap-3">
                <Download className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-dark">
                  PDF
                </span>
              </div>
              <span className="text-xs text-gray">v2.0 — 2024</span>
            </div>

            <div className="space-y-6">
              {sectionKeys.map((num) => (
                <div
                  key={num}
                  className="rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-sm"
                >
                  <h2 className="mb-4 text-lg font-semibold text-dark">
                    {t(`section${num}Title`)}
                  </h2>
                  <div className="leading-relaxed text-gray whitespace-pre-line">
                    {t(`section${num}Text`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
