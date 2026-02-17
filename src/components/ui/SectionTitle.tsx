export default function SectionTitle({
  title,
  subtitle,
  centered = true,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl font-bold text-dark sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray">{subtitle}</p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded bg-gold ${
          centered ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
