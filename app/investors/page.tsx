"use client";

import { useState } from "react";
import { en } from "@/montalago/translations/en";
import { it } from "@/montalago/translations/it";
import { ru } from "@/montalago/translations/ru";
import { financialData } from "@/montalago/financials";
import { executiveSummary } from "@/montalago/executiveSummary";
import { MapPin } from "lucide-react";
import { InvestorsHero } from "./InvestorsHero";
import { InvestorsHighlights } from "./InvestorsHighlights";
import { InvestorsCostsRevenues } from "./InvestorsCostsRevenues";
import { InvestorsExecutiveSummary } from "./InvestorsExecutiveSummary";

const languages = { EN: en, IT: it, RU: ru };

export type UiLang = "EN" | "IT" | "RU";
type DataLang = "en" | "it" | "ru";

export default function InvestorsPage() {
  const [lang, setLang] = useState<UiLang>("EN");
  const [showExecutive, setShowExecutive] = useState(false);

  const t = languages[lang].investorPage;
  const langKey = lang.toLowerCase() as DataLang;

  const totals = financialData.totals;
  const revenues = financialData.revenues[langKey];
  const investmentDetails = financialData.investmentDetails[langKey];
  const summaryText = financialData.summaryText[langKey];

  const exec = executiveSummary[langKey];

  const formatChf = (value: number) => `CHF ${value.toLocaleString("de-CH")}`;

  const heroTagline =
    lang === "IT"
      ? "Progetto residenziale premium sul Lago di Lugano, con forte potenziale di rendimento."
      : lang === "RU"
      ? "Премиальный жилой проект на озере Лугано с высоким инвестиционным потенциалом."
      : "Premium residential development on Lake Lugano with strong investment potential.";

  const primaryCtaLabel =
    lang === "IT"
      ? "Richiedi il pacchetto completo d’investimento"
      : lang === "RU"
      ? "Запросить полный инвестиционный пакет"
      : "Request full investment package";

  const secondaryCtaLabel =
    lang === "IT"
      ? "Richiedi una call"
      : lang === "RU"
      ? "Запросить созвон"
      : "Book an investor call";

  const highlightsTitle =
    lang === "IT"
      ? "Perché investire in Montalago"
      : lang === "RU"
      ? "Почему стоит инвестировать в Montalago"
      : "Why invest in Montalago";

  const highlights: string[] =
    lang === "IT"
      ? [
          "Posizione strategica a Lugano, vicino al confine italiano",
          "Mercato immobiliare svizzero stabile e regolamentato",
          "Domanda crescente per appartamenti moderni vista lago",
        ]
      : lang === "RU"
      ? [
          "Стратегическое расположение в Лугано рядом с итальянской границей",
          "Стабильный и регулируемый швейцарский рынок недвижимости",
          "Растущий спрос на современные квартиры с видом на озеро",
        ]
      : [
          "Strategic location in Lugano near the Italian border",
          "Stable and highly regulated Swiss real-estate market",
          "Growing demand for modern lake-view apartments",
        ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* HERO */}
        <InvestorsHero
          lang={lang}
          setLang={setLang}
          marginPercent={totals.marginPercent}
          subtitle={t.subtitle}
          heroTagline={heroTagline}
          primaryCtaLabel={primaryCtaLabel}
          secondaryCtaLabel={secondaryCtaLabel}
          onPrimaryClick={() => setShowExecutive(true)}
        />

        {/* HIGHLIGHTS + KEY FIGURES */}
        <InvestorsHighlights
          lang={lang}
          highlightsTitle={highlightsTitle}
          highlights={highlights}
          totals={totals}
          formatChf={formatChf}
        />

        {/* COSTS + REVENUES */}
        <InvestorsCostsRevenues
          lang={lang}
          investmentDetails={investmentDetails}
          revenues={revenues}
        />

        {/* SHORT SUMMARY */}
        <section className="mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm sm:text-base leading-relaxed text-slate-700">
              {summaryText}
            </p>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY (COLLAPSIBLE) */}
        {showExecutive && <InvestorsExecutiveSummary exec={exec} />}

        {/* CONTACT + BUTTON */}
        <section
          id="contact"
          className="border-t border-slate-200 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">
              {t.contactTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Lugano · Ticino · Switzerland
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm sm:text-base text-slate-700">
              <MapPin className="h-5 w-5" style={{ color: "#DB4437" }} />
              <a
                href="https://www.google.com/maps?q=Via+Casoro+2,+Lugano"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-900 hover:underline"
              >
                Via Casoro 2, Lugano
              </a>
            </div>
          </div>

          <button
            className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm sm:text-base shadow-sm hover:bg-slate-800 transition"
            onClick={() => setShowExecutive((prev) => !prev)}
          >
            {showExecutive
              ? lang === "RU"
                ? "Скрыть инвестиционный пакет"
                : lang === "IT"
                ? "Nascondi il pacchetto investitore"
                : "Hide investment package"
              : primaryCtaLabel}
          </button>
        </section>
      </div>
    </main>
  );
}
