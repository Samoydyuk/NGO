import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Calendar, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Container from "@/components/ui/Container";
import { news } from "@/data/news";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  setRequestLocale(localeParam);
  const locale = localeParam as "uk" | "en";
  const t = await getTranslations("newsSection");
  const article = news.find((n) => n.slug === slug);

  if (!article) notFound();

  const relatedNews = news.filter((n) => n.slug !== slug).slice(0, 2);

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
                href="/news"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("allNews")}
              </Link>
            </div>
            <div className="mb-4 flex items-center gap-2 text-blue-200/80">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">{formatDate(article.date, locale)}</span>
            </div>
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {article.title[locale]}
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 h-64 rounded-2xl bg-gradient-to-br from-primary-light to-primary/20 sm:h-96" />

            <div className="prose prose-lg max-w-none text-gray">
              <p className="text-lg leading-relaxed">{article.content[locale]}</p>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-8">
              <div className="flex items-center gap-2 text-sm text-gray">
                <Calendar className="h-4 w-4" />
                {formatDate(article.date, locale)}
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-dark transition-colors hover:bg-gray-200 cursor-pointer">
                <Share2 className="h-4 w-4" />
                {locale === "uk" ? "Поділитися" : "Share"}
              </button>
            </div>

            {/* Related news */}
            {relatedNews.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-6 text-xl font-bold text-dark">
                  {locale === "uk" ? "Інші новини" : "Related News"}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {relatedNews.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="group rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-md"
                    >
                      <div className="mb-2 text-xs text-gray">
                        {formatDate(item.date, locale)}
                      </div>
                      <h3 className="font-semibold text-dark transition-colors group-hover:text-primary">
                        {item.title[locale]}
                      </h3>
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
