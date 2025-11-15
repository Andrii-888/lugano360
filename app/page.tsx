import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Image */}
      <div className="relative w-full h-[70vh]">
        <Image
          src="/hero-montalago.png"
          alt="Residenza MonteLago Lugano"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />

        {/* Hero Text */}
        <div className="absolute bottom-10 left-10 text-white">
          <h1 className="text-4xl font-semibold mb-2">
            Residenza MonteLago Lugano
          </h1>
          <p className="text-lg max-w-xl">
            Premium residential development 400 meters from Lake Lugano.
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="px-6 py-10 flex justify-center">
        <a
          href="/investors"
          className="px-8 py-3 bg-black text-white rounded-full text-lg shadow hover:bg-gray-800 transition"
        >
          For Investors
        </a>
      </div>
    </main>
  );
}
