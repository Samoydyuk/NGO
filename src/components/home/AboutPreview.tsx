import { useTranslations } from "next-intl";
import { Users, Globe, TrendingUp, Shield } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function AboutPreview() {
  const t = useTranslations("aboutPreview");

  const features = [
    { icon: Users, title: t("feature1"), desc: t("feature1Desc") },
    { icon: Globe, title: t("feature2"), desc: t("feature2Desc") },
    { icon: TrendingUp, title: t("feature3"), desc: t("feature3Desc") },
    { icon: Shield, title: t("feature4"), desc: t("feature4Desc") },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: text content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                {t("title")}
              </span>
            </div>
            <h2 className="text-3xl font-bold text-dark sm:text-4xl">
              {t("title")}
            </h2>
            <div className="mt-4 h-1 w-20 rounded bg-gold" />
            <p className="mt-6 text-lg leading-relaxed text-gray">
              {t("text")}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray">
              {t("text2")}
            </p>
            <div className="mt-8">
              <Button href="/about" variant="primary">
                {t("more")}
              </Button>
            </div>
          </div>

          {/* Right: feature cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <div
                key={i}
                className="group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                  <f.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-base font-semibold text-dark">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
