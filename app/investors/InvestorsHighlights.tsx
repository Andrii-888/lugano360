import type { UiLang } from "./page";

type Totals = {
  investment: number;
  revenues: number;
  profit: number;
  marginPercent: number;
};

interface InvestorsHighlightsProps {
  lang: UiLang;
  highlightsTitle: string;
  highlights: string[];
  totals: Totals;
  formatChf: (value: number) => string;
}

export function InvestorsHighlights({
  lang,
  highlightsTitle,
  highlights,
  totals,
  formatChf,
}: InvestorsHighlightsProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr] mb-10">
      {/* Highlights */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
          {highlightsTitle}
        </h2>

        <ul className="space-y-2 text-sm sm:text-base text-slate-800">
          {highlights.map((item, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Key Figures */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">
          {lang === "IT"
            ? "Indicatori finanziari principali"
            : lang === "RU"
            ? "Ключевые финансовые показатели"
            : "Key financial figures"}
        </h2>

        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex justify-between gap-4">
            <span className="text-slate-500">
              {lang === "IT"
                ? "Investimento totale"
                : lang === "RU"
                ? "Общие инвестиции"
                : "Total investment"}
            </span>
            <span className="font-semibold text-slate-900">
              {formatChf(totals.investment)}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-slate-500">
              {lang === "IT"
                ? "Ricavi previsti"
                : lang === "RU"
                ? "Ожидаемые доходы"
                : "Projected revenues"}
            </span>
            <span className="font-semibold text-slate-900">
              {formatChf(totals.revenues)}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-slate-500">
              {lang === "IT"
                ? "Utile lordo"
                : lang === "RU"
                ? "Валовая прибыль"
                : "Gross profit"}
            </span>
            <span className="font-semibold text-slate-900">
              {formatChf(totals.profit)}
            </span>
          </div>

          <div className="flex justify-between gap-4">
            <span className="text-slate-500">
              {lang === "IT"
                ? "Margine lordo"
                : lang === "RU"
                ? "Валовая маржа"
                : "Gross margin"}
            </span>
            <span className="font-semibold text-slate-900">
              {totals.marginPercent}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
