export type EventItem = {
  slug: string;
  date: string;
  endDate?: string;
  location: { uk: string; en: string };
  isOnline: boolean;
  image: string;
  title: { uk: string; en: string };
  description: { uk: string; en: string };
  content: { uk: string; en: string };
};

export const events: EventItem[] = [
  {
    slug: "business-forum-2025",
    date: "2025-03-15",
    endDate: "2025-03-16",
    location: { uk: "Київ, Парковий конгрес-центр", en: "Kyiv, Parkovy Congress Center" },
    isOnline: false,
    image: "/images/event-1.jpg",
    title: {
      uk: "Міжнародний бізнес-форум «Україна — Європа»",
      en: "International Business Forum 'Ukraine — Europe'",
    },
    description: {
      uk: "Щорічний форум, присвячений розвитку бізнес-зв'язків між Україною та країнами ЄС.",
      en: "Annual forum dedicated to developing business connections between Ukraine and EU countries.",
    },
    content: {
      uk: "Міжнародний бізнес-форум «Україна — Європа» збере понад 500 підприємців з України та країн Європейського Союзу. Протягом двох днів учасники обговорюватимуть питання торгівлі, інвестицій, інновацій та спільних бізнес-проєктів. На форумі виступлять міністри, дипломати та лідери бізнесу з обох сторін.",
      en: "The International Business Forum 'Ukraine — Europe' will bring together over 500 entrepreneurs from Ukraine and EU countries. Over two days, participants will discuss trade, investment, innovation, and joint business projects. Ministers, diplomats, and business leaders from both sides will speak at the forum.",
    },
  },
  {
    slug: "webinar-tax-reform",
    date: "2025-02-20",
    location: { uk: "Онлайн (Zoom)", en: "Online (Zoom)" },
    isOnline: true,
    image: "/images/event-2.jpg",
    title: {
      uk: "Вебінар: Податкова реформа 2025 — що потрібно знати бізнесу",
      en: "Webinar: Tax Reform 2025 — What Business Needs to Know",
    },
    description: {
      uk: "Експерти розкажуть про ключові зміни в податковому законодавстві та їх вплив на бізнес.",
      en: "Experts will discuss key changes in tax legislation and their impact on business.",
    },
    content: {
      uk: "На вебінарі провідні податкові консультанти та юристи розкажуть про основні зміни в податковому законодавстві, які набувають чинності у 2025 році. Учасники дізнаються про нові ставки, пільги та вимоги до звітності.",
      en: "At the webinar, leading tax consultants and lawyers will discuss the main changes in tax legislation taking effect in 2025. Participants will learn about new rates, benefits, and reporting requirements.",
    },
  },
  {
    slug: "startup-bootcamp",
    date: "2025-04-05",
    endDate: "2025-04-07",
    location: { uk: "Львів, IT Park", en: "Lviv, IT Park" },
    isOnline: false,
    image: "/images/event-3.jpg",
    title: {
      uk: "Стартап-буткемп: від ідеї до бізнесу",
      en: "Startup Bootcamp: From Idea to Business",
    },
    description: {
      uk: "Трьохденний інтенсив для початківців-підприємців з менторською підтримкою.",
      en: "Three-day intensive for aspiring entrepreneurs with mentoring support.",
    },
    content: {
      uk: "Стартап-буткемп від МАПУ — це трьохденний інтенсивний курс для тих, хто хоче перетворити свою ідею на успішний бізнес. Учасники працюватимуть з досвідченими менторами, навчаться створювати бізнес-плани, залучати інвестиції та виводити продукт на ринок.",
      en: "MAPU Startup Bootcamp is a three-day intensive course for those who want to turn their idea into a successful business. Participants will work with experienced mentors, learn to create business plans, attract investments, and bring products to market.",
    },
  },
  {
    slug: "networking-evening",
    date: "2025-02-28",
    location: { uk: "Київ, Premier Hotel", en: "Kyiv, Premier Hotel" },
    isOnline: false,
    image: "/images/event-4.jpg",
    title: {
      uk: "Нетворкінг-вечір «Бізнес без кордонів»",
      en: "Networking Evening 'Business Without Borders'",
    },
    description: {
      uk: "Неформальна зустріч підприємців для обміну досвідом та пошуку нових партнерів.",
      en: "Informal meeting of entrepreneurs to exchange experiences and find new partners.",
    },
    content: {
      uk: "Нетворкінг-вечір «Бізнес без кордонів» — це можливість у неформальній обстановці познайомитися з підприємцями з різних галузей, обмінятися контактами та знайти потенційних бізнес-партнерів. На зустрічі будуть присутні підприємці з України, Польщі, Німеччини та інших країн.",
      en: "The 'Business Without Borders' networking evening is an opportunity to meet entrepreneurs from various industries in an informal setting, exchange contacts, and find potential business partners. Entrepreneurs from Ukraine, Poland, Germany, and other countries will attend the meeting.",
    },
  },
];
