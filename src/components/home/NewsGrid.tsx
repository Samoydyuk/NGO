import { useTranslations } from "next-intl";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import NewsCard from "../news/NewsCard";
import Button from "../ui/Button";
import { news } from "@/data/news";

export default function NewsGrid() {
  const t = useTranslations("newsSection");
  const latestNews = news.slice(0, 3);

  return (
    <section className="bg-gray-light py-20 lg:py-28">
      <Container>
        <SectionTitle title={t("title")} subtitle={t("subtitle")} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/news" variant="outline">
            {t("allNews")}
          </Button>
        </div>
      </Container>
    </section>
  );
}
