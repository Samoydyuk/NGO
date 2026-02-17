import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  Users, CalendarDays, Globe, Scale, GraduationCap, ShieldCheck,
  CheckCircle, Award, Star, Handshake, HeartHandshake,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import MembershipForm from "@/components/membership/MembershipForm";

export default async function MembershipPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("membershipPage");
  const tBenefits = await getTranslations("membershipSection");

  const benefits = [
    { icon: Users, text: tBenefits("benefits.networking") },
    { icon: CalendarDays, text: tBenefits("benefits.events") },
    { icon: Globe, text: tBenefits("benefits.international") },
    { icon: Scale, text: tBenefits("benefits.support") },
    { icon: GraduationCap, text: tBenefits("benefits.education") },
    { icon: ShieldCheck, text: tBenefits("benefits.advocacy") },
  ];

  const steps = [t("step1"), t("step2"), t("step3"), t("step4")];

  const criteria = [
    { icon: Award, title: t("criteria1"), desc: t("criteria1Desc") },
    { icon: Star, title: t("criteria2"), desc: t("criteria2Desc") },
    { icon: Handshake, title: t("criteria3"), desc: t("criteria3Desc") },
    { icon: HeartHandshake, title: t("criteria4"), desc: t("criteria4Desc") },
  ];

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

      {/* Benefits */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionTitle title={tBenefits("title2")} />
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.text}
                className="group flex items-center gap-4 rounded-xl border border-gray-100 p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                  <b.icon className="h-6 w-6 text-primary transition-colors group-hover:text-white" />
                </div>
                <span className="text-sm font-medium text-dark">{b.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Admission criteria */}
      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <SectionTitle title={t("criteriaTitle")} subtitle={t("criteriaSubtitle")} />
          <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
            {criteria.map((c) => (
              <div
                key={c.title}
                className="group flex items-start gap-5 rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary-light transition-colors group-hover:bg-primary">
                  <c.icon className="h-7 w-7 text-primary transition-colors group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-dark">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/membership#form" variant="primary" className="px-8 py-4 text-base">
              {t("applyNow")}
            </Button>
          </div>
        </Container>
      </section>

      {/* How to join */}
      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionTitle title={t("howToJoin")} />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-gray-100 p-6 transition-all hover:border-primary/20 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {i + 1}
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-medium text-dark">{step}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application form */}
      <section id="form" className="bg-gray-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionTitle title={t("formTitle")} />
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <MembershipForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
