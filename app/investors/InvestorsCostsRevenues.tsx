import type { UiLang } from "./page";

interface InvestorsCostsRevenuesProps {
  lang: UiLang;
  investmentDetails: string[];
  revenues: string[];
}

export function InvestorsCostsRevenues({
  lang,
  investmentDetails,
  revenues,
}: InvestorsCostsRevenuesProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-2 mb-10">
      {/* Costs */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
          {lang === "IT"
            ? "Categorie di costo principali"
            : lang === "RU"
            ? "Основные категории затрат"
            : "Key cost categories"}
        </h3>

        <ul className="space-y-2 text-sm sm:text-base text-slate-800">
          {investmentDetails.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Revenues */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
          {lang === "IT"
            ? "Struttura dei ricavi"
            : lang === "RU"
            ? "Структура доходов"
            : "Revenue breakdown"}
        </h3>

        <ul className="space-y-2 text-sm sm:text-base text-slate-800">
          {revenues.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
