export const languages = {
  en: "English",
  ua: "Ukrain",
};

export type Languages = keyof typeof languages;

export const defaultLang = "en";

export const ui: any = {
  en: {
    header: {
      contactUs: "contact us",
    },
    hero: {
      title: "ENGINEERING YOUR",
      subTitle: "DREAMS",
      descripton:
        "Transform your vision into reality with our expert team of engineers, committed to delivering innovative solutions tailored to your unique goals/aspirations.",
    },
    home: {
      about: {
        description:
          "We are firm believers that: no matter the size or budgets of a company, they should have access to the very best technical expertise to overcome any challenge. We also know that talented professionals crave dynamic and engaging environments to truly shine. Our mission is to unite these two values and empower businesses and professionals alike to achieve greatness.",
        aboutUs: "more about us",
      },
    },
    services: {
      tag: "SERVICES",
      title:
        "Our services will help you to accomplish your purpose easier and better.",
      explore: "explore",
    },
  },
  ua: {
    hero: {
      title: "Розробка твоїх",
      subTitle: "Мрій",
      descripton:
        "Перетворіть своє бачення в реальність за допомогою нашої експертної команди інженерів, яка прагне надавати інноваційні рішення, адаптовані до ваших унікальних цілей/прагнень.",
    },
    home: {
      about: {
        description:
          "Ми твердо переконані, що: незалежно від розміру чи бюджету компанії, вони повинні мати доступ до найкращих технічних знань, щоб подолати будь-яку проблему. Ми також знаємо, що талановиті професіонали жадають динамічного та привабливого середовища, щоб справді сяяти. Наша місія полягає в тому, щоб об’єднати ці дві цінності та надати можливість як компаніям, так і професіоналам досягти величі.",
        aboutUs: "more about us",
      },
    },
  },
} as const;
