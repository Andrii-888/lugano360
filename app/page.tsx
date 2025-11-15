// app/page.tsx

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
        {/* Картинка */}
        <Image
          src="/hero-montalago.png"
          alt="Residenza MonteLago Lugano"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Лёгкое затемнение, чтобы текст всегда читался */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Текст на картинке */}
        <div className="absolute inset-x-4 bottom-8 sm:inset-x-auto sm:left-8 sm:bottom-10 md:left-12 md:bottom-14 lg:left-16 lg:bottom-16 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 max-w-xl">
            Residenza MonteLago Lugano
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-xl leading-snug text-gray-100">
            Premium residential development 400 meters from Lake Lugano, with
            underground parking and wellness area in a quiet, high-demand
            residential zone.
          </p>
        </div>
      </section>

      {/* КНОПКА ДЛЯ ИНВЕСТОРОВ */}
      <section className="px-4 py-10 sm:py-12 lg:py-14 flex flex-col items-center gap-3">
        <Link
          href="/investors"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-black text-white text-base sm:text-lg font-medium shadow hover:bg-gray-800 transition-colors"
        >
          For Investors
        </Link>
        <p className="text-xs sm:text-sm text-gray-500 text-center">
          Detailed financials, Executive Summary and multilingual presentation.
        </p>
      </section>
    </main>
  );
}
