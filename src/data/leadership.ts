export type LeaderItem = {
  name: { uk: string; en: string };
  position: { uk: string; en: string };
  bio: { uk: string; en: string };
  image: string;
};

export const leadership: LeaderItem[] = [
  {
    name: { uk: "Олександр Петренко", en: "Oleksandr Petrenko" },
    position: { uk: "Президент МАПУ", en: "President of MAPU" },
    bio: {
      uk: "Підприємець з 20-річним досвідом у сфері міжнародної торгівлі. Засновник кількох успішних компаній.",
      en: "Entrepreneur with 20 years of experience in international trade. Founder of several successful companies.",
    },
    image: "/images/leader-1.jpg",
  },
  {
    name: { uk: "Наталія Коваленко", en: "Nataliia Kovalenko" },
    position: { uk: "Віце-президент", en: "Vice President" },
    bio: {
      uk: "Експерт у галузі фінансів та інвестицій. Має досвід роботи в міжнародних фінансових організаціях.",
      en: "Expert in finance and investments. Has experience working in international financial organizations.",
    },
    image: "/images/leader-2.jpg",
  },
  {
    name: { uk: "Андрій Мельник", en: "Andrii Melnyk" },
    position: { uk: "Генеральний секретар", en: "Secretary General" },
    bio: {
      uk: "Юрист та бізнес-консультант. Спеціалізується на корпоративному праві та захисті інтересів бізнесу.",
      en: "Lawyer and business consultant. Specializes in corporate law and business advocacy.",
    },
    image: "/images/leader-3.jpg",
  },
  {
    name: { uk: "Ірина Шевченко", en: "Iryna Shevchenko" },
    position: { uk: "Голова комітету з міжнародних зв'язків", en: "Head of International Relations Committee" },
    bio: {
      uk: "Дипломат та бізнес-посередник з великим досвідом у розвитку міжнародних партнерств.",
      en: "Diplomat and business mediator with extensive experience in developing international partnerships.",
    },
    image: "/images/leader-4.jpg",
  },
  {
    name: { uk: "Дмитро Бойко", en: "Dmytro Boiko" },
    position: { uk: "Голова комітету з інновацій", en: "Head of Innovation Committee" },
    bio: {
      uk: "ІТ-підприємець та інвестор. Засновник технологічного стартапу, що працює на міжнародному рівні.",
      en: "IT entrepreneur and investor. Founder of a technology startup operating internationally.",
    },
    image: "/images/leader-5.jpg",
  },
  {
    name: { uk: "Олена Ткаченко", en: "Olena Tkachenko" },
    position: { uk: "Голова комітету з освіти", en: "Head of Education Committee" },
    bio: {
      uk: "Професор бізнес-школи, автор книг з підприємництва. Розробник освітніх програм для бізнесу.",
      en: "Business school professor, author of books on entrepreneurship. Developer of educational programs for business.",
    },
    image: "/images/leader-6.jpg",
  },
];
