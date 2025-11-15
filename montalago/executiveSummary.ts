// montalago/executiveSummary.ts

type LangKey = "en" | "it" | "ru";

type ExecutiveSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ExecutiveSummary = {
  headline: string;
  sections: ExecutiveSection[];
};

export const executiveSummary: Record<LangKey, ExecutiveSummary> = {
  en: {
    headline:
      "Premium Swiss residential development in a top Lugano location, designed as a stable and liquid investment asset.",
    sections: [
      {
        title: "Project overview",
        paragraphs: [
          "Residenza MonteLago Lugano is a modern premium residential development in one of the most attractive residential areas of Lugano, approximately 400 m from Lake Lugano and about 7 minutes from the city center.",
          "The project combines Swiss Premium Minimalism architecture, strong urban planning fundamentals and a location with high demand and limited new supply.",
        ],
      },
      {
        title: "Location & connectivity",
        paragraphs: [
          "The residence is located in a quiet and prestigious residential area of Lugano, within walking distance of the lake and close to public transport, schools and services.",
        ],
        bullets: [
          "Approx. 400 m to Lake Lugano",
          "Approx. 7 minutes to Lugano city center",
          "Approx. 15 km to the Italian border",
          "Quick access to main roads and motorway connections",
        ],
      },
      {
        title: "Key project data",
        paragraphs: [
          "Plot size: 8’378 m²",
          "Total permitted SUL: 3’528 m² (1’484 m² existing + 2’044 m² new)",
          "Building volume: 6’336 m³ above ground, 3’780 m³ underground, 10’116 m³ total",
        ],
      },
      {
        title: "Financial highlights",
        paragraphs: [
          "Total project investment: approx. CHF 21.8 m",
          "Projected total revenues: approx. CHF 28.2 m",
          "Gross profit (before taxes): approx. CHF 6.4 m",
          "Projected gross margin: around 28%",
        ],
      },
      {
        title: "Why this project",
        paragraphs: [
          "The Lugano and Ticino residential market is regarded as one of the most stable in Europe, with strong demand for high-end units and limited availability of buildable land.",
          "Premium residential assets in the region historically show solid liquidity and an average price growth of around 5–7% per year over the medium term.",
        ],
        bullets: [
          "Premium Swiss real estate in a top Lugano location",
          "Limited number of comparable development opportunities",
          "Stable and predictable ROI profile",
          "High liquidity and strong demand from both local and international buyers",
          "Best-in-class project in its segment at foundation stage near the lake",
        ],
      },
    ],
  },

  it: {
    headline:
      "Immobiliare residenziale svizzera premium in una top location di Lugano, concepita come asset stabile e liquido.",
    sections: [
      {
        title: "Panoramica del progetto",
        paragraphs: [
          "Residenza MonteLago Lugano è uno sviluppo residenziale premium in una delle zone abitative più attraenti di Lugano, a circa 400 m dal lago e a circa 7 minuti dal centro città.",
          "Il progetto unisce un’architettura in stile Swiss Premium Minimalism, solidi fondamentali urbanistici e una location con forte domanda e offerta limitata di nuove unità.",
        ],
      },
      {
        title: "Location e collegamenti",
        paragraphs: [
          "La residenza si trova in una zona residenziale tranquilla e prestigiosa di Lugano, a pochi minuti a piedi dal lago e vicina ai mezzi pubblici, scuole e servizi.",
        ],
        bullets: [
          "Circa 400 m dal Lago di Lugano",
          "Circa 7 minuti dal centro di Lugano",
          "Circa 15 km dal confine con l’Italia",
          "Accesso rapido alle principali arterie stradali e autostradali",
        ],
      },
      {
        title: "Dati chiave del progetto",
        paragraphs: [
          "Superficie del fondo: 8’378 m²",
          "SUL complessiva: 3’528 m² (1’484 m² esistente + 2’044 m² nuova)",
          "Volume edificabile: 6’336 m³ fuori terra, 3’780 m³ interrato, 10’116 m³ totali",
        ],
      },
      {
        title: "Punti di forza finanziari",
        paragraphs: [
          "Investimento complessivo: ca. CHF 21.8 mio",
          "Ricavi totali previsti: ca. CHF 28.2 mio",
          "Utile lordo (prima di imposte): ca. CHF 6.4 mio",
          "Margine lordo previsto: intorno al 28%",
        ],
      },
      {
        title: "Perché questo progetto",
        paragraphs: [
          "Il mercato residenziale di Lugano e del Ticino è considerato tra i più stabili in Europa, con forte domanda per unità di alto livello e disponibilità limitata di terreni edificabili.",
          "Gli asset residenziali premium nella regione mostrano storicamente una buona liquidità e una crescita media dei prezzi intorno al 5–7% annuo nel medio periodo.",
        ],
        bullets: [
          "Immobiliare residenziale svizzera premium in una top location di Lugano",
          "Numero limitato di opportunità di sviluppo comparabili",
          "Profilo di ROI stabile e prevedibile",
          "Elevata liquidità e forte domanda da parte di acquirenti locali e internazionali",
          "Progetto di riferimento nella sua categoria allo stadio delle fondazioni vicino al lago",
        ],
      },
    ],
  },

  ru: {
    headline:
      "Премиальная швейцарская недвижимость в топ-локации Лугано, рассчитанная как надёжный и ликвидный инвестиционный актив.",
    sections: [
      {
        title: "Обзор проекта",
        paragraphs: [
          "Residenza MonteLago Lugano — это современный премиальный жилой комплекс в одном из самых престижных районов Лугано, примерно в 400 метрах от озера и около 7 минут от центра города.",
          "Проект сочетает архитектуру в стиле Swiss Premium Minimalism, сильные градостроительные характеристики и локацию с высоким спросом и ограниченным предложением новых объектов.",
        ],
      },
      {
        title: "Локация и доступность",
        paragraphs: [
          "Резиденция расположена в тихом и престижном жилом районе Лугано, в пешей доступности от озера, рядом с общественным транспортом, школами и инфраструктурой.",
        ],
        bullets: [
          "Около 400 м до озера Лугано",
          "Около 7 минут до центра Лугано",
          "Около 15 км до границы с Италией",
          "Быстрый доступ к основным дорогам и автостраде",
        ],
      },
      {
        title: "Ключевые параметры проекта",
        paragraphs: [
          "Площадь участка: 8’378 m²",
          "Общая SUL: 3’528 m² (1’484 m² существующая + 2’044 m² новая)",
          "Строительный объём: 6’336 m³ надземный, 3’780 m³ подземный, 10’116 m³ общий",
        ],
      },
      {
        title: "Финансовые показатели",
        paragraphs: [
          "Общий бюджет проекта: около CHF 21.8 млн",
          "Прогнозируемая выручка: около CHF 28.2 млн",
          "Валовая прибыль (до налогов): около CHF 6.4 млн",
          "Ожидаемая валовая маржа: около 28%",
        ],
      },
      {
        title: "Инвестиционная привлекательность",
        paragraphs: [
          "Рынок жилой недвижимости Лугано и Тичино считается одним из самых стабильных в Европе, с высоким спросом на премиальные объекты и ограниченным количеством участков под застройку.",
          "Премиальная недвижимость в регионе исторически показывает хорошую ликвидность и средний рост цен порядка 5–7% в год в среднесрочной перспективе.",
        ],
        bullets: [
          "Премиальная швейцарская недвижимость в топ-локации Лугано",
          "Ограниченное количество сопоставимых проектов на рынке",
          "Стабильный и прогнозируемый профиль доходности (ROI)",
          "Высокая ликвидность и интерес как со стороны местных, так и международных покупателей",
          "Один из лучших объектов на стадии фундамента рядом с озером",
        ],
      },
    ],
  },
};
