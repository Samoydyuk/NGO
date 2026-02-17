import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import Container from "../ui/Container";

export default function HeroSection() {
  const t = useTranslations("hero");

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
    { value: t("stat4"), label: t("stat4Label") },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-primary-dark to-primary py-20 sm:py-28 lg:py-36">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gold/5" />
        <div className="absolute -bottom-60 -left-60 h-[800px] w-[800px] rounded-full bg-primary/20" />
        <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-gold/40" />
        <div className="absolute left-1/3 top-1/4 h-3 w-3 rounded-full bg-gold/30" />
        <div className="absolute right-1/3 bottom-1/4 h-1.5 w-1.5 rounded-full bg-blue-300/30" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-blue-100">
              {t("trustedBy")} — 500+ {t("stat1Label").toLowerCase()}
            </span>
          </div>

          <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-200/80 sm:text-xl">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/membership" variant="secondary" className="group gap-2 px-8 py-4 text-base">
              {t("cta")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              href="/about"
              variant="outline"
              className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white hover:text-primary px-8 py-4 text-base"
            >
              {t("learnMore")}
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4 sm:gap-8 sm:p-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-gold sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-blue-200/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
