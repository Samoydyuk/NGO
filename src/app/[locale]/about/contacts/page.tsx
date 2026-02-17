"use client";

import { useTranslations } from "next-intl";
import { MapPin, Phone, Mail, Clock, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ContactsPage() {
  const t = useTranslations("contactsPage");
  const tFooter = useTranslations("footer");

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-dark">{t("info")}</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">{tFooter("address")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">{tFooter("phone")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-dark">{tFooter("email")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/20 hover:shadow-sm">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-light">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark">{t("workingHours")}</p>
                    <p className="text-gray">{t("workingHoursText")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-dark">{t("formTitle")}</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark">
                    {t("subject")}
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-dark">
                    {t("message")}
                  </label>
                  <textarea
                    rows={5}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full">
                  {t("send")}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-gray-light py-16 lg:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-dark sm:text-3xl">
              {t("faqTitle")}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-100 bg-white transition-all hover:border-primary/20"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <span className="font-semibold text-dark">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gray transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm leading-relaxed text-gray">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
