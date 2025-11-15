// app/investors/page.tsx

"use client";

import { useState } from "react";
import { en } from "@/montalago/translations/en";
import { it } from "@/montalago/translations/it";
import { ru } from "@/montalago/translations/ru";
import { projectName } from "@/montalago/projectInfo";
import { financialData } from "@/montalago/financials";
import { executiveSummary } from "@/montalago/executiveSummary";

const languages = {
  EN: en,
  IT: it,
  RU: ru,
};

type UiLang = "EN" | "IT" | "RU";
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

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 lg:py-16">
        {/* HEADER */}
        <header className="border-b border-slate-200 pb-6 mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-500">
              <span className="h-px w-8 bg-slate-300" />
              <span>Lugano · Switzerland · Residential</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
              {projectName}
            </h1>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start md:self-end">
            <span className="text-xs text-slate-500 uppercase tracking-widest">
              Language
            </span>
            <div className="inline-flex rounded-full border border-slate-200 bg-white p-1 shadow-sm">
              {(["EN", "IT", "RU"] as const).map((lng) => (
                <button
                  key={lng}
                  onClick={() => setLang(lng)}
                  className={`px-3 py-1 text-xs rounded-full transition ${
                    lang === lng
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {lng}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* OVERVIEW + KEY NUMBERS */}
        <section className="grid gap-6 lg:grid-cols-[1.4fr,1fr] mb-10">
          {/* Overview */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
              {t.overviewTitle}
            </h2>
            <ul className="space-y-2 text-sm text-slate-800">
              {t.overview.map((item: string, index: number) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key figures */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">
              Key figures
            </h2>
            <div className="space-y-3 text-sm">
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

        {/* COST CATEGORIES + REVENUES */}
        <section className="grid gap-6 lg:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
              {lang === "IT"
                ? "Categorie di costo principali"
                : lang === "RU"
                ? "Основные категории затрат"
                : "Key cost categories"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-800">
              {investmentDetails.map((item: string, index: number) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-3">
              {lang === "IT"
                ? "Struttura dei ricavi"
                : lang === "RU"
                ? "Структура доходов"
                : "Revenue breakdown"}
            </h3>
            <ul className="space-y-2 text-sm text-slate-800">
              {revenues.map((item: string, index: number) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-1 h-1 w-1 rounded-full bg-slate-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SHORT SUMMARY */}
        <section className="mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700">
              {summaryText}
            </p>
          </div>
        </section>

        {/* EXECUTIVE SUMMARY (раскрывается по кнопке) */}
        {showExecutive && (
          <section className="mb-12">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
              <p className="text-sm font-medium text-slate-800">
                {exec.headline}
              </p>

              {exec.sections.map((section, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {section.title}
                  </h4>
                  {section.paragraphs.map((p, pi) => (
                    <p
                      key={pi}
                      className="text-sm leading-relaxed text-slate-700"
                    >
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="list-disc ml-5 space-y-1 text-sm text-slate-700">
                      {section.bullets.map((b, bi) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CONTACT + BUTTON */}
        <section className="border-t border-slate-200 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">
              {t.contactTitle}
            </h3>
            <p className="text-sm text-slate-600">
              Lugano · Ticino · Switzerland
            </p>
          </div>
          <button
            className="px-6 py-3 bg-slate-900 text-white rounded-full text-sm shadow-sm hover:bg-slate-800 transition"
            onClick={() => setShowExecutive((prev) => !prev)}
          >
            {showExecutive
              ? lang === "RU"
                ? "Скрыть инвестиционный пакет"
                : lang === "IT"
                ? "Nascondi il pacchetto investitore"
                : "Hide investment package"
              : lang === "RU"
              ? "Запросить полный инвестиционный пакет"
              : lang === "IT"
              ? "Richiedi il pacchetto completo d’investimento"
              : "Request full investment package"}
          </button>
        </section>
      </div>
    </main>
  );
}
