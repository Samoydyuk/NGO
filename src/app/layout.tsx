import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "МАПУ — Міжнародна асоціація підприємців України",
  description:
    "Міжнародна асоціація підприємців України — платформа для об'єднання підприємців, розвитку бізнесу та міжнародної співпраці.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
