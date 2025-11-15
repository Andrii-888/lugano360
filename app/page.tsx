import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] overflow-hidden">
        {/* Hero Image */}
        <Image
          src="/hero-montalago.png"
          alt="Residenza MonteLago Lugano"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* TEXT CONTENT */}
        <div className="absolute left-8 bottom-12 md:left-16 md:bottom-16 text-white drop-shadow-xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-3">
            Residenza MonteLago Lugano
          </h1>

          <p className="text-lg md:text-xl max-w-xl leading-snug text-gray-100">
            Premium residential development 400 meters from Lake Lugano with
            underground parking and wellness area.
          </p>
        </div>
      </section>

      {/* BUTTON */}
      <div className="px-6 py-14 flex justify-center">
        <a
          href="/investors"
          className="px-8 py-3 bg-black text-white rounded-full text-lg font-medium shadow-lg hover:bg-gray-800 transition-colors"
        >
          For Investors
        </a>
      </div>
    </main>
  );
}
