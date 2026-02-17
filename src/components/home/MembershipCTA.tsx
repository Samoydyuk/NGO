import { useTranslations } from "next-intl";
import {
  Users,
  CalendarDays,
  Globe,
  Scale,
  GraduationCap,
  ShieldCheck,
  Quote,
} from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

export default function MembershipCTA() {
  const t = useTranslations("membershipSection");

  const benefits = [
    { icon: Users, text: t("benefits.networking") },
    { icon: CalendarDays, text: t("benefits.events") },
    { icon: Globe, text: t("benefits.international") },
    { icon: Scale, text: t("benefits.support") },
    { icon: GraduationCap, text: t("benefits.education") },
    { icon: ShieldCheck, text: t("benefits.advocacy") },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-dark py-20 lg:py-28">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-gold" />
      </div>

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              {t("subtitle")}
            </p>
            <div className="mt-4 h-1 w-20 rounded bg-gold" />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.text}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-colors hover:bg-white/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/20">
                    <b.icon className="h-5 w-5 text-gold" />
                  </div>
                  <span className="text-sm font-medium text-white">{b.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/membership" variant="secondary" className="px-8 py-4 text-base">
                {t("cta")}
              </Button>
            </div>
          </div>

          {/* Right: testimonials */}
          <div className="flex flex-col justify-center gap-6">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <Quote className="mb-3 h-8 w-8 text-gold/60" />
              <p className="text-base italic leading-relaxed text-blue-50">
                {t("testimonial1")}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20" />
                <span className="text-sm font-medium text-blue-200">
                  {t("testimonial1Author")}
                </span>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <Quote className="mb-3 h-8 w-8 text-gold/60" />
              <p className="text-base italic leading-relaxed text-blue-50">
                {t("testimonial2")}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gold/20" />
                <span className="text-sm font-medium text-blue-200">
                  {t("testimonial2Author")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
