"use client";

import { useTranslations } from "next-intl";
import Button from "../ui/Button";

export default function MembershipForm() {
  const t = useTranslations("membershipPage");

  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            {t("companyName")}
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            {t("contactPerson")}
          </label>
          <input
            type="text"
            className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-dark">
            {t("phone")}
          </label>
          <input
            type="tel"
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
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">
          {t("activity")}
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium text-dark">
          {t("motivation")}
        </label>
        <textarea
          rows={4}
          className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary-light"
        />
      </div>
      <Button type="submit" variant="primary">
        {t("submit")}
      </Button>
    </form>
  );
}
