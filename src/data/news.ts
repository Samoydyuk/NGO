export type NewsItem = {
  slug: string;
  date: string;
  image: string;
  title: { uk: string; en: string };
  excerpt: { uk: string; en: string };
  content: { uk: string; en: string };
};

export const news: NewsItem[] = [
  {
    slug: "annual-forum-2025",
    date: "2025-01-20",
    image: "/images/news-1.jpg",
    title: {
      uk: "Щорічний бізнес-форум МАПУ 2025",
      en: "MAPU Annual Business Forum 2025",
    },
    excerpt: {
      uk: "Запрошуємо на щорічний бізнес-форум, де підприємці з усієї України та з-за кордону обговорять ключові тенденції розвитку бізнесу.",
      en: "Join our annual business forum where entrepreneurs from across Ukraine and abroad will discuss key business development trends.",
    },
    content: {
      uk: "Щорічний бізнес-форум МАПУ 2025 стане однією з найбільших подій для підприємців України. На форумі виступлять провідні експерти з питань бізнесу, інновацій та міжнародної торгівлі. Учасники матимуть можливість налагодити нові бізнес-контакти, обмінятися досвідом та дізнатися про найновіші тенденції у світі підприємництва.",
      en: "The MAPU Annual Business Forum 2025 will be one of the largest events for Ukrainian entrepreneurs. Leading experts in business, innovation, and international trade will speak at the forum. Participants will have the opportunity to establish new business contacts, share experiences, and learn about the latest trends in entrepreneurship.",
    },
  },
  {
    slug: "new-partnership-eu",
    date: "2025-01-15",
    image: "/images/news-2.jpg",
    title: {
      uk: "Нове партнерство з Європейською бізнес-асоціацією",
      en: "New Partnership with European Business Association",
    },
    excerpt: {
      uk: "МАПУ підписала меморандум про співпрацю з Європейською бізнес-асоціацією, що відкриває нові можливості для українських підприємців.",
      en: "MAPU signed a memorandum of cooperation with the European Business Association, opening new opportunities for Ukrainian entrepreneurs.",
    },
    content: {
      uk: "Міжнародна асоціація підприємців України підписала меморандум про співпрацю з Європейською бізнес-асоціацією. Це партнерство відкриває нові можливості для українських підприємців у сфері міжнародної торгівлі, інвестицій та обміну досвідом з європейськими колегами.",
      en: "The International Association of Entrepreneurs of Ukraine signed a memorandum of cooperation with the European Business Association. This partnership opens new opportunities for Ukrainian entrepreneurs in international trade, investment, and experience exchange with European colleagues.",
    },
  },
  {
    slug: "digital-transformation",
    date: "2025-01-10",
    image: "/images/news-3.jpg",
    title: {
      uk: "Програма цифрової трансформації для малого бізнесу",
      en: "Digital Transformation Program for Small Business",
    },
    excerpt: {
      uk: "МАПУ запускає безкоштовну програму цифрової трансформації для малих підприємств — членів асоціації.",
      en: "MAPU launches a free digital transformation program for small businesses — members of the association.",
    },
    content: {
      uk: "МАПУ запускає програму цифрової трансформації, спрямовану на допомогу малим підприємствам у впровадженні сучасних цифрових технологій. Програма включає серію вебінарів, індивідуальні консультації та практичні воркшопи з питань електронної комерції, цифрового маркетингу та автоматизації бізнес-процесів.",
      en: "MAPU launches a digital transformation program aimed at helping small businesses implement modern digital technologies. The program includes a series of webinars, individual consultations, and practical workshops on e-commerce, digital marketing, and business process automation.",
    },
  },
  {
    slug: "export-support-program",
    date: "2024-12-28",
    image: "/images/news-4.jpg",
    title: {
      uk: "Програма підтримки експорту українських товарів",
      en: "Ukrainian Goods Export Support Program",
    },
    excerpt: {
      uk: "Нова програма допоможе українським підприємцям вийти на міжнародні ринки з конкурентоспроможною продукцією.",
      en: "A new program will help Ukrainian entrepreneurs enter international markets with competitive products.",
    },
    content: {
      uk: "МАПУ разом з партнерами запускає комплексну програму підтримки експорту українських товарів. Програма передбачає допомогу в сертифікації продукції, пошуку іноземних партнерів, участі у міжнародних виставках та оформленні експортної документації.",
      en: "MAPU together with partners launches a comprehensive program to support the export of Ukrainian goods. The program provides assistance in product certification, finding foreign partners, participating in international exhibitions, and preparing export documentation.",
    },
  },
  {
    slug: "women-entrepreneurship",
    date: "2024-12-20",
    image: "/images/news-5.jpg",
    title: {
      uk: "Жіноче підприємництво: нові горизонти",
      en: "Women's Entrepreneurship: New Horizons",
    },
    excerpt: {
      uk: "МАПУ запускає спеціальну програму підтримки жінок-підприємниць в Україні.",
      en: "MAPU launches a special support program for women entrepreneurs in Ukraine.",
    },
    content: {
      uk: "Міжнародна асоціація підприємців України запускає спеціальну програму підтримки жінок-підприємниць. Програма включає менторські програми, бізнес-тренінги, доступ до фінансування та створення мережі підтримки для жінок у бізнесі.",
      en: "The International Association of Entrepreneurs of Ukraine launches a special support program for women entrepreneurs. The program includes mentorship programs, business trainings, access to financing, and creating a support network for women in business.",
    },
  },
  {
    slug: "green-business-initiative",
    date: "2024-12-15",
    image: "/images/news-6.jpg",
    title: {
      uk: "Ініціатива «Зелений бізнес» для сталого розвитку",
      en: "Green Business Initiative for Sustainable Development",
    },
    excerpt: {
      uk: "МАПУ представляє нову ініціативу, спрямовану на впровадження принципів сталого розвитку у бізнесі.",
      en: "MAPU presents a new initiative aimed at implementing sustainable development principles in business.",
    },
    content: {
      uk: "МАПУ представляє ініціативу «Зелений бізнес», яка допоможе українським підприємствам впроваджувати екологічно відповідальні практики. Ініціатива включає аудит екологічного впливу, консультації з енергоефективності та програми переходу на зелені технології.",
      en: "MAPU presents the 'Green Business' initiative that will help Ukrainian enterprises implement environmentally responsible practices. The initiative includes environmental impact audits, energy efficiency consultations, and programs for transitioning to green technologies.",
    },
  },
];
