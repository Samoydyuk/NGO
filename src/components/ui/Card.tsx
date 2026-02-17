export default function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white p-6 shadow-md transition-shadow duration-200 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
