"use client";

import { ArrowRight } from "lucide-react";
import type { UiLang } from "./page";

interface InvestorsHeroProps {
  lang: UiLang;
  setLang: (lang: UiLang) => void;
  marginPercent: number;
  subtitle: string;
  heroTagline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  onPrimaryClick: () => void;
}

export function InvestorsHero({
  lang,
  setLang,
  marginPercent,
  subtitle,
  heroTagline,
  primaryCtaLabel,
  secondaryCtaLabel,
  onPrimaryClick,
}: InvestorsHeroProps) {
  return (
    <header
      className="
  mb-10
  rounded-3xl
  border
  border-slate-200
  bg-[linear-gradient(to_bottom_right,#0c0c0c,#1b1b1b)]
"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12 relative">
        {/* Left: title + subtitle */}
        <div className="space-y-4 max-w-xl relative z-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-slate-300">
            <span className="h-px w-8 bg-slate-500" />
            <span>Lugano · Switzerland · Residential Investment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
            Montalago
          </h1>

          <p className="text-sm sm:text-base text-slate-200">{heroTagline}</p>

          <p className="text-xs sm:text-sm text-slate-300">{subtitle}</p>

          {/* CTAs */}
          <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
            <button
              onClick={onPrimaryClick}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm sm:text-base font-medium text-slate-950 shadow-lg hover:bg-emerald-300 transition"
            >
              {primaryCtaLabel}
              <ArrowRight className="h-4 w-4" />
            </button>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-500 px-6 py-3 text-sm sm:text-base font-medium text-slate-100 hover:bg-slate-800/60 transition"
            >
              {secondaryCtaLabel}
            </a>
          </div>
        </div>

        {/* Right: key investment metric */}
        <div className="mt-4 md:mt-0 md:self-stretch flex items-end justify-start md:justify-end relative z-10">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-5 py-4 sm:px-6 sm:py-5 shadow-lg max-w-sm w-full">
            <p className="text-xs uppercase tracking-widest text-slate-400 mb-1">
              {lang === "IT"
                ? "Indicatore chiave"
                : lang === "RU"
                ? "Ключевой показатель"
                : "Key indicator"}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-emerald-400">
                {marginPercent}%
              </span>
              <span className="text-xs text-slate-400">
                {lang === "IT"
                  ? "margine lordo previsto"
                  : lang === "RU"
                  ? "прогнозируемая валовая маржа"
                  : "projected gross margin"}
              </span>
            </div>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              {lang === "IT"
                ? "Basato su ipotesi conservative di vendita e costo di costruzione."
                : lang === "RU"
                ? "Расчёты основаны на консервативных предположениях по продажам и стоимости строительства."
                : "Based on conservative assumptions for sales prices and construction costs."}
            </p>
          </div>
        </div>

        {/* subtle background accent */}
        <div className="pointer-events-none absolute inset-y-0 right -80px w-64 bg-emerald-500/10 blur-3xl" />
      </div>

      {/* LANG SWITCH BAR */}
      <div className="border-t border-slate-800/60 px-6 py-3 sm:px-8 flex items-center justify-between gap-4 bg-slate-950/50">
        <p className="text-xs text-slate-300">
          {lang === "IT"
            ? "Pagina dedicata agli investitori istituzionali e privati qualificati."
            : lang === "RU"
            ? "Страница для институциональных и квалифицированных частных инвесторов."
            : "Dedicated page for institutional and qualified private investors."}
        </p>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            Language
          </span>
          <div className="inline-flex rounded-full border border-slate-700 bg-slate-900 p-1 shadow-sm">
            {(["EN", "IT", "RU"] as const).map((lng) => (
              <button
                key={lng}
                onClick={() => setLang(lng)}
                className={`px-3 py-1 text-xs rounded-full transition ${
                  lang === lng
                    ? "bg-slate-50 text-slate-950"
                    : "text-slate-200 hover:bg-slate-800"
                }`}
              >
                {lng}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
