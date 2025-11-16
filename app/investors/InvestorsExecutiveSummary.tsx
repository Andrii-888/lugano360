interface ExecSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface ExecutiveSummaryData {
  headline: string;
  sections: ExecSection[];
}

interface InvestorsExecutiveSummaryProps {
  exec: ExecutiveSummaryData;
}

export function InvestorsExecutiveSummary({
  exec,
}: InvestorsExecutiveSummaryProps) {
  return (
    <section className="mb-12">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <p className="text-sm sm:text-base font-medium text-slate-800">
          {exec.headline}
        </p>

        {exec.sections.map((section, idx) => (
          <div key={idx} className="space-y-3">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              {section.title}
            </h4>

            {section.paragraphs.map((p, pi) => (
              <p
                key={pi}
                className="text-sm sm:text-base leading-relaxed text-slate-700"
              >
                {p}
              </p>
            ))}

            {section.bullets && (
              <ul className="list-disc ml-5 space-y-1 text-sm sm:text-base text-slate-700">
                {section.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
